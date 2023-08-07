import styled from 'styled-components'
import {FaLocationArrow, FaCalendar} from "react-icons/fa"
import {MdOutlineWork} from "react-icons/md"
import { Link } from 'react-router-dom';

const Job = ({company, position, status, jobType, jobLocation, createdAt})=>{
    
    const date = createdAt.slice(0, 10);
    
    return <Wrapper className='card'>
        <div className="title-block">
            <div className="logo">{company&& company[0]}</div>
            <div className='title'>
                <h4>{position}</h4>
                <p className='company'>{company}</p>
            </div>
        </div>
        <div className="info">
            <p className='info-item'><FaLocationArrow/> {jobLocation}</p>
            <p className='info-item'><FaCalendar/> {date}</p>
            <p className='info-item'> <MdOutlineWork/> {jobType}</p>
            <p ><span className={`status ${status}`}>{status}</span></p>
        </div>
        <div className="buttons">
            <Link to='/add-job' className='btn edit-btn'>Edit</Link>
            <button className='btn delete-btn'>Delete</button>
        </div>
    </Wrapper>
}

export default Job

const Wrapper = styled.div`

    .title-block {
       display: flex;
       gap: 20px;
       align-items: center; 
       border-bottom: 1px solid var(--light-medium);
       padding-bottom: 15px;
    }

    .logo {
        width: 70px;
        height: 70px;
        background-color: var(--primary);
        color: white;
        font-size: 52px;
        text-align: center;
        text-transform: capitalize;
        border-radius: 5px;
    }

    .title {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    h4 {
        text-transform: capitalize;
        font-size: 20px;
        margin: 0;
        font-weight: 600;
    }

    .company {
        font-size: 16px;
        font-weight: 500;
        border-radius: 10px;
        color: var(--dark-medium);
    }

    .info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        margin-top: 20px;
    }

    .info-item {
        display: flex;
        gap: 15px;
        align-items: center;
        text-transform: capitalize;
    }

    .status {
        background-color: var(--secondary-light);
        padding: 2px 10px;
        border-radius: 5px;
        text-align: center;
        text-transform: capitalize;
        color: var(--dark-medium);
    }

    .pending {
        background-color: #ffeea0;
    }
    .interview {
        background-color: #a0ecb6;
    }
    .declined {
        background-color: #ffaba0;
    }

    p {
        margin: 0;
    }
    
    .buttons {
        margin-top: 20px;
        display: flex;
        gap: 15px;
    }

    .btn {
        background-color: white;
    }

    .edit-btn {
        color: var(--primary-light);
        border: 1px solid var(--primary-light);
    }
    .edit-btn:hover {
        background-color: var(--primary-light2);
    }

    .delete-btn {
        color: rgb(245, 140, 140);
        border: 1px solid rgb(245, 140, 140);
    }
    .delete-btn:hover {
        background-color: var(--secondary-light);
    }

    @media screen and (max-width: 769px) {
        min-width: 450px;
    }
    @media screen and (max-width: 500px) {
        min-width: calc(100vw - 40px);
    }
`