import { React } from 'react';
import Button from '@mui/material/Button';
import '../css/App.css';

function NewUser() {
    // function handleSubmit() {
    //     console.log("you submitted!")
    //     console.log(id)

    //     fetch("http://localhost:9292/users/characters/new", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             "user_id": id
    //         })
    //     })
    //         .then((r) => r.json())
    //         .then((data) => {
    //             console.log(data)
    //             onSubmit(data)
    //             alert("Generating Character!")
    //         })
    //         .catch(() => alert("Error making character!"))
    // }


    return (
        <div className="newChar">
            <Button variant="contained" onClick={handleSubmit}>🏃‍♂️Hire New Unit🏃‍♀️</Button>
        </div>
    )

}

export default NewUser