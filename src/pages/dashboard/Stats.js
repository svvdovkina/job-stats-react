import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import {showStats} from "../../features/allJobs/allJobsSlice"
import StatsContainer from "../../components/StatsContainer"
import ChartContainer from "../../components/ChartContainer"

const Stats = () =>{

    const {isLoading, monthlyApplications} = useSelector(store=>store.allJobs);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(showStats())
    }, []);

    if (isLoading) {
        return <Wrapper>
            <h3>Loading...</h3>
        </Wrapper>
    }

    return <Wrapper>
        <StatsContainer/>
        {monthlyApplications.length > 0 && <ChartContainer/>}
    </Wrapper>
}

const Wrapper = styled.section`

`

export default Stats