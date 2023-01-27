import { React } from 'react';
import '../css/App.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import {
    Link
} from "react-router-dom"

function UserCard({ name, id }) {

    return (
        <div className="UserCard">
            <Card variant="outlined">
                <h3>{name}</h3>
                <Link to={`/users/${id}`}><Button variant="contained">More Details</Button></Link>
            </Card>
        </div>
    );
}

export default UserCard;
