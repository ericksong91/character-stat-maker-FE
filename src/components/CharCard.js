import { React } from 'react';
import '../css/App.css';
import Card from '@mui/material/Card';

function CharCard({ char }) {

    const {
        id,
        name,
        job,
        char_sprite,
        user_id,
        hp,
        str,
        mag,
        dex,
        spd,
        def,
        res,
        luk
    } = char

    console.log("You're here!")

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
            </Card>
        </div>
    );
}

export default CharCard;
