import React, { useState, useEffect } from 'react';
import { Select, Card, Button } from 'antd';
import { useParams } from 'react-router-dom';



const { Option } = Select;

const App = () => {
  const { id, moviename } = useParams();
  const [selectedMovie, setSelectedMovie] = useState('10');
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isBooked,setBooked] = useState([]);
  const isOccupied = (seat) =>{
    if(!isBooked.includes(seat))
      return false;
    else
      return true;
  }
  
  const handleMovieChange = (value) => {
    setSelectedMovie(value);
  };

  const handleSeatClick = (seat,isOccupied) => {
    if(!isOccupied.includes(seat)){
    const updatedSeats = [...selectedSeats];
    const seatIndex = updatedSeats.indexOf(seat);

    if (seatIndex === -1) {
      updatedSeats.push(seat);
    } else {
      updatedSeats.splice(seatIndex, 1);
    }

    setSelectedSeats(updatedSeats);
  }
  };

  const renderSeats = (rows, columns, offset) => {
    const seats = [];
    let seatNumber = 1;
  
    for (let row = 0; row < rows; row++) {
      const rowSeats = [];
  
      for (let col = 0; col < columns; col++) {
        const seat = `${String.fromCharCode(offset + row)}${col + 1}`;
        const isSelected = selectedSeats.includes(seat);
       
        const seatStyle = {
          backgroundColor: isSelected ? '#F7BD02' : isOccupied(seat) ? '#fff' : '#444451',
        };
  
        rowSeats.push(
          <div
            key={seat}
            className={`seat ${isSelected ? 'selected' : ''} 
            }`}
            style={seatStyle} // Apply the style here
            onClick={() => handleSeatClick(seat,isBooked)}
          >
            {seatNumber}
          </div>
        );
  
        seatNumber++;
      }
  
      seats.push(
        <div key={row} className="row">
          {rowSeats}
        </div>
      );
    }
  
    return seats;
  };
 
  useEffect(() => {
    // Handle seat selection in the UI
    const seats = document.querySelectorAll('.row .seat:not(.occupied)');
    seats.forEach((seat, index) => {
      if (selectedSeats.includes(seat.innerText)) {
        seat.classList.add('selected');
      } else {
        seat.classList.remove('selected');
      }
    });

    // Calculate and display the total price
    const count = document.getElementById('count');
    const total = document.getElementById('total');
    const selectedSeatsCount = selectedSeats.length;
    const ticketPrice = +selectedMovie;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
  }, [selectedSeats, selectedMovie]);

  return (
    <div className="App">
      <h2 style={{textAlign:'center'}}>Select Seats for Booking {moviename}</h2>
  

      {/* { <Card className='showcase'>
        <div className="seat not-selected"></div>
        <small>Not Selected</small>
        <div className="seat selected"></div>
        <small>Selected</small>
        <div className="seat occupied"></div>
        <small>Occupied</small>
      </Card> } */}

      <div className="container">
        <div className="screen"></div>
        <div className="row">
         
          <div className="middle-seats">{renderSeats(5, 10, 69)}</div>
          
        </div>
      </div>

      <p className="text">
        You have selected <span id="count">0</span> seats for a price of $
        <span id="total">0</span>
      </p>
    <button className='btnproceedcheckout'>Proceed to Checkout</button>
    </div>
  );
};

export default App;