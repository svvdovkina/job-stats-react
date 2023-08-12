import styled from 'styled-components'
import {
    ResponsiveContainer,
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'

const AreaChartComponent = ( {data} )=>{
    return <Wrapper>
        <ResponsiveContainer width='100%' height={300}>
            <AreaChart data={data} margin={{ top: 50}}>
                <CartesianGrid strokeDasharray='3 3'/>
                <XAxis dataKey='date'/>
                <YAxis allowDecimals={false}/>
                <Tooltip/>
                <Area 
                    type='monotone' 
                    dataKey='count'
                    stroke='#1f7774'
                    fill='#a4dad8'
                />
            </AreaChart>
        </ResponsiveContainer>
    </Wrapper>
}

export default AreaChartComponent

const Wrapper = styled.div``