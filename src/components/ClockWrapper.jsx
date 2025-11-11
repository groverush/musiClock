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
        <span className="hidden-button" onClick={hideClock}>{isActiveClock?"X":"🕒"}</span> 
    <div className="clock-wrapper">
    {props.children}
    </div>
    </>
}
export default ClockWrapper;