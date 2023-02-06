import { React, useState } from 'react';
import UserCard from './UserCard';
import NewUser from './NewUser';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import '../css/App.css';

function UserList({ users, onNewUser, onEditUser, onDeleteUser }) {
    const [showNew, setShowNew] = useState(false);

    const userList = users.map((user) => {
        return (
            <Grid item xs={3} key={user.id}>
                <UserCard key={user.id}
                    name={user.username}
                    id={user.id}
                    onEditUser={onEditUser}
                    onDeleteUser={onDeleteUser} />
            </Grid>
        )
    })

    function toggleNewUser() {
        setShowNew(!showNew);
    }

    return (
        <div className="UserList">
            <h1>Character Unit Generator</h1>

            {showNew ? (
                <NewUser onToggle={toggleNewUser} onNewUser={onNewUser} />
            ) : (
                <Button
                    variant="contained"
                    sx={{ m: 2 }}
                    onClick={toggleNewUser}>
                    Create New User
                </Button>
            )}
            <Grid container padding={3} spacing={2} columns={12}>
                {userList}
            </Grid>
        </div>
    );
}

export default UserList;
