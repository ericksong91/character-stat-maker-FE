import { React, useState } from 'react';
import '../css/App.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import EditUser from './EditUser';
import {
    Link
} from "react-router-dom"

function UserCard({ name, id, onEditUser, onDeleteUser }) {
    const [editUserToggle, setEditUserToggle] = useState(false);

    function handleEditUserToggle() {
        setEditUserToggle(!editUserToggle)
    }

    return (
        <div className="UserCard">
            {editUserToggle ? (
                <EditUser name={name} id={id}
                    onToggle={handleEditUserToggle}
                    onEditUser={onEditUser}
                    onDeleteUser={onDeleteUser} />
            ) : (
                <Card variant="outlined">
                    <h3>{name}</h3>
                    <Link to={`/users/${id}`}>
                        <Button variant="contained" sx={{ m: 0.5, mt: 0.5 }}>Character List</Button>
                    </Link>
                    <Button variant="contained" sx={{ m: 1, mt: 0.5 }} onClick={handleEditUserToggle}>Edit User</Button>
                </Card >
            )
            }
        </div >
    );
}

export default UserCard;
