import { React } from 'react';
import Button from '@mui/material/Button';
import '../css/App.css';

function NewChar() {


    function handleSubmit(){

        console.log("you submitted!")

    }


    return (
        <div class="newChar">
            <Button variant="contained" onClick={handleSubmit}>🏃‍♂️🏃‍♀️</Button>
        </div>
    )

}

export default NewChar