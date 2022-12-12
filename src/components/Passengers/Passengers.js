import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
// THIS COMPONENT IS OUR INTERFACE FOR PASSENGER CHECK IN
// YOU SHOULD DISPLAY THE CURRENT PASSENGERS
// INPUT SHOULD COLLECT INFO, BUTTON SHOULD ADD THEM TO THE LIST

function Passengers() {

  const [passenger, setPassenger] = useState('');
  const [passengerCount, setPassengerCount] = useState('');

  const dispatch = useDispatch();

  const passengerList = useSelector(store => store.passengerReducer);

  const handleSubmit = (event) => {
    // setPassengerCount(passengerCount++);

    event.preventDefault();
    console.log('handling submit');

    dispatch({
      type: 'ADD_PASSENGER',
      payload: passenger
    })
  }
  
    return (
      <div>
        <h2>Passengers</h2>

        <input 
          type="text" 
          name="name" 
          placeholder="Enter Name"
          value={passenger}
          onChange={(event) => setPassenger(event.target.value)} />
        <button
            onClick={handleSubmit}>Add Passenger</button>

        <ul>PASSENGER LIST: </ul>
          {passengerList.map((passenger) => {
            return (<li key={passenger.index}>{passenger.passenger}</li>)
          })}
      
      </div>
    )
  
}

export default Passengers;