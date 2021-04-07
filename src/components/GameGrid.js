import React from 'react';
import { Grid } from '@material-ui/core';
import Block from './Block';
import gameStyles from './styles/gameStyles';
import "./styles/styles.css";



export default function GameGrid({ imgArray, flipped, handleClick, matched, reset, defaultImage, win}) {
    const classes = gameStyles();
    let highLevel = imgArray.length === 24;

    return (
        <div id="gameGrid"  className= {highLevel ? "widthHigh" : "widthMid"}>
            <main className={classes.content}>
                <Grid container justify="center" width={500} spacing={2}>
                    {imgArray.map((img, index) => {

                          let isFlipped = false;

                          if (flipped.includes(index)) isFlipped = true;
                          if (matched.includes(img.image)) isFlipped = true;

                        return (
                        <Grid item key={img.id} xs={4} sm={4} md={highLevel? 3 : 3} lg={highLevel? 2 : 3}>
                            <Block key={reset} imageObj={img} fatherHandleClick={handleClick} isFlipped={isFlipped} imgIndex={index} defaultImage={defaultImage} win={win} imgArray={imgArray}/>
                        </Grid>
                        )
                    })}
                </Grid>
            </main>
        </div>
    )
}

