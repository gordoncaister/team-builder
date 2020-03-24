import React, { useState } from 'react';

const Form = props => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("Backend Engineer");
    
   
    const handleSubmit = (event) => {
        event.preventDefault();
        props.addToTeamList({name:name,email:email,role:role})

    }


    return (
        <div> <h3>hi from form</h3>
        <form onSubmit={handleSubmit}>
            <label>Enter Name: 
                <input type="text" onChange={event => setName(event.target.value)}></input>
            </label>
            <br/>
            <br/>
            <label >Enter Password: 
                <input type="password" onChange={event => setEmail(event.target.value)}></input>
            </label>
            <br/>
            <br/>
            <label>Select Role: 
            <select onChange={event => setRole(event.target.value)}>
                <option >Backend Engineer</option>
                <option >Frontend Engineer</option>
                <option >Designer</option>
                <option >Gopher</option>
                <option >HR</option>
                <option >Intern</option>
            </select>
            </label>
            <br/>
            <br/>
            <input type="submit" />
        </form>
        
        </div>
    )
}

export default Form;