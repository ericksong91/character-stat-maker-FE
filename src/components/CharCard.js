import { React } from 'react';
import '../css/App.css';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button'

function CharCard({ char, owner, onDelete }) {

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
            .then((data) => onDelete(data))

    }

    return (
        <div className="UserCard">
            <Card variant="outlined">
                <h3>{name}</h3>
                <h3>{job}</h3>
                HP: {hp}
                STR: {str}
                MAG: {mag}
                DEX: {dex}
                SPD: {spd}
                DEF: {def}
                RES: {res}
                LUK: {luk}

                <h4>Owned by {owner}</h4>
                <Button variant="contained" onClick={deleteCharacter}>Delete Character</Button>

            </Card>
        </div>
    );
}

export default CharCard;
