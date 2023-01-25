import { React } from 'react';
import UserProfile from './UserProfile';
import '../css/App.css';
import {
    Link
} from "react-router-dom"

function UserCard({ name, id }) {

    return (
        <div className="UserCard">
            <li>{name}</li>
            <Link to={`/users/${id}`}><button>More Details</button></Link>
        </div>
    );
}

export default UserCard;
