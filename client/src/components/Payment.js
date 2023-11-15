import React, { useState } from 'react';


function Payment(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [billingAddress, setBillingAddress] = useState('');
    const [streetCity, setStreetCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const[cardholdername, setCardholderName]=useState('');  
    const [ticketQuantity, setTicketQuantity] = useState(1);
    const [ticketPrice, setTicketPrice] = useState(10); 
    const [gstPercentage, setGstPercentage] = useState(5); 

  const calculateTotalAmount = () => {
    const subtotal = ticketPrice * ticketQuantity;
    const gstAmount = (subtotal * gstPercentage) / 100;
    const totalAmount = subtotal + gstAmount;
    return totalAmount.toFixed(2);
  };
  

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    console.log('Payment submitted:', {
      firstName,
      lastName,
      email,
      billingAddress,
      streetCity,
      state,
      postalCode,
      cardNumber,
      cvv,
      expiryDate,
      ticketQuantity,
      ticketPrice,
      gstPercentage,
      totalAmount: calculateTotalAmount(),
    });
  };

  return (
   <div className="payment-container">
  <h2>Payment Information</h2>
  <form className='formclass' onSubmit={handlePaymentSubmit}>
    <div className="form-row">
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="billingAddress">Billing Address</label>
        <input
          type="text"
          id="billingAddress"
          name="billingAddress"
          value={billingAddress}
          onChange={(e) => setBillingAddress(e.target.value)}
          placeholder="Enter your billing address"
        />
      </div>
      <div className="form-group">
        <label htmlFor="streetCity">Street/City</label>
        <input
          type="text"
          id="streetCity"
          name="streetCity"
          value={streetCity}
          onChange={(e) => setStreetCity(e.target.value)}
          placeholder="Enter your street/city"
        />
      </div>
      <div className="form-group">
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="Enter your state"
        />
      </div>
      <div className="form-group">
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          placeholder="Enter your postal code"
        />
      </div>
      <div className="form-group">
        <label htmlFor="ticketQuantity">Ticket Quantity</label>
        <input
          type="number"
          id="ticketQuantity"
          name="ticketQuantity"
          value={ticketQuantity}
          onChange={(e) => setTicketQuantity(e.target.value)}
        />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="cardholdername">CardHolder Name</label>
      <input
        type="text"
        id="cardholdername"
        name="cardholdername"
        value={cardholdername}
        placeholder="Enter your Holder Name"
        onChange={(e) => setCardholderName(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="cardNumber">Card Number</label>
      <input
        type="text"
        id="cardNumber"
        name="cardNumber"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="Enter your card number"
      />
    </div>
    <div className="form-group">
      <label htmlFor="expiryDate">Expiry Date</label>
      <input
        type="text"
        id="expiryDate"
        name="expiryDate"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        placeholder="MM/YY"
      />
    </div>
    <div className="form-group">
      <label htmlFor="cvv">CVV</label>
      <input
        type="text"
        id="cvv"
        name="cvv"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        placeholder="CVV"
      />
    </div>
    <div className="payment-details">
      <p>Ticket Price: ${ticketPrice.toFixed(2)}</p>
      <p>Quantity: {ticketQuantity}</p>
      <p>GST ({gstPercentage}%): ${((ticketPrice * ticketQuantity * gstPercentage) / 100).toFixed(2)}</p>
      <p>Total Payment: ${calculateTotalAmount()}</p>
    </div>
    <button type="submit">Pay Now</button>
  </form>
</div>

  );
};

export default Payment;
