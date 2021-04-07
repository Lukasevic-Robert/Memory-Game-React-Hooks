import React, { useState, useEffect } from 'react';
import { FcSimCard, FcSalesPerformance, FcIdea, FcAdvertising, FcHeadset, FcApproval, FcStart, FcSwitchCamera, FcDislike, FcAlarmClock, FcAndroidOs, FcAssistant, FcCloseUpMode, FcLike, FcPhotoReel } from "react-icons/fc";
import GameGrid from './GameGrid';
import { GiCrownedSkull, GiAmericanFootballHelmet, GiBabyFace } from "react-icons/gi";
import LevelCards from './LevelCards';
import Menu from './Menu';
import "./styles/styles.css";

const imgArray = [{ image: <FcSimCard size={90} /> }, { image: <FcSalesPerformance size={90} /> },
{ image: <FcApproval size={90} /> }, { image: <FcSwitchCamera size={90} /> }, { image: <FcAlarmClock size={90} /> }, { image: <FcPhotoReel size={90} /> },
{ image: <FcAssistant size={90} /> }, { image: <FcCloseUpMode size={90} /> }, { image: <FcLike size={90} /> }, { image: <FcStart size={90} /> }, { image: <FcAndroidOs size={90} /> },
{ image: <FcDislike size={90} /> }, { image: <FcIdea size={90} /> }, { image: <FcAdvertising size={90} /> }, { image: <FcHeadset size={90} /> }];

export default function ImgList() {

    const [array, setArray] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);
    const [reset, setReset] = useState(1);
    const [canFlip, setCanFlip] = useState(true);
    const [imgCount, setImgCount] = useState(0);
    const [flippedCount, setFlippedCount] = useState(0);
    const [win, setWin] = useState(false);
    const [defaultImage, setDefaultImage] = useState(<GiBabyFace size={90} color="gold" />);
    const [flipCount, setfFlipCount] = useState(0);
    const [lose, setLose] = useState(false);



    // KING of the PARTY !!!
    useEffect(() => {
        if (flipped < 2) return;

        const firstMatched = array[flipped[0]];
        const secondMatched = array[flipped[1]];

        if (secondMatched && firstMatched.image === secondMatched.image) {
            setMatched([...matched, firstMatched.image]);
            setFlippedCount(flippedCount - 1);
            if (flippedCount === 1) {
                setCanFlip(false);
                setWin(true);
            }
            console.log(matched);
            console.log(array);
        }

        if (flipped.length === 2) {
            setTimeout(() => setFlipped([]), 1000);
        }
    }, [flipped]);

    function setImgArray(imgA) {
        setArray(imgA);
    }

    // RESET the Game !!!
    const resetGame = (lvl) => {

        lvl === 8 ? setDefaultImage(<GiAmericanFootballHelmet size={90} color="#77ced1" />) :
            lvl === 12 ? setDefaultImage(<GiCrownedSkull size={90} color="#77ced1" />) :
                setDefaultImage(<GiBabyFace size={90} color="#77ced1" />);

        document.getElementById('chooseLevel').style.display = 'none';
        setReset(reset + 1);
        setFlipped([]);
        setMatched([]);
        setFlippedCount(lvl);
        getRandomImages(lvl);
        setfFlipCount(0);
        setLose(false);
        setWin(false);
        setCanFlip(true);
        document.getElementById("gameGrid").style.display = "flex";
        document.getElementById("resetGame").style.display = "flex";

    }

    // GET random images
    const getRandomImages = (lvl) => {
        let randomArray = [];
        for (let i = 0; i < lvl;) {
            let img = imgArray[Math.floor(Math.random() * imgArray.length)];
            if (!randomArray.includes(img)) {
                randomArray.push(img);
                randomArray.push(img);
                i++;
            }
        }
        let newArray = randomArray.map((obj, index) => ({ ...obj, id: index + 1 }))
        return setImgArray(shuffle(newArray));
    }

    // SHUFFLE the array - helper method
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    // HANDLE click in Block Component
    const handleClick = (index) => {

        if (canFlip && flipped.length < 2) {
            setfFlipCount(flipCount + 1);
            setFlipped((opened) => [...opened, index]);
        }
    }

    // HANDLE Game Level click - Low Mid High
    const handleLevelClick = (lvl) => {
        handleSizes(lvl);
        document.getElementById('gamename').style.fontSize = '80px';
        setImgCount(lvl);
        resetGame(lvl);
    }

    const handleSizes = (lvl) => {
        if (lvl === 4) { let a = document.getElementById('helmet');a.style.width = '60px'; a.style.color = '#e2725a'; let b = document.getElementById('skull');b.style.width = '60px'; b.style.color = '#e2725a' };
        if (lvl === 8) { let a = document.getElementById('babyface');a.style.width = '60px'; a.style.color = '#e2725a'; let b = document.getElementById('skull');b.style.width = '60px'; b.style.color = '#e2725a' };
        if (lvl === 12) { let a = document.getElementById('babyface');a.style.width = '60px'; a.style.color = '#e2725a'; let b = document.getElementById('helmet');b.style.width = '60px'; b.style.color = '#e2725a' };

        document.getElementById(lvl === 4 ? 'babyface' : lvl === 8 ? 'helmet' : 'skull').style.width = '150px';
        document.getElementById(lvl === 4 ? 'babyface' : lvl === 8 ? 'helmet' : 'skull').style.color = '#4a6274';
    }

    const setCanFlipper = (v) => {
        setLose(true);
        setCanFlip(v);
    }

    return (
        <div className="mainForTheGame">
            <GameGrid imgArray={array} flipped={flipped} handleClick={handleClick} matched={matched} reset={reset} defaultImage={defaultImage} win={win} lose={lose} />
            <LevelCards handleLevelClick={handleLevelClick} />
            <Menu handleLevelClick={handleLevelClick} resetGame={resetGame} imgCount={imgCount} reset={reset} canFlip={canFlip} setCanFlipper={setCanFlipper} flipCount={flipCount} />

        </div>
    )
}
