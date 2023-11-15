import Header from '../../components/Header';
import Footer from '../../components/Footer';
import React from 'react';

const PaymentSuccess = () => {
  return (
    <>
      <Header></Header>
      <div className="payment-success-container">
       <h1 className='payment'>Payment Successful !</h1>
      </div>
       <div><h3>Enjoy Your Movie !!</h3></div>
      <Footer></Footer>
    </>
  );
};

export default PaymentSuccess;