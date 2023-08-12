import styled from 'styled-components'
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from 'recharts'

const BarChartComponent = ({data})=>{
    return <Wrapper>
        <ResponsiveContainer width='100%' height={300}>
            <BarChart data={data} margin={{ top: 50}}>
                <CartesianGrid strokeDasharray='3 3'/>
                <XAxis dataKey='date'/>
                <YAxis allowDecimals={false}/>
                <Tooltip/>
                <Bar 
                    type='monotone' 
                    dataKey='count'
                    fill='#1f7774'
                    barSize={75}
                />
            </BarChart>
        </ResponsiveContainer>
    </Wrapper>
}

export default BarChartComponent

const Wrapper = styled.div``