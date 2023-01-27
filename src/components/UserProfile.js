import React from 'react';
import { Link, useParams } from "react-router-dom"
import '../css/App.css';

function UserProfile() {
    const index = parseInt(useParams().id);
    // const { id, name, job } = characters[index]

    // const charList = characters.map((char)=>{
    //   return (
    //   <li key={char.id}>{char.name} with {char.job} class, owned by {users[char.user_id - 1].username}</li>
    //   )
    // })

    return (
        <div className="UserCard">
            <h1>You've landed on the page for {index}</h1>
        </div>
    );
}

export default UserProfile;
