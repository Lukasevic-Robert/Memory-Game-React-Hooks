import React from 'react'
import { Grid } from '@material-ui/core';
import { GiCrownedSkull, GiAmericanFootballHelmet, GiBabyFace } from "react-icons/gi";
import "./styles/styles.css";

export default function LevelCards({handleLevelClick}) {
    return (
        <div id="chooseLevel">
        <Grid container justify="center" width={500} spacing={4}>
            <Grid item xs={4} sm={4} md={4} lg={4}><div className="levelCard" onClick={() => handleLevelClick(4)}><GiBabyFace size={90} color="#e2725a" /></div><span id="levelSpan">LOW</span></Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}><div className="levelCard" onClick={() => handleLevelClick(8)}><GiAmericanFootballHelmet size={100} color="#e2725a" /></div><span id="levelSpan">MID</span></Grid>
            <Grid item xs={4} sm={4} md={4} lg={4}><div className="levelCard" onClick={() => handleLevelClick(12)}><GiCrownedSkull size={110} color="#e2725a" /></div><span id="levelSpan">HIGH</span></Grid>
        </Grid>
    </div>
    )
}
