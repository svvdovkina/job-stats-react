import styled from 'styled-components'

const Loader = ()=>{
    return <Wrapper>
        <div className='loader'>
        </div>
    </Wrapper>
}

export default Loader

const Wrapper = styled.div`
    .loader {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border-top: 5px solid var(--primary);
        border-right: 5px solid transparent;
        animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

`