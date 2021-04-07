import React, { useState, useEffect } from 'react'
import "./styles/styles.css";
import leo from "../img/win.gif";




function Block({ imageObj, fatherHandleClick, imgIndex, isFlipped, defaultImage }) {
    const [img, setImg] = useState(defaultImage);
    
    const setImage = () => {
        setImg(imageObj.image);
    };

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

        <div onClick={!isFlipped ? handleClick : null} className={`root ${isFlipped ? "flipped" : ""} `}>

            <div className="inner">
                <div className={isFlipped ? 'front' : 'back'}>
                    
                    <img src={leo}></img>
                </div>
            </div>
        </div>

    )
}
export default Block;