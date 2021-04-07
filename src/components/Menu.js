import React from 'react'
import { VscDebugRestart } from "react-icons/vsc";
import { GiCrownedSkull, GiAmericanFootballHelmet, GiBabyFace } from "react-icons/gi";
import Counter from './Counter';

export default function Menu({handleLevelClick, resetGame, imgCount, reset, canFlip, setCanFlipper}) {
    return (
        <div id="resetGame" className="row justify-content-between mx-auto">
                <div className="col lg-4 d-flex align-items-end"><VscDebugRestart id="hoverEff" size={60} color="#e2725a" onClick={() => resetGame(imgCount)} /></div>
                <div className="col lg-4 d-flex align-items-end"><Counter reset={reset} canFlip={canFlip} setCanFlipper={setCanFlipper}/></div>
                <div className="col lg-4 d-flex justify-content-between align-items-end level-class"><GiBabyFace id="hoverEff" size={55} color="#e2725a" onClick={() => handleLevelClick(4)} /><GiAmericanFootballHelmet id="hoverEff" size={60} color="#e2725a" onClick={() => handleLevelClick(8)} /><GiCrownedSkull id="hoverEff" size={70} color="#e2725a" onClick={() => handleLevelClick(12)} /></div>
            </div>
    )
}
