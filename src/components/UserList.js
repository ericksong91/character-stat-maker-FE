import { React, useState } from 'react';
import UserCard from './UserCard';
import NewUser from './NewUser';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import '../css/App.css';

function UserList({ users }) {
    const [showNew, setShowNew] = useState(false);

    const userList = users.map((name) => {
        return (
            <Grid item xs={3} key={name.id}>
                <UserCard key={name.id} name={name.username} id={name.id} />
            </Grid>
        )
    })

    function toggleNewUser() {
        setShowNew(!showNew);
    }

    return (
        <div className="UserList">
            <h1>Character Unit Generator</h1>

            {showNew ? (<NewUser />) : (<Button variant="contained" sx={{m: 2}} onClick={toggleNewUser}>Create New User</Button>)}
            <Grid container spacing={2} columns={12}>
                {userList}
            </Grid>
        </div>
    );
}

export default UserList;
