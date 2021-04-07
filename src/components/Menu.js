import React from 'react'
import { VscDebugRestart } from "react-icons/vsc";
import { GiCrownedSkull, GiAmericanFootballHelmet, GiBabyFace, GiReturnArrow } from "react-icons/gi";
import Counter from './Counter';
import { RiTimerLine, RiTimerFlashLine } from "react-icons/ri";
import { MdTimerOff } from "react-icons/md";

export default function Menu({handleLevelClick, resetGame, imgCount, reset, canFlip, setCanFlipper, flipCount}) {
    return (
        <div id="resetGame" className="row justify-content-between mx-auto">
                <div className="col lg-2 d-flex align-items-end"><VscDebugRestart id="hoverEff" size={60} color="#e2725a" onClick={() => resetGame(imgCount)} /></div>
                <div className="col lg-3 d-flex justify-content-between align-items-end pb-2 mr-n4">{<RiTimerFlashLine id="timer" color="#e2725a" size={50}/>}{<RiTimerLine id="timer"  color="#e2725a" size={50}/>}{<MdTimerOff id="timer" color="#e2725a" size={50}/>}</div>
                <div className="col lg-2 d-flex justify-content-between"><Counter reset={reset} canFlip={canFlip} setCanFlipper={setCanFlipper}/></div>
                <div id="flipcounter" className="col lg-2 d-flex justify-content-center"><div className="row App d-flex justify-content-end align-items-end"><div className="col lg-6 d-flex justify-content-end align-items-end pb-3 mr-n4"><GiReturnArrow size={30}/></div><div className="col lg-6 d-flex align-items-end">{flipCount}</div></div></div>
                <div className="col lg-3 d-flex justify-content-between align-items-end level-class"><GiBabyFace id="babyface" className="hoverEff" size={60} color="#e2725a" onClick={() => handleLevelClick(4)} /><GiAmericanFootballHelmet id="helmet" className="hoverEff" size={60} color="#e2725a" onClick={() => handleLevelClick(8)} /><GiCrownedSkull id="skull" className="hoverEff" size={60} color="#e2725a" onClick={() => handleLevelClick(12)} /></div>
            </div>
    )
}
