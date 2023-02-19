import { React, useState } from 'react';
import EditCharacter from './EditCharacter';
import '../css/App.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'

function CharCard({ char, onDelete, onEdit }) {
    const [isEdit, setIsEdit] = useState(false);

    const {
        id,
        name,
        job,
        level,
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

    function editCharacterToggle() {
        setIsEdit(!isEdit)
    }

    return (
        <div className="UserCard">
            {isEdit ? (
                <EditCharacter onEditToggle={editCharacterToggle} onEdit={onEdit} onDelete={deleteCharacter} char={char} />
            ) : (
                <Card variant="outlined">
                    <h3>{name}</h3>
                    <h3>LEVEL: {level}</h3>
                    <h3>{job}</h3>
                    <li>HP: {hp}</li>
                    <li>STR: {str}</li>
                    <li>MAG: {mag}</li>
                    <li>DEX: {dex}</li>
                    <li>SPD: {spd}</li>
                    <li>DEF: {def}</li>
                    <li>RES: {res}</li>
                    <li>LUK: {luk}</li>

                    <Button variant="contained" sx={{ m: 0.5, mt: 0.5 }} onClick={deleteCharacter}>Delete Character</Button>

                    <Button variant="contained" sx={{ m: 0.5, mt: 0.5 }} onClick={editCharacterToggle}>Edit</Button>
                </Card>)
            }
        </div>
    );
}

export default CharCard;
