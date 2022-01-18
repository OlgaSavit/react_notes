import React, {useEffect} from 'react';
import {useStopwatch} from 'react-timer-hook';
import {FaPlayCircle,FaPauseCircle} from "react-icons/fa";
import {useDispatch} from "react-redux";
import {saveTimeTask} from "../redux/actions/tasks";


const Timer=({task,timeC} )=> {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false,offsetTimestamp	:timeC });
    const dispatch = useDispatch();
    const onPause=()=>{
        let hour=hours*3600;
        let min=minutes*60;
        let time=hour+min+seconds;
        dispatch(saveTimeTask(time,task))
        pause()
    }
    const onStart=()=>{
        start()
    }

    return (
        <div style={{display:'flex',textAlign: 'center'}}>
            {
                isRunning ?
                <button onClick={onPause}>
                    <FaPauseCircle/>
                </button> :
                <button onClick={onStart}>
                  <FaPlayCircle/>
                </button>
            }
            <div style={{fontSize: '12px',marginLeft:'10px'}}>
                <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
            </div>
        </div>
    );
}
export default Timer;