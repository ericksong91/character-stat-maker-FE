import { React, useState } from 'react';
import '../css/App.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import EditUser from './EditUser';
import {
    Link
} from "react-router-dom"

function UserCard({ name, id }) {
    const [editUserToggle, setEditUserToggle] = useState(false);

    function handleEditUserToggle() {
        setEditUserToggle(!editUserToggle)
    }

    return (
        <div className="UserCard">
            {editUserToggle ? (
                <EditUser name={name} onToggle={handleEditUserToggle} />
            ) : (
                <Card variant="outlined">
                    <h3>{name}</h3>
                    <Link to={`/users/${id}`}><Button variant="contained">Character List</Button></Link>
                    <Button variant="contained" sx={{ m: 1 }} onClick={handleEditUserToggle}>Edit User</Button>
                </Card >
            )
            }
        </div >
    );
}

export default UserCard;
