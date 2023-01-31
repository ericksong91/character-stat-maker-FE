import { React, useEffect, useState } from 'react';
import CharCard from './CharCard';
import NewChar from './NewChar';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Link, useParams } from "react-router-dom"
import '../css/App.css';

function UserProfile({users}) {
    const index = parseInt(useParams().id);
    const [characters, setCharacters] = useState([]);

    console.log(users)

    useEffect(() => {
        fetch(`http://localhost:9292/users/${index}`)
            .then((r) => r.json())
            .then((data) => {
                setCharacters(data);
            })
            .catch(() => alert("Error!"))
    }, [index])

    const charList = characters.map((char) => {
        return (
            <Grid item xs={3} key={char.id}>
                <CharCard key={char.id} char={char} onDelete={handleDeleteCharacter} onEdit={handleEditCharacter} />
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

    function handleEditCharacter(newJob, newName, id) {
        fetch(`http://localhost:9292/users/characters/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                "name": newName,
                "job": newJob
            }),
        })
            .then((r) => r.json())
            .then((data) => {
                const updatedChar = characters.map((char) => {
                    if (char.id === data.id) {
                        return data;
                    } else {
                        return char
                    }
                })

                setCharacters(updatedChar);
            })
    }

    const username = users.find((user) => {
        return user.id === index;
    })

    return (
        <div className="UserCard">
            {username === undefined ? null : <h1>{username.username}'s Units!</h1> }
            <NewChar id={index} onSubmit={handleNewCharacter} />
            <Link to={`/`}><Button variant="contained">Return to Userlist</Button></Link>
            <Grid container padding={3} spacing={2} columns={12}>
                {charList}
            </Grid>
        </div>
    );
}

export default UserProfile;
