import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getAllJobs } from '../features/allJobs/allJobsSlice';
import Job from './Job';

const JobsContainer = ()=>{

    const {isLoading, jobs, error} = useSelector(store=>store.allJobs);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllJobs())
    },[])

    if (isLoading) {
        return <Wrapper>
                <h3>Loading...</h3>
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
        <h3>Jobs info</h3>
        <div className='jobs'>
            {jobs.map((job)=>{
                return <Job key={job._id} {...job}/>
            })}
        </div>
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