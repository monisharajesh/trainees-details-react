import React, { useEffect, useState } from 'react';
import Child from './child';
import './details.css'
import Login from './Login';
export default function Details() {
    const [trainees, setDetails] = useState( []);
        const getTrainees = ()=>{
            fetch('http://localhost:3000/trainees')
  .then((response) =>{
    if(response.status === 200){ 
        return response.json()
    }
    return false;
})
  .then((response) => {
    if(response){ 
setDetails(response)}
  });
        }
useEffect(()=> {
    getTrainees();
},[]);
    
        const userHandler = (input)=>{
// console.log(input);
// trainees.push(input);
// setDetails((data)=>{
    // return [...data, ...[input]];
// })

fetch('http://localhost:3000/trainees', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input })
        }).then((response) => {

            if (response.status === 201) {
                return response.json()
            }
            return false;
        })
            .then((response) => {
                if (response) {
getTrainees();
                }
            });

        }
    
  return (
    <div>
        <div>
            <Login addUser ={userHandler}/>
        </div>
        <table>
            <thead>
            <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Batch</th>
                <th>Git</th>
                <th>Referred by</th>
                <th>Location</th>
                <th>Placement Status</th>
            </tr>
            </thead>
            <tbody>{
                trainees.map((data)=>{
                    return <Child key = {data.mobile} childData={data}/>

                })
}
            </tbody>
        </table>
    </div>
  )
}
