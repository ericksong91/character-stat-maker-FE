import { React, useState } from 'react';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'


function EditChar({ onDelete, onEdit, char }) {
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

    const [onName, setOnName] = useState(name);
    const [onJob, setOnJob] = useState(job);

    return (
        <div className="EditChar">
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

                <Button variant="contained" onClick={onDelete}>Delete Character</Button>

                <Button variant="contained" onClick={onEdit}>Exit</Button>
            </Card>
        </div>
    );
}

export default EditChar