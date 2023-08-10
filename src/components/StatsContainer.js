import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {MdPendingActions, MdSchedule, MdErrorOutline} from "react-icons/md"
import StatItem from "./StatItem"

const StatsContainer = ()=>{

    const {stats} = useSelector(store=>store.allJobs);

    const defaultStats = [
        {
            title: 'pending applications',
            count: stats.pending || 0,
            icon: <MdPendingActions/>,
            status: 'pending'
        },
        {
            title: 'interviews scheduled',
            count: stats.interview || 0,
            icon: <MdSchedule/>,
            status: 'interview'
        },
        {
            title: 'jobs declined',
            count: stats.declined || 0,
            icon: <MdErrorOutline/>,
            status: 'declined'
        }
    ];

    return <Wrapper>
        {defaultStats.map((item, i)=>{
            return <StatItem key={i} {...item}/>
        })}
    </Wrapper>
}

export default StatsContainer

const Wrapper = styled.div`
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    gap: 30px;

    @media screen and (max-width: 786px) {
        grid-template-columns: 1fr;
    }
`