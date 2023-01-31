import { React, useState } from 'react';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../css/App.css';


function EditUser({ name, id, onToggle, onEditUser, onDeleteUser }) {
    const [onName, setOnName] = useState(name);

    function handleNameChange(e) {
        e.preventDefault();
        console.log(e.target.value);
        setOnName(e.target.value);
    }

    return (
        <div className="EditUser">
            <Card variant="outlined">
                <FormControl sx={{ m: 1 }}>
                    <TextField
                        id="outlined-basic"
                        sx={{ textAlign: "center" }}
                        value={onName}
                        onChange={handleNameChange}
                    />
                </FormControl>

                <Button variant="contained" sx={{ m: 0.5, mt: 0.5 }} onClick={onDeleteUser}>Delete User</Button>

                <Button variant="contained" sx={{ m: 1, mt: 0.5 }} onClick={() => {
                    onToggle();
                    onEditUser(onName, id);
                }}>Save</Button>
            </Card>
        </div>
    );
}

export default EditUser