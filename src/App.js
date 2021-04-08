import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ImgList from './components/ImgList';
import React from 'react';
import { AiFillPlayCircle } from "react-icons/ai";


function App() {

  const startGame = () => {

    console.log('GAME HAS STARTED!')
    document.getElementById('b').style.display = 'none';
    document.getElementById('img-list').style.display = 'flex';
  }

  return (
    <div className="App">
      <AiFillPlayCircle size={100} id="b" className="button" onClick={startGame} />
      <div id="img-list" className="flex-column">
        <div id="gamename">TOTAL RECALL<span id="copyright">&copy;</span></div>
        <ImgList />
      </div>
    </div>
  );
}

export default App;
