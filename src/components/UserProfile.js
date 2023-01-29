import { React, useEffect, useState } from 'react';
import CharCard from './CharCard';
import NewChar from './NewChar';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Link, useParams } from "react-router-dom"
import '../css/App.css';

function UserProfile({ users }) {
    const index = parseInt(useParams().id);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9292/users/${index}`)
            .then((r) => r.json())
            .then((data) => setCharacters(data))
            .catch(() => alert("Error!"))
    }, [index])

    const charList = characters.map((char) => {
        return (
            <Grid item xs={3} key={char.id}>
                <CharCard key={char.id} char={char} owner={users[index - 1].username} onDelete={handleDeleteCharacter} />
            </Grid>
        )
    })

    function handleNewCharacter(data) {
        setCharacters([...characters, data]);
    }

    function handleDeleteCharacter(data) {
        const updatedChar = characters.filter((char) => {
            return char.id !== data.id
        });

        setCharacters(updatedChar);
    }

    return (
        <div className="UserCard">
            <h1>You've landed on the page for {users[index - 1].username}</h1>
            <NewChar id={users[index - 1].id} onSubmit={handleNewCharacter} />
            <Link to={`/`}><Button variant="contained">Return to Userlist</Button></Link>
            <Grid container spacing={2} columns={12}>
                {charList}
            </Grid>
        </div>
    );
}

export default UserProfile;
