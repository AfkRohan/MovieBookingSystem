import React, {useEffect} from "react";
import jsPDF from 'jspdf';
import logo from '../assets/logowhite1.png';

function PDFGenerator({ firstName, selectedSeats }) {
  useEffect(() => {
    generateTicketPDF(firstName, selectedSeats);
    
  }, []);

  const generateTicketPDF = (firstName, selectedSeats,) => {
    const doc = new jsPDF();
    doc.addImage(logo, 'PNG', 15, 15, 30, 30);
    doc.setFontSize(12);
    doc.text(`Name: ${firstName}`, 15, 60);
    doc.text(`Selected Seats: ${selectedSeats.join(', ')}`, 15, 70);
    doc.save('ticket.pdf');
  };

  return <div>Generating PDF...</div>;
}

export default PDFGenerator;
