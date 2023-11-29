import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React from 'react';
import jsPDF from 'jspdf';
import { useLocation } from 'react-router-dom';
// import logo from '../assets/logowhite1.png';
import logo from '../../assets/logo1.png';

const PaymentSuccess = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const firstName = queryParams.get('firstName');
  const lastName = queryParams.get('lastName');
  const ticketPrice = queryParams.get('ticketPrice');
  const ticketQuantity = queryParams.get('ticketQuantity');
  
  const handleDownloadPDF =() => {
    const doc = new jsPDF();
    doc.addImage(logo, 'PNG', 55, 15, 100, 30);
    doc.setFontSize(12);
    doc.text(`Name: ${firstName} ${lastName}`, 15, 60);
    doc.text(`Quantity: ${ticketQuantity}`, 15, 70);
    doc.text(`Ticket Price: ${ticketPrice}`, 15, 80);
    doc.text(`Thank You for Booking Tickets with us, Enjoy!!`,15,100);
    // doc.text(`Selected Seats: ${selectedSeats.join(', ')}`, 15, 70);
    doc.save('ticket.pdf');
  }
  return (
    <>
      <Header></Header>
      <div className="payment-success-container">
       <h1 className='payment'>Payment Successful !</h1>
      </div>
       <div><h3>Enjoy Your Movie !!</h3></div>
       <button className='btnproceedcheckout' onClick={handleDownloadPDF}>Download Ticket</button>
      <Footer></Footer>
    </>
  );
};

export default PaymentSuccess;