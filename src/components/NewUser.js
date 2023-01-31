import { React, useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField'
import '../css/App.css';

function NewUser({ onToggle, onNewUser }) {
    const [username, setUsername] = useState('');

    function handleUsernameChange(e) {
        e.preventDefault();
        console.log(e.target.value);
        setUsername(e.target.value);
    }

    return (
        <div className="newUser">
            <FormControl>
                <TextField className="newUserForm" value={username} onChange={handleUsernameChange} />
                <Button variant="contained" onClick={()=>{
                    onToggle();
                    onNewUser(username)
                }}>Save User</Button>
            </FormControl>

        </div>
    )

}

export default NewUser