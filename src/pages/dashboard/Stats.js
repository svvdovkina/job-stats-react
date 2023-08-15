import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import {showStats} from "../../features/allJobs/allJobsSlice"
import StatsContainer from "../../components/StatsContainer"
import ChartContainer from "../../components/ChartContainer"
import Loader from "../../components/Loader";

const Stats = () =>{

    const {isLoading, monthlyApplications} = useSelector(store=>store.allJobs);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(showStats())
        // eslint-disable-next-line
    }, []);

    if (isLoading) {
        return <Wrapper>
            <Loader/>
        </Wrapper>
    }

    return <Wrapper>
        <StatsContainer/>
        {monthlyApplications.length > 0 && <ChartContainer/>}
    </Wrapper>
}

const Wrapper = styled.section`
    padding: 20px;
`

export default Stats