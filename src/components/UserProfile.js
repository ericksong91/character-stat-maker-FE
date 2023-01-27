import { React, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom"
import '../css/App.css';

function UserProfile() {
    const index = parseInt(useParams().id);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9292/users/${index}`)
            .then((r) => r.json())
            .then((data) => setCharacters(data))
            .catch(() => alert("Error!"))
    }, [])


    const charList = characters.map((char)=>{
      return (
      <li key={char.id}>{char.name} with {char.job} class</li>
      )
    })

    return (
        <div className="UserCard">
            <h1>You've landed on the page for {index}</h1>
            {charList}
        </div>
    );
}

export default UserProfile;
