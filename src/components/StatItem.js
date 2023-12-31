import styled from 'styled-components'

const StatItem = ({title, count, icon, status})=>{
    return <Wrapper >
        <div className={status}>   
            <div className='stat-row'>
                <span>{count}</span>
                <span className={status+ ' icon'}>{icon}</span>
            </div>
        
            <h3>{title}</h3>
        </div>
    </Wrapper>
}

export default StatItem

const Wrapper = styled.div`
    padding: 30px 15px;
    min-width: 225px;
    max-width: 350px;
    text-align: center;
    border-radius: 10px;
    background-color: white;
    .stat-row {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 42px;
        font-weight: 700;
    }

    .icon {
        display: flex;
        padding: 5px;
        border-radius: 5px;
    }

    .pending {
        color: var(--yellow);
    }

    .pending.icon {
        background-color: var(--yellow-light);
    }

    .interview {
        color: var(--primary);
    }

    .interview.icon {
        background-color: var(--primary-bgd);
    }

    .declined {
        color: var(--red);
    }
    
    .declined.icon {
        background-color: var(--red-light);
    }
    
    h3 {
        text-transform: capitalize;
        font-weight: 600;
        margin-bottom: 0;
    }

    @media screen and (min-width: 1200px) {
        min-width: 300px;
    }

    @media screen and (max-width: 786px) {
        min-width: 300px;
    }
    @media screen and (max-width: 367px) {
        min-width: 225px;
    }
`