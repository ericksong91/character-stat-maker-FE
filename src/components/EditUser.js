import { React, useState } from 'react';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField'


function EditUser() {
    const [onName, setOnName] = useState('');

    function handleNameChange(e) {
        e.preventDefault();
        setOnName(e.target.value);
    }

    return (
        <div className="EditUser">
            <Card variant="outlined">
                <FormControl sx={{m: 1}}>
                    <TextField
                        id="outlined-basic"
                        sx={{textAlign: "center"}}
                        value={onName}
                        onChange={handleNameChange}
                    />
                </FormControl>

                <Button variant="contained" sx={{m: 0.5, mt: 0.5}}>Delete User</Button>

                <Button variant="contained" sx={{m: 0.5, mt: 0.5}}>Save</Button>
            </Card>
        </div>
    );
}

export default EditUser