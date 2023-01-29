import { React, useState } from 'react';
import EditChar from './EditCharacter';
import '../css/App.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'

function CharCard({ char, onDelete, onEdit }) {
    const [isEdit, setIsEdit] = useState(false);

    const {
        id,
        name,
        job,
        // char_sprite,
        // user_id,
        hp,
        str,
        mag,
        dex,
        spd,
        def,
        res,
        luk
    } = char

    function deleteCharacter() {
        fetch(`http://localhost:9292/users/characters/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then((data) => onDelete(data));
    }

    function editCharacter() {
        console.log("Editing...")
    }

    return (
        <div className="UserCard">
            {isEdit ? (
                null
            ) : (
                <Card variant="outlined">
                    <h3>{name}</h3>
                    <h3>{job}</h3>
                    <li>HP: {hp}</li>
                    <li>STR: {str}</li>
                    <li>MAG: {mag}</li>
                    <li>DEX: {dex}</li>
                    <li>SPD: {spd}</li>
                    <li>DEF: {def}</li>
                    <li>RES: {res}</li>
                    <li>LUK: {luk}</li>

                    <Button variant="contained" onClick={deleteCharacter}>Delete Character</Button>

                    <Button variant="contained" onClick={editCharacter}>Edit</Button>
                </Card>)
            }


        </div>
    );
}

export default CharCard;
