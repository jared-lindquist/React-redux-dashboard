import React from 'react';

import { useSelector } from 'react-redux';

// THIS COMPONENT IS OUR STATUS PAGE
// YOU SHOULD DISPLAY THE CURRENT SPEED FROM SECTION ONE
// YOU SHOULD DISPLAY THE COUNT OF PEOPLE CURRENTLY ON BOARD


function Dashboard() {

  const speedReducer = useSelector(store => store.speedReducer);
  const passengerList = useSelector(store => store.passengerReducer);

  let speed = speedReducer.speed;
  
  return (
    <div>
      <h2>Dashboard</h2>

      <p>SPEED: {speed} </p>
      <p>PASSENGER COUNT: {passengerList.length} </p>
    </div>
  );
}

export default Dashboard;
