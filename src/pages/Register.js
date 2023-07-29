import { useState } from "react";
import styled from 'styled-components'
import FormRow from "../components/FormRow";
import Logo from "../components/Logo";

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true
}

const Register = () =>{

    const [values, setValues] = useState(initialState);
    const [errMsg, setErrMasg] = useState(null);

    const handleChange = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        setValues({
            ...values,
            [inputName]: inputValue 
        });
        //console.log(inputName, inputValue)
    }

    const submitForm = (e) => {
        const {email, password} = values;
        e.preventDefault();
        if (!email || !password) {
            setErrMasg('Please fill out email and password fields')
        }
        console.log(values);
        setValues(initialState);
    }

    const toggleMember = () => {
        setValues({
            ...values,
            isMember: !values.isMember
        })
    }

    return <Wrapper className="container">
        <div className="logo">
            <Logo />
        </div>
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        <form onSubmit={submitForm}>
            {!values.isMember && <FormRow type="text" name="name" value={values.name} handleChange={handleChange}/>}

            <FormRow type="text" name="email" value={values.email} handleChange={handleChange}/>
            
            <FormRow type="password" name="password" value={values.password} handleChange={handleChange}/>
            
            <button type="submit" className="btn submit-btn">Submit</button>
        </form>
        {errMsg && <p className="err-msg">{errMsg}</p>}
        <p>{values.isMember ?
        'Not a member yet?' :'Already a member?'}</p>
        <button className="toggle-btn" onClick={toggleMember}>
            {!values.isMember ? 'Login' : 'Register'} 
        </button>
    </Wrapper>
}

const Wrapper = styled.div`
    max-width: 400px;
    margin-top: 15%;
    background-color: white;
    padding: 50px 30px 30px;;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 0px var(--light-medium);
    border-top: 5px solid var(--primary);

    .logo {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
    }

    h3 {
        color: var(--primary);
        font-size: 24px;
        text-align: center;
    }

    form {
        margin-top: 20px;
    }
    
    input:focus {
        outline: transparent;
        border-color: var(--secondary)
    }
    .submit-btn {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 100%;
    }
    p {
        display: inline-block;
    }
    .toggle-btn {
        background: none;
        border: none;
        text-decoration: underline;
        cursor: pointer;
        font-size: inherit;
        color: var(--primary);
    }
    .err-msg {
        color: red;
        font-size: 15px;
    }
`

export default Register