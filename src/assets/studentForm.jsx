import { useState } from "react";
import API from "../api";

function StudentForm({refresh}) {
    const [student,setStudent] = useState({
        name:"",
        address:"",
        contact:""
    });
    const handleChange=(e)=>{
        setStudent({...student,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            await API.post("/",student);
            setStudent({name:"",address:"",contact:""});
            refresh();
        }catch(err){
            console.error(err);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Student</h3>
            <input type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required/>
            <input type="text" name="address" placeholder="Address" value={student.address} onChange={handleChange} required/>
            <input type="text" name="contact" placeholder="Contact" value={student.contact} onChange={handleChange} required/>
            <button type="submit">Save</button>
        </form>
    );
}
export default StudentForm;