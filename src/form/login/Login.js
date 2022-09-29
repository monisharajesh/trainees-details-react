import React, { useState } from 'react'

export default function Login(props) {
    const [input, setInput] = useState({
        image: "",
        name1: '',
        mobile: 0,
        git:'',
        batch:'',
        referred :'',
        location: '',
        placement:''
    });
    const Handler=(event)=>{
        setInput((previousValue)=>{
            return {...previousValue,...{[event.target.name]: event.target.value}}
        });
    }
const submitHandler= (event)=>{
event.preventDefault();
props.addUser(input);
}

  return (
    <div>
        <form onSubmit={submitHandler}>
        <label>image</label>
        <input type='file' name = 'image' value={input.image} onChange={Handler}></input>
        <label>Name</label>
        <input type='text'name = 'name1' value={input.name1} onChange={Handler}></input>
        <label>Mobile</label>
        <input type='number'name = 'mobile' value={input.mobile} onChange={Handler}></input>
        <label>Git</label>
        <input type='url'name = 'git' value={input.git} onChange={Handler}></input>
        <label>Batch</label>
        <input type='text'name = 'batch' value={input.batch} onChange={Handler}></input>
        <label>Referred</label>
        <input type='text'name = 'referred' value={input.referred} onChange={Handler}></input>
        <label>Location</label>
        <input type='text'name = 'location' value={input.location} onChange={Handler}></input>
        <label>Placement</label>
        <input type='text'name = 'placement' value={input.placement} onChange={Handler}></input>
      <p>  <button>Submit</button> </p>
        </form>

    </div>
  )
}
