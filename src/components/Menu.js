import React from 'react'
import { VscDebugRestart } from "react-icons/vsc";
import { GiCrownedSkull, GiAmericanFootballHelmet, GiBabyFace, GiReturnArrow } from "react-icons/gi";
import Counter from './Counter';
import { RiTimerLine, RiTimerFlashLine } from "react-icons/ri";
import { MdTimerOff } from "react-icons/md";

export default function Menu({handleLevelClick, resetGame, imgCount, reset, canFlip, setCanFlipper, flipCount, handleTimers, counterValue, level, timer}) {
    return (
        <div id="resetGame" className="row justify-content-between mx-auto">
                <div className="col col-xl-2 col-lg-3 col-md-4 col-sm-4 d-flex align-items-end"><VscDebugRestart className="hoverEff" size={60} color="#e2725a" onClick={() => resetGame(imgCount)} /></div>

                <div className="col col-xl-3 col-lg-4 col-md-4 col-sm-4 d-flex justify-content-between align-items-end pb-2 mr-n4">{<RiTimerFlashLine id="fast" onClick={() =>handleTimers(level, 1)}className="timer" color="#e2725a" size={timer === 1 ? 60 : 50}/>}{<RiTimerLine id="slow" onClick={() =>handleTimers(level, 2)} className="timer"  color="#e2725a" size={timer === 2 ? 60 : 50}/>}{<MdTimerOff id="notime" onClick={() =>handleTimers(level, 3)} className="timer" color="#e2725a" size={timer === 3 ? 60 : 50}/>}</div>
                
                <div className="col col-xl-2 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-between"><Counter reset={reset} canFlip={canFlip} setCanFlipper={setCanFlipper} counterValue={counterValue}/></div>

                <div id="flipcounter" className="col col-xl-2 col-lg-2 col-md-6 col-sm-6 d-flex justify-content-center"><div className="row App d-flex justify-content-end align-items-end"><div className="col lg-6 d-flex justify-content-end align-items-end pb-3 mr-n4"><GiReturnArrow size={30}/></div><div className="col lg-6 d-flex align-items-end">{flipCount}</div></div></div>
                
                <div className="col col-xl-3 col-lg-12 col-md-6 col-sm-6 d-flex justify-content-between align-items-end level-class"><GiBabyFace id="babyface" className="hoverEff" size={level === 4 ? 70 : 60} color="#e2725a" onClick={() => handleLevelClick(4)} /><GiAmericanFootballHelmet id="helmet" className="hoverEff" size={level === 8 ? 70 : 60} color="#e2725a" onClick={() => handleLevelClick(8)} /><GiCrownedSkull id="skull" className="hoverEff" size={level === 12 ? 70 : 60} color="#e2725a" onClick={() => handleLevelClick(12)} /></div>
            </div>
    )
}
