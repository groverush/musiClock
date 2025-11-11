import "../App.css";
import { useState } from "react";
const ClockWrapper = (props) => {
    const [isActiveClock, setActiveClock] = useState(true);

    function hideClock(){
        const clockWrapper = document.querySelector('.clock-wrapper');
        setActiveClock(!isActiveClock);
        if(isActiveClock)
            clockWrapper.style.display = 'none';
        else
            clockWrapper.style.display = 'block';
    }
    return <>
        {!isActiveClock?<span className="show-button" onClick={hideClock}>🕒</span>:
    <div className="clock-wrapper">
        <span className="hidden-button" onClick={hideClock}>X</span>

    {props.children}
    </div>
    }
    </>
}
export default ClockWrapper;