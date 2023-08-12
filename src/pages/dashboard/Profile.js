import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components";
import FormRow from "../../components/FormRow";
import { updateUser } from "../../features/user/userSlice";

const Profile = () =>{

    const {isLoading, user, error} = useSelector(store=> store.user);
    const dispatch = useDispatch();
    const [er, setEr] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(()=>{
        setEr(error);
        setSuccess(null);
    }, [error])

    const [userData, setUserData] = useState({
        name: user?.name,
        lastName: user?.lastName,
        email: user?.email,
        location: user?.location,

    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        const {name, lastName, email, location} = userData;
        if (!name || !lastName || !email || !location) {
            setEr('Please provide all the values');
            return
        }
        setEr(null);
        dispatch(updateUser({name, lastName, email, location}));
        if (!error) {
            setSuccess('Updated!');
        }
    }

    const handleCancel = (e)=>{
        e.preventDefault();
        setEr(null);
        setSuccess(null);
        setUserData({...user});
    }

    const handleChange = (e) =>{
        setEr(null);
        setSuccess(null);
        const name = e.target.name;
        const value = e.target.value;
        setUserData(ud=>({...ud, [name]: value}));
    }

    return <Wrapper  className="form-container">
       <h3 className="form-title">Profile</h3>
       <form >
            <FormRow type="text" name="name" value={userData.name} handleChange={handleChange}/>
            <FormRow type="text" name="lastName" value={userData.lastName} label="last name" handleChange={handleChange}/>
            <FormRow type="text" name="email" value={userData.email} handleChange={handleChange}/>
            <FormRow type="text" name="location" value={userData.location} handleChange={handleChange}/>
            <button className="btn form-btn cancel-btn" onClick={handleCancel}>Cancel</button>
            <button className="btn form-btn" onClick={handleSubmit} disabled={isLoading}>Update</button>
        </form>
        {er && <p className="err-msg">{er}</p>}
        {success && <p className="success-msg">{success}</p>}
    </Wrapper>
}

const Wrapper = styled.section`
    .form-title{
        text-align: left;
    }

    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px 30px;

    }

    @media screen and (max-width: 592px) {
        form {
            grid-template-columns: 1fr;
        }
    }
`

export default Profile