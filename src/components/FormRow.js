import styled from 'styled-components'

const FormRow = ({type, options, name, value, label, handleChange})=>{
    return <Wrapper>
        <label htmlFor={name}>{label || name}</label>
        {type !== 'select' ? 
            <input 
                type={type} 
                id={name} 
                name={name} 
                value={value} 
                onChange={handleChange}
            />
            :
            <select 
                id={name} 
                name={name} 
                onChange={handleChange}
                value={value}
            >
                {options&& options.map((opt, i)=>{
                    return <option key={i} value={opt}>{opt}</option>
                })}
                
            </select>
        }
        
    </Wrapper>
}

export default FormRow

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    label {
        margin-bottom: 5px;
    }
    
    input, select {
        height: 35px;
        border: 1px solid var(--primary-light);
        border-radius: 5px;
        background-color: var(--light);
        padding-left: 10px;
    }
    input:focus, select:focus {
        outline: transparent;
        border-color: var(--secondary)
    }
    
    label {
        text-transform: capitalize;
    }
`