import { Fragment, useState, useEffect } from "react";
import React from 'react';
import './sign.css'

export default function Sign(props) {
    const [isValid,setValid] = useState(false)
    const [input,setValue] = useState({
        name : "",
        password: ""
    });

    
useEffect(()=>{
    fetch('http://localhost:3000/login')
  .then((response) =>{
    if(response.status === 200){ response.json()
    }
    return false;
})
  .then((response) => {
    if(response){ 
console.log(response);
    props.signin(response.isLogin)}
  })
},[props])

useEffect(()=>{
    if([input.name].includes('@') && [input.password].length > 6 ){
        setValid(true);
    }
    else{
        setValid(false);
    }
}, [input.name,input.password]);
    const Handler = (event)=>{
        console.log(event.target.value);
        setValue(event.target.value);
    }
    
const loginHandler= (event)=>{
    event.preventDefault();
    // props.signin(true);
    if (input.name && input.password && isValid) {

fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ isLogin: true })
        }).then((response) => {

            if (response.status === 201) {
                return response.json()
            }
            return false;
        })
            .then((response) => {
                if (response) {
                    props.signin(response.isLogin);
                }
            });

    }

}


    return (
        <Fragment>
            <form onSubmit={loginHandler}>
                <label>Enter Mail id </label>
                <input type="email" value={input.name} className='input' onChange={Handler}></input>
                <label>Enter User Password</label>
                <input type="password" value={input.password} className='input' onChange={Handler}></input>
                <button >Sign In </button> 
                {/* {isValid? <button >Sign In </button>  : <button disabled={true}>Sign In </button> } */}

            </form>
        </Fragment>
    )
}
