import { React, useEffect, useState } from 'react';
import CharCard from './CharCard';
// import Container from '@mui/material/Container';
// import Grid2 from '@mui/material/Unstable_Grid2';
import NewChar from './NewChar';
import { Link, useParams } from "react-router-dom"
import '../css/App.css';

//App 
//User List -> User Card
//User Profile -> Char Card / New Character?
// 

function UserProfile({ users }) {
    const index = parseInt(useParams().id);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9292/users/${index}`)
            .then((r) => r.json())
            .then((data) => setCharacters(data))
            .catch(() => alert("Error!"))
    }, [])

    const charList = characters.map((char) => {
        return (
            <CharCard key={char.id} char={char} owner={users[index - 1].username} />
        )
    })

    return (
        <div className="UserCard">
            <h1>You've landed on the page for {users[index - 1].username}</h1>
            <NewChar id={users[index-1].id} />
            {charList}
        </div>
    );
}

export default UserProfile;
