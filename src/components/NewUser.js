import { React, useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField'
import '../css/App.css';

function NewUser() {
    const [username, setUsername] = useState('');

    function handleUsername(e) {
        e.preventDefault();

        console.log(e.target.value);
        setUsername(e.target.value);
    }

    return (
        <div className="newUser">
            <FormControl>
                <TextField value={username} />
                <Button variant="contained">Save User</Button>
            </FormControl>

        </div>
    )

}

export default NewUser