import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllJobs } from '../features/allJobs/allJobsSlice';
import Job from './Job';
import Loader from './Loader';
import PageBtnContainer from './PageBtnContainer';

const JobsContainer = ()=>{

    const {
        isLoading, 
        jobs, 
        page, 
        search,
        searchStatus,
        searchType,
        sort, 
        totalJobs,
        numOfPages,
        error
    } = useSelector(store=>store.allJobs);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllJobs({page, search, searchStatus, searchType, sort}))
        // eslint-disable-next-line
    }, [page, search, searchStatus, searchType, sort])

    if (isLoading) {
        return <Wrapper>
                <Loader/>
            </Wrapper>
    }

    if (error) {
        return <Wrapper>
                <h3>There was an error...</h3>
                <p>{error}</p>
            </Wrapper>
    }

    if (jobs.length === 0) {
        return <Wrapper>
                <h3>No jobs with current filters...</h3>
            </Wrapper>
    }

    return <Wrapper >
        <h3>{totalJobs} jobs found:</h3>
        <div className='jobs'>
            {jobs.map((job)=>{
                return <Job key={job._id} {...job}/>
            })}
        </div>
        {numOfPages > 1 && <PageBtnContainer/>}
    </Wrapper>
}

export default JobsContainer

const Wrapper = styled.div`
    margin:20px;
    .jobs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    @media screen and (max-width: 769px) {
        .jobs {
            grid-template-columns: 1fr;
            justify-items: center;
        }
    }
`