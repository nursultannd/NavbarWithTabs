import React, { useState, useEffect } from "react";
import "../Navbar.css";

export default function Timer() {
  let totalAmountofHours = 1;
  let hrs = totalAmountofHours - 1;
  let init_hrs = 0;
  let init_mins = 0;

  const [timerHours, setTimerHours] = useState(init_hrs);
  const [timerMinutes, setTimerMinutes] = useState(init_mins);
  const [isRunning, setIsRunning] = useState(true);
  const [timeout, setTimeout] = useState(false);

  useEffect(() => {
    let intervalID;
    if (isRunning) {
      intervalID = window.setInterval(() => {
        setTimerMinutes((timerMinutes) => timerMinutes + 1);
        if (timerMinutes === 59) {
          setTimerMinutes(init_mins);
          setTimerHours((timerHours) => timerHours + 1);

          if (timerHours === hrs) {
            handleTimeout();
          }
        }
      }, 60 * 1000);
    } else {
      clearInterval(intervalID);
    }
    return () => window.clearInterval(intervalID);
  }, [isRunning, timerMinutes]);

  const resetTimer = () => {
    setTimerHours(init_hrs);
    setTimerMinutes(init_mins);
    setIsRunning(true);
    setTimeout(false);
    //update component?  
  };

  function handleTimeout() {
    setIsRunning(false);
    setTimeout(true);
  }

  return (
    <>
      <li
        className="nav-link"
        style={{ padding: "0 5px" }}
        onClick={resetTimer}
      >
        :
        {timeout
          ? "XX"
          : timerMinutes === 0
          ? "00"
          : timerMinutes < 10
          ? "0" + timerMinutes
          : timerMinutes}
      </li>
    </>
  );
}
