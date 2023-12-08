import React from 'react';
import emailjs from '@emailjs/browser';

export const Receipt = () => {

  const sendEmail = () => {
    emailjs.send('service_vclnjup', 'template_po0z8nr', {from_name:"Cinemax",to_name:"Rohan",message:"Booking successful"},'tfD4Wk5uplHhz0rSJ')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  };

  return (
    <button onClick={sendEmail}> Get receipt</button>
  );
};