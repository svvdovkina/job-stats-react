import { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import AreaChart from './AreaChart';
import BarChart from './BarChart';

const ChartContainer = ()=>{

    const [showBarChart, setShowBarChart] = useState(true);
    const {monthlyApplications: data} = useSelector(store=>store.allJobs);

    return <Wrapper>
        <h3>Monthly Applications</h3>
        <button className='chart-btn' onClick={()=>{setShowBarChart(pr=>!pr)}}>
            Change to {showBarChart ? ' Area Chart' : ' Bar Chart'}
        </button>
        {showBarChart ? 
            <BarChart data={data}/> : 
            <AreaChart data={data}/>
        }
    </Wrapper>
}

export default ChartContainer

const Wrapper = styled.div`
    margin-top: 40px;
    text-align: center;

    .chart-btn {
        background: none;
        font-size: 16px;
        color: var(--primary);
    }
`