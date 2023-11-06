
import React from 'react'

const Users = (props) => 
    (   
        <div className="user">
        <h2>{props.name}</h2>
        <p>{props.speciality}</p>
        <p>{props.age}</p>
        <span>{props.stage}</span>
        </div>
    )

  export {Users};