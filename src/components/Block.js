import React, { useState, useEffect } from 'react'
import "./styles/styles.css";
import leo from "../img/win.gif";
import notbad from "../img/alecbaldwin.gif";
import successKid from "../img/SuccessKid.jpg";




function Block({ imageObj, fatherHandleClick, imgIndex, isFlipped, defaultImage, win, imgArray }) {
    const [img, setImg] = useState(defaultImage);
    const [now, setNow] = useState(false);
    
    const setImage = () => {
        setImg(imageObj.image);
    };

    useEffect(() => {
        if(win){
            // setImg(<img src={leo} alt="leo"></img>)  
            setTimeout(() => setImg(imgArray.length === 24 ? <img src={leo} alt="leo"></img> : imgArray.length === 16 ? <img src={notbad} alt="not-bad"></img> : <img src={successKid} alt="success-kid"></img>), 1500);
            setTimeout(() => setNow(win), 1500);
        }
    },[win])

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
                <div className={now ? 'back' :  isFlipped ? 'front' : 'back'}>
                    {img}              
                </div>
            </div>
        </div>

    )
}
export default Block;