import { React } from 'react';
import Button from '@mui/material/Button';
import '../css/App.css';

function NewChar({ id }) {


    function handleSubmit() {
        console.log("you submitted!")
        console.log(id)

        fetch("http://localhost:9292/users/characters/new", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                "user_id": id
            })
        })
            .then((r) => r.json())
            .then((data) => {
                console.log(data)
            })
    }


    return (
        <div className="newChar">
            <Button variant="contained" onClick={handleSubmit}>🏃‍♂️🏃‍♀️</Button>
        </div>
    )

}

export default NewChar