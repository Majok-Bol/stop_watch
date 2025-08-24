// import { useEffect, useRef, useState } from "react"

import { useEffect, useRef, useState } from "react";

function App() {
  //create a timer start at 1 and increment the timer after 1 second
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const previousCounter=useRef(null);
  useEffect(() => {
    let counterInterval;
    if (isActive) {
      counterInterval = setInterval(() => {
    
        setTimer((count) => count + 1);
     
      }, 1000);
      //clear interval
      return () => clearInterval(counterInterval);
    }
  }, [isActive]);
  //tracker previous result
  useEffect(()=>{
    previousCounter.current=timer;
  },[timer])

  return (
    <>
      <div className="btn">
        <button onClick={() => setIsActive(true)}>START</button>
        <button onClick={()=>setIsActive(false)}>STOP</button>
        <button onClick={() =>{
          setTimer(0);
        } }>RESET</button>
      </div>
      <p>Current timer: {timer}</p>
      <p>Previous timer: {previousCounter.current}</p>
    </>
  );
}

export default App;
