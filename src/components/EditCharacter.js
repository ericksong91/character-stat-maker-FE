import { React, useState } from 'react';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import { FormControl } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField'


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

    const jobsNames = [
        "Sword Fighter",
        "Lance Fighter",
        "Axe Fighter",
        "Archer",
        "Bow Knight",
        "Armor Knight",
        "Cavalier",
        "Mage",
        "Martial Monk",
        "Pegasus Knight",
        "Swordmaster",
        "Hero",
        "Halberdier",
        "Royal Knight",
        "Berserker",
        "Warrior",
        "Sniper",
        "General",
        "Paladin",
        "Wolf Knight",
        "Sage",
        "Mage Knight",
        "Martial Master",
        "Griffin Knight",
        "Wyvern Knight",
        "Thief",
        "Dancer"
    ]

    const jobSelect = jobsNames.map((jobName)=>{
        return <MenuItem value={jobName}>{jobName}</MenuItem>
    })

    const [onName, setOnName] = useState(name);
    const [onJob, setOnJob] = useState(job);

    function handleChange(e) {
        e.preventDefault();
    }

    return (
        <div className="EditChar">
            <Card variant="outlined">
                <FormControl>
                    <TextField 
                    id="outlined-basic" 
                    value={onName} 
                    onChange={handleChange}
                    />
                    <Select id="demo-simple-select" value={onJob}>
                        {jobSelect}
                    </Select>
                </FormControl>
                <li>HP: {hp}</li>
                <li>STR: {str}</li>
                <li>MAG: {mag}</li>
                <li>DEX: {dex}</li>
                <li>SPD: {spd}</li>
                <li>DEF: {def}</li>
                <li>RES: {res}</li>
                <li>LUK: {luk}</li>

                <Button variant="contained" onClick={onDelete}>Delete Character</Button>

                <Button variant="contained" onClick={onEdit}>Save</Button>
            </Card>
        </div>
    );
}

export default EditChar