import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React from 'react';
import jsPDF from 'jspdf';
import { useLocation } from 'react-router-dom';
// import logo from '../assets/logowhite1.png';
import logo from '../../assets/logo1.png';
import { Receipt } from '../../components/Receipt';

const PaymentSuccess = () => {
  const location = useLocation();
  const firstName = localStorage.getItem('firstName');
  const lastName = localStorage.getItem('lastName');
  const ticketPrice = localStorage.getItem('ticketPrice');
  const ticketQuantity = localStorage.getItem('ticketQuantity');
  const selectedSeats = localStorage.getItem('selectedSeats');
  const moviename = localStorage.getItem('moviename');
  const screenNumber = localStorage.getItem('screenNumber');
  const totalAmount = localStorage.getItem('totalAmount');
  const dates = localStorage.getItem('dates');

  
  // const totalAmount = queryParams.get('totalAmount');
  
  const handleDownloadPDF =() => {
    const doc = new jsPDF();
    doc.addImage(logo, 'PNG', 55, 15, 100, 30);
    doc.setFontSize(12);
    doc.text(`Name: ${firstName} ${lastName}`, 15, 60);
    doc.text(`Movie Name: ${moviename}`, 15, 70);
    doc.text(`Screen Number: ${screenNumber}`, 15, 80);
    doc.text(`Quantity: ${ticketQuantity}`, 15, 90);
    doc.text(`Ticket Price: ${ticketPrice}`, 15, 100);
    doc.text(`Selected Seats: ${selectedSeats}`, 15, 110);
    doc.text(`Total Price: ${totalAmount}`, 15, 120);
    doc.text(`Date: ${dates}`, 15, 130);
    doc.text(`Thank You for Booking Tickets with us, Enjoy!!`,15,140);
    doc.save('ticket.pdf');
  }
  return (
    <>
      <Header></Header>
      <div className="payment-success-container">
       <h1 className='payment'>Payment Successful !</h1>
      </div>
       <div><h3 style={{margin:'1em', color:'white'}}>Enjoy Your Movie !!</h3></div>
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       <button  onClick={handleDownloadPDF}>
       Download Ticket
      </button>
       </div>
       <h2 style={{color:'white' , textAlign:'center' , marginTop:'10px', marginRight:'20px'}}>OR</h2>
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       <Receipt />
       </div>
      <Footer></Footer>
    </>
  );
};

export default PaymentSuccess;