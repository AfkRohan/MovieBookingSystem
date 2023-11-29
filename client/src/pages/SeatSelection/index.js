import React, { useState, useEffect } from 'react';
import { Select, Card, Button } from 'antd';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const { Option } = Select;

const App = () => {
  const { id, moviename , screenNumber , price } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(parseFloat(price));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isBooked,setBooked] = useState([]);
  const isOccupied = (seat) =>{
    if(!isBooked.includes(seat))
      return false;
    else
      return true;
  }


   
 const [payload , setPayload] = useState([]);
 



  const handleMovieChange = (value) => {
    setSelectedMovie(value);
  };

  

  const handleSeatClick = (seat,isOccupied) => {
    if(!isOccupied.includes(seat)){
    const updatedSeats = [...selectedSeats];
    const seatIndex = updatedSeats.indexOf(seat);

    if (seatIndex === -1) {
      updatedSeats.push(seat);
      const occupiedSeats =  {
        screen : screenNumber, 
        isAvailable : false,
        number : seat[1],
        row : seat[0],
        showId: id,
        userId : 'A3bh53',
        price : price}
  
        const tempData = payload;
  
        tempData.push(occupiedSeats);
        setPayload(tempData);
        console.log(payload);

    } else {
      updatedSeats.splice(seatIndex, 1);
      const tempData = payload;

      const occupiedSeats =  {
        screen : screenNumber, 
        isAvailable : false,
        number : seat[1],
        row : seat[0],
        showId: id,
        userId : localStorage.getItem("userId") ?? "P2R4E6",
        price : price}
  
        tempData.pop(tempData.indexOf(occupiedSeats));
        setPayload(tempData);
        console.log(payload);
    }
    setSelectedSeats(updatedSeats);

   
      

    console.log(selectedSeats);
  }


  };

  const renderSeats = (columns) => {
    const seats = [];
    let seatNumber = 1;
    
    const rows = ['A', 'B' , 'C' , 'D' , 'E' , 'F' ];
    for (let i = 0 ; i < rows.length ; i++) {
      
      const rowSeats = [];
  
      for (let col = 0; col < columns; col++) {
        const seat = `${rows[i]}${col}`;
        const isSelected = selectedSeats.includes(seat);
       
        const seatStyle = {
          backgroundColor: isSelected ? '#F7BD02' : isOccupied(seat) ? '#8f9296' : '#444451',
        };
  
        rowSeats.push(
          <div
            key={seat}
            className={`seat ${isSelected ? 'selected' : ''} 
            }`}
            style={seatStyle} 
            onClick={() => handleSeatClick(seat,isBooked)}
          >
            {seat}
          </div>
        );
      }
  
      seats.push(
        <div key={rows[i]} className="row">
          {rowSeats}
        </div>
      );
    }
  
    return seats;
  };

  // '/bookedseats/:id'
  
 
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


  useEffect (()  => {

    const fetchData =  async () => {

    const response = await axios.get(`http://localhost:4000/api/bookedseats/${id}`);
    const bookings = response.data;
    console.log("Bookings " + typeof bookings);

    const concatenatedBookings = bookings.map(bookings => `${bookings.row}${bookings.number}`);
    setBooked(concatenatedBookings); // Set state with the concatenated bookings
    
    console.log(setBooked);

 }
  fetchData() },[]);

 

  return (
    <div className="App">
      <h2 style={{textAlign:'center' , color: 'white'}}>Select Seats for Booking : {moviename}</h2>
  

      {/* { <Card className='showcase'>
        <div>
        <div className="seat not-selected"></div>
        <small>Not Selected</small>
        <div className="seat selected"></div>
        <small>Selected</small>
        <div className="seat occupied"></div>
        <small>Occupied</small>
        </div>
      </Card> } */}

      <div className="container">
        <div className="screen text-center"><h2 style={{"color":"black", "margin-top":"10px"}} className='text-center'> Screen {screenNumber}</h2></div>
        <div className="row">
         
          <div className="middle-seats">{renderSeats(10)}</div>
          
        </div>
      </div>

      <p className="text">
        You have selected <span id="count">0</span> seats for a price of $
        <span id="total">0</span>
       
      </p>
      {console.log('Selected seats:', selectedSeats.length)}
{/* to={{
    pathname: '/payment',
    state: { ticketQuantity: selectedSeats.length , selectedSeats: selectedSeats}
  }} */}

  
  <button
 onClick={async () => {
  try {
    const response = await axios.post("http://localhost:4000/api/bookseats/", payload);
    localStorage.setItem("BookedQuantity", selectedSeats.length);
    localStorage.setItem("Price", price);
    const subtotal = price * selectedSeats.length;
    const gstAmount = (subtotal * 5) / 100;
    const totalAmount = subtotal + gstAmount;
    localStorage.setItem("totalPrice",totalAmount.toFixed(2))
    window.location.href = '/payment';
  } catch (error) {
    console.error('Error:', error);
  }
}}



    className="btnproceedcheckout"
    disabled={selectedSeats.length === 0}
  >
    Proceed to Checkout
  </button>
      </div>
  );
};

export default App;


