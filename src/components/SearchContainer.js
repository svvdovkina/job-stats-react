import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { clearFilteres, handleChange } from '../features/allJobs/allJobsSlice';
import { debounce } from '../utils/helpers';
import FormRow from './FormRow';

const SearchContainer = ()=>{

    const {
        isLoading, 
        search, 
        searchStatus, 
        searchType, 
        sort, 
        sortOptions
    } = useSelector(store=>store.allJobs);

    const dispatch = useDispatch();

    const {jobTypeOptions, statusOptions} = useSelector(store=>store.job);

    const [localSearch, setLocalSearch] = useState(search);

    const handleSearch = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({name, value}));
    }

    const debouncedDispatch = useMemo(()=>debounce(dispatch, 1000), []);

    const handleLocalSearch = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setLocalSearch(value);
        debouncedDispatch(handleChange({name, value}));
    }

    const clearSearch = (e) => {
        e.preventDefault();
        dispatch(clearFilteres());
    }

    return <Wrapper className="form-container">
        <h3>Search form</h3>
        <form action="">
            <FormRow 
                type="text" 
                name="search" 
                value={localSearch} 
                handleChange={handleLocalSearch}
            />
            <FormRow 
                type="select" 
                name="searchStatus" 
                value={searchStatus} 
                label="status" 
                handleChange={handleSearch} 
                options={['all', ...statusOptions]}
            />
            <FormRow 
                type="select" 
                name="searchType" 
                value={searchType} 
                label="type" 
                handleChange={handleSearch} 
                options={['all', ...jobTypeOptions]}
            />
            <FormRow 
                type="select" 
                name="sort" 
                value={sort} 
                handleChange={handleSearch} 
                options={sortOptions}
            />
            <button 
                className="btn form-btn cancel-btn" 
                onClick={clearSearch} 
                disabled={isLoading}
            >
                Clear Filters
            </button>
        </form>
    </Wrapper>
}

export default SearchContainer

const Wrapper = styled.div`
    margin-top: 20px;
    form {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 5px 30px;
    }

    @media screen and (max-width: 769px) {
        form {
            grid-template-columns:  1fr 1fr;
        }
    }

    @media screen and (max-width: 592px) {
        form {
            grid-template-columns: 1fr;
        }
    }

`