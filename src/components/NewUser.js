import { React, useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField'
import '../css/App.css';

function NewUser() {
    const [username, setUsername] = useState('');



    return (
        <div className="newUser">
            <Button variant="contained" onClick={handleSubmit}>Save User</Button>
        </div>
    )

}

export default NewUser