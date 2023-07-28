import statsImg from "../assets/images/stats-img.svg"
import styled from 'styled-components'
import Logo from "../components/Logo"

const Landing = () => {
    return <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className="container">
            <div className="info">
                <h1>Jobs <span className="japp">Application</span> Statistics</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae odit architecto facere adipisci aperiam sit hic temporibus quisquam nam tenetur. </p>
                <button className="btn">Login/Rigister</button>
            </div>
            <img src={statsImg} alt="" className="stats-img"/>

        </div>
        
    </Wrapper>
}

const Wrapper = styled.main`
    nav {
        height: 50px;
        display: flex;
        align-items: center;
    }

    h1 {
        font-weight: 700;
    }

    .container {
        display: flex;
        gap: 50px;
        padding-top: 20%;
    }
    .stats-img {
        width: 400px;
    }

    .japp{
        color: var(--primary-light);
    }

    .btn {
        margin-top: 20px;
    }

    @media (max-width: 850px) {
        .stats-img {
            display: none;
        }
        .container {
            max-width: 500px;
        }
    }
`

export default Landing