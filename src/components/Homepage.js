import { React, useEffect, useState } from 'react';
import UserList from './UserList';
import UserProfile from './UserProfile';
import {
    Link,
} from "react-router-dom";

function Homepage() {
    return (
        <div className="Homepage">
            <h1>Welcome to Character Stat Maker!</h1>
        </div>
    );
}

export default Homepage;
