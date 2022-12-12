import React from 'react';

import {useDispatch, useSelector} from 'react-redux';

// THIS COMPONENT IS OUR INTERFACE FOR SPEED
// YOU SHOULD DISPLAY THE CURRENT SPEED
// BUTTONS SHOULD INCREASE OR DECREASE SPEED, RESPECTIVELY



function SpeedControl() {
  // let speed = 0;

  const speedReducer = useSelector(store => store.speedReducer)

  let speed = speedReducer.speed;
  

  const dispatch = useDispatch();
  

  const increaseSpeed = () => {
    speed ++;

    dispatch({
      type: 'INCREASE_SPEED',
      payload: speed
    })
  }

  const decreaseSpeed = () => {
    speed --;

    dispatch({
      type: 'DECREASE_SPEED',
      payload: speed
    })
  }
  
    return (
      <div>
        <h2>Speed Control</h2>

        <button onClick={increaseSpeed}>Increase Speed</button>
        <p>SPEED: {speed} </p>
        <button onClick={decreaseSpeed}>Decrease Speed</button>
  
      </div>
    )
  
}

export default SpeedControl;