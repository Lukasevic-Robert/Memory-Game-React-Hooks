import React, { useState, useEffect } from 'react'
import "./styles/styles.css";
// GIF's too much weight - but WHO cares if it is fun, right? :))
import leo from "../img/win.gif";
import notbad from "../img/alecbaldwin.gif";

import successKid from "../img/SuccessKid.jpg";
import loser from "../img/loser.png";




function Block({ imageObj, fatherHandleClick, imgIndex, isFlipped, defaultImage, win, imgArray, lose }) {
    const [img, setImg] = useState(defaultImage);
    const [now, setNow] = useState(false);

    const setImage = () => {
        setImg(imageObj.image);
    };

    useEffect(() => {

        if (lose) {
            setTimeout(() => setImg(<img src={loser} alt="doge"></img>), 1500);
            setTimeout(() => setNow(lose), 1500);
        }

        if (win) {
            // setImg(<img src={leo} alt="leo"></img>)  
            setTimeout(() => setImg(imgArray.length === 24 ?
                <img src={leo} alt="leo"></img> : imgArray.length === 16 ?
                    <img src={notbad} alt="not-bad"></img> : <img src={successKid} alt="success-kid"></img>), 1500);
            setTimeout(() => setNow(win), 1500);
        }
    }, [win, lose])

    useEffect(() => {
        if (isFlipped) {
            setImg(imageObj.image)
        } else {
            setImg(defaultImage)
        }
    }, [isFlipped])

    const handleClick = () => {
        fatherHandleClick(imgIndex);
    }

    return (

        <div onClick={!isFlipped ? handleClick : null} className={`root ${now ? "" : isFlipped ? "flipped" : ""} `}>

            <div className="inner">
                <div className={now ? 'back' : isFlipped ? 'front' : 'back'}>
                    {img}
                </div>
            </div>
        </div>

    )
}
export default Block;