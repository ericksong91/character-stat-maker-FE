import { React, useEffect, useState } from 'react';
import UserCard from './UserCard';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Unstable_Grid2';
import '../css/App.css';

function UserList({ users }) {
    const userList = users.map((name) => {
        return <UserCard key={name.id} name={name.username} id={name.id} />
    })

    return (
        <div className="UserList">
            <h1>Hello, here is a list of Users:</h1>
            <Container sx={{ py: 5 }} maxWidth="xs">
                <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {userList}
                </Grid2>
            </Container>
        </div>
    );
}

export default UserList;
