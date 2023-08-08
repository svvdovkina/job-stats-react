import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import FormRow from "../../components/FormRow";
import { createJob, editJob } from "../../features/job/jobSlice";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const AddJob = () =>{

    let {lsLocation} = getUserFromLocalStorage();

    const {
        error,
        isLoading,
        job,
        jobTypeOptions,
        statusOptions,
        isEditing,
        editJobId
    } = useSelector(store=>store.job);
    const dispatch = useDispatch();

    const [er, setEr] = useState(null);
    const [success, setSuccess] = useState(null);

    const [curJob, setCurJob] = useState({...job})

    const navigate = useNavigate();

    useEffect(()=>{
        setEr(error);
        setSuccess(null);
    }, [error])

    useEffect(
        ()=>{
            if (!isEditing) {
                setCurJob({...job, jobLocation: lsLocation || ''});
            }
        },[]
    )

    
    const handleCancel = (e)=>{
        e.preventDefault();
        setEr(null);
        setSuccess(null);
        setCurJob({...job, jobLocation: lsLocation || ''});
    }

    const handleChange = (e) =>{
        setSuccess(null);
        setEr(null);
        const name = e.target.name;
        const value = e.target.value;
        setCurJob(j=>({...j, [name]: value}));
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setEr(null);

        if (!curJob.position || ! curJob.company || ! curJob.jobLocation) {
            setEr("Please fill out all the fields")
            return 
        }

        if(isEditing) {
            dispatch(editJob({jobId: editJobId, job: curJob}))
            navigate("/all-jobs");
            return
        }

        dispatch(createJob(curJob));
        setCurJob(job);
        setSuccess("Done!")
    }

    return <Wrapper  className="form-container">
    <h3 className="form-title">{isEditing? "Edit Job" : "Add Job"}</h3>
    <form >
            <FormRow type="text" name="position" value={curJob.position} handleChange={handleChange}/>
            <FormRow type="text" name="company" value={curJob.company} handleChange={handleChange}/>
            <FormRow type="text" name="jobLocation" label=" job location" value={curJob.jobLocation} handleChange={handleChange}/>
            <FormRow type="select" options={statusOptions} name="status" value={curJob.status} handleChange={handleChange}/>
            <FormRow type="select" options={jobTypeOptions} name="jobType" label=" job type" value={curJob.jobType} handleChange={handleChange}/>
            <div></div>
            <button type="button" className="btn form-btn cancel-btn" onClick={handleCancel}>Clear</button>
            <button type="submit" className="btn form-btn" onClick={handleSubmit} disabled={isLoading}>{isEditing? "Edit Job" : "Add Job"}</button>
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

export default AddJob