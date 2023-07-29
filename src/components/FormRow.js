import styled from 'styled-components'

const FormRow = ({type, name, value, label, handleChange})=>{
    return <Wrapper>
        <label htmlFor={name}>{label || name}</label>
        <input 
            type={type} 
            id={name} 
            name={name} 
            value={value} 
            onChange={handleChange}
        />
    </Wrapper>
}

export default FormRow

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    
    input {
        height: 35px;
        border: 1px solid var(--primary-light);
        border-radius: 5px;
        background-color: var(--light);
    }
    label {
        text-transform: capitalize;
    }
`