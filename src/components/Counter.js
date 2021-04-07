import { React, useEffect, useState } from 'react'

export default function Counter({ reset, canFlip, setCanFlipper }) {

    const [counter, setCounter] = useState(60);
    let timer;

    useEffect(() => {
   
        if (counter === 0) {
            setCanFlipper(false);
        }
        
        if (canFlip) {
         timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);}

        return () => clearInterval(timer);
    }, [counter]);

    useEffect(() => {
        setCounter(60);
    }, [reset]);

    return (
        <div className="App">
            <div id="counter" className="counter d-flex align-items-end" >{counter}</div>
        </div>
    );
}