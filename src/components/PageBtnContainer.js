import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"
import { changePage } from '../features/allJobs/allJobsSlice';

const PageBtnContainer = ({title, count, icon, status})=>{
    
    const {page, numOfPages} = useSelector(store=>store.allJobs);
    const dispatch = useDispatch();
    
    const pages = new Array(numOfPages).fill(1);

    const handlePrev = ()=>{
        const newPage = page - 1;
        dispatch(changePage(newPage));
    }

    const handleNext = ()=>{
        const newPage = page + 1;
        dispatch(changePage(newPage));
    }

    const goToPage = (pageNum) => {
        dispatch(changePage(pageNum));
    }

    return <Wrapper >
        <button 
            className='pagination-btn'
            onClick={handlePrev}
            disabled={page <= 1}
        >
            <BsChevronLeft/>
        </button>
        {pages.map((el, i)=>{
            return (
            <button 
                key={i} 
                className={i + 1 === page ? 'current pagination-btn' : 'pagination-btn'}
                onClick={()=>goToPage(el + i)}
            >
                {el + i}
            </button>)
        })}
       <button 
            className='pagination-btn' 
            onClick={handleNext}
            disabled={page >= numOfPages}
        >
            <BsChevronRight/>
        </button>
    </Wrapper>
}

export default PageBtnContainer

const Wrapper = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 1px;
    justify-content: flex-end;
    margin: 30px 0;

    .pagination-btn {
        font-size: 18px;
        padding: 5px 15px;
        border: 1px solid var(--light-medium);
        height: 35px;
        border-radius: 5px;
        background-color: white;

        display: inline-flex;
        justify-content: center; 
        align-items: center;
    }
    

    .current {
        border: 3px solid var(--primary);
    }
`