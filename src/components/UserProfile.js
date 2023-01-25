import { React, useState } from 'react';
import '../css/App.css';

function UserProfile({ name }) {

    return (
        <div className="UserCard">
            <li>{name}</li>
        </div>
    );
}

export default UserProfile;
