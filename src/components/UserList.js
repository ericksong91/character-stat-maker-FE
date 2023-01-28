import { React, useEffect, useState } from 'react';
import UserCard from './UserCard';
import { Grid } from '@mui/material';
import '../css/App.css';

function UserList({ users }) {
    const userList = users.map((name) => {
        return (
            <Grid item xs={3}>
                <UserCard key={name.id} name={name.username} id={name.id} />
            </Grid>
        )
    })

    return (
        <div className="UserList">
            <h1>Hello, here is a list of Users:</h1>
            <Grid container spacing={2} columns={12}>
                {userList}
            </Grid>
        </div>
    );
}

export default UserList;
