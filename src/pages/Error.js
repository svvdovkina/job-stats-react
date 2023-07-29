import nonFoundImg from "../assets/images/not-found.svg"
import styled from "styled-components"
import { Link } from "react-router-dom"

const ErrorPage = () =>{
    return <Wrapper className="container">
        <img src={nonFoundImg} alt="" />
        <h3>(404) Not found</h3>
        <p>Sorry, this page does not exist...</p>
        <Link to='/' className="btn">Back home</Link>
    </Wrapper>
}

export default ErrorPage

const Wrapper = styled.div`
    margin-top: 20px;
    text-align: center;
    img {
        max-width: 300px;
    }
    p {
        margin-bottom: 50px;
    }
`