import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import FormRow from "../components/FormRow";
import Logo from "../components/Logo";
import { loginUser, registerUser } from "../features/user/userSlice";

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true
}

const Register = () =>{

    const [values, setValues] = useState(initialState);
    const [errMsg, setErrMasg] = useState(null);

    const {user, isLoading, error} = useSelector(store=> store.user)
    const dispatch = useDispatch();

    const navigate = useNavigate();

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
        const {name, email, password} = values;
        e.preventDefault();
        if (!email || !password) {
            setErrMasg('Please fill out email and password fields')
            return
        }
        setErrMasg(null)
        if (values.isMember) {
            dispatch(loginUser({email, password}))
            return
        }
        if (!values.isMember) {
            dispatch(registerUser({name, email, password}))
            return
        }
    }

    const loginDemo = (e)=>{
        e.preventDefault();
        dispatch(loginUser({email: 'testUser@test.com', password: 'secret'}))
    }

    const toggleMember = () => {
        setValues({
            ...values,
            isMember: !values.isMember
        })
    }

    useEffect(()=>{
        if (user) {
            navigate('/');
        }
        
    }, [user, navigate]);

    return <Wrapper >
        <div className="form-container">
            <div className="logo">
                <Logo />
            </div>
            <h3 className="form-title">{values.isMember ? 'Login' : 'Register'}</h3>
            <form onSubmit={submitForm}>
                {!values.isMember && <FormRow type="text" name="name" value={values.name} handleChange={handleChange}/>}

                <FormRow type="text" name="email" value={values.email} handleChange={handleChange}/>
                
                <FormRow type="password" name="password" value={values.password} handleChange={handleChange}/>
                
                <button type="submit" className="btn form-btn" disabled={isLoading}>Submit</button>
                <button type="button" className="btn form-btn demo-btn" disabled={isLoading} onClick={loginDemo}>Demo</button>
            </form>
            {errMsg && <p className="err-msg">{errMsg}</p>}
            {(error !== null) && <p className="err-msg">{error}</p>}
            <br/>
            <p>{values.isMember ?
            'Not a member yet?' :'Already a member?'}</p>
            <button className="toggle-btn" onClick={toggleMember}>
                {!values.isMember ? 'Login' : 'Register'} 
            </button>
        </div>
        
    </Wrapper>
}

const Wrapper = styled.div`

    display: flex;
    justify-content: center;
    
    .form-container {
        border-top: 5px solid var(--primary);
        max-width: 400px;
        width: 100%;
        padding-top: 50px;
    }

    .demo-btn {
        background-color: var(--primary-light);
        margin-top: 0px;
    }

    .demo-btn:hover {
        background-color: var(--primary);
        
    }

    .logo {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
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
`

export default Register