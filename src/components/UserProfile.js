import { React, useEffect, useState } from 'react';
import CharCard from './CharCard';
import NewChar from './NewChar';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Link, useParams } from "react-router-dom"
import '../css/App.css';

function UserProfile({ users, onUserCache }) {
    const index = parseInt(useParams().id);
    const userObj = users.find((user) => user.id === index)
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const userInfo = users.find((user) => user.id === index)
        users.length === 0 ? setCharacters([]) : setCharacters(userInfo.characters)
    }, [index, users])

    const charList = characters.map((char) => {
        return (
            <Grid item xs={3} key={char.id}>
                <CharCard key={char.id} char={char} onDelete={handleDeleteCharacter} onEdit={handleEditCharacter} />
            </Grid>
        )
    })

    function handleNewCharacter(data) {
        const newChars = [...characters, data];
        const updatedUserObj = {
            id: userObj.id,
            created_at: userObj.created_at,
            username: userObj.username,
            characters: newChars 
        };

        setCharacters(newChars);
        onUserCache(updatedUserObj);
    }

    function handleDeleteCharacter(data) {
        const updatedChar = characters.filter((char) => char.id !== data.id);
        const updatedUserObj = {
            id: userObj.id,
            created_at: userObj.created_at,
            username: userObj.username,
            characters: updatedChar
        }

        setCharacters(updatedChar);
        onUserCache(updatedUserObj)

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

                const updatedUserObj = {
                    id: userObj.id,
                    created_at: userObj.created_at,
                    username: userObj.username,
                    characters: updatedChar
                };

                setCharacters(updatedChar);
                onUserCache(updatedUserObj);
            })
    }

    const username = users.find((user) => user.id === index)

    return (
        <div className="UserCard">
            {username === undefined ? null : <h1>{username.username}'s Units!</h1>}
            <NewChar id={index} onSubmit={handleNewCharacter} />
            <Link to={`/`}><Button variant="contained">Return to Userlist</Button></Link>
            <Grid container padding={3} spacing={2} columns={12}>
                {charList}
            </Grid>
        </div>
    );
}

export default UserProfile;
