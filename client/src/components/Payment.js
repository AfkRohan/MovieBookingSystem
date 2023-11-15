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
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            value={firstName}
            rules={[
                {
                required:true, 
                message: "Please enter valid FirstName"
                }, 
                {
                    pattern: /[a-zA-Z]+$/,
                    message: "Invalid name"
                }
                ]}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter your first name"
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter your last name"
            rules={
                [{
                required:true, 
                message: "Please enter valid value"
                },
                {
                pattern: /[a-zA-Z]+$/,
                message: "Invalid name"
                }]}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            rules={[{required:true, type:'email', message: "Please enter valid email"}]}
          />
        </label>
        <label>
          Billing Address
          <input
            type="text"
            name="billingAddress"
            value={billingAddress}
            onChange={(e) => setBillingAddress(e.target.value)}
            placeholder="Enter your billing address"
            rules={[{required:true,  message: "Please enter valid Address."}]}
          />
        </label>
        <label>
          Street/City
          <input
            type="text"
            name="streetCity"
            value={streetCity}
            onChange={(e) => setStreetCity(e.target.value)}
            placeholder="Enter your street/city"
            rules={[{required:true, message: "Please enter valid street/City"}]}
          />
        </label>
        <label>
          State
          <input
            type="text"
            name="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Enter your state"
            rules={[{required:true, message: "Please enter valid state"}]}
          />
        </label>
        <label>
          Postal Code
          <input
            type="text"
            name="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Enter your postal code"
            rules={[{required:true, message: "Please enter valid Postal Code"}]}
          />
        </label>
        <label>
          Ticket Quantity
          <input
            type="number"
            name="ticketQuantity"
            value={ticketQuantity}
            onChange={(e) => setTicketQuantity(e.target.value)}
            rules={[{required:true, type:'number', message: "Please enter valid number"}]}
          />
        </label>
        <label>
          CardHolder Name
          <input
            type="text"
            name="cardholdername"
            value={cardholdername}
            placeholder="Enter your Holder Name"
            onChange={(e) => setCardholderName(e.target.value)}
            rules={[
                {
                required:true, 
                message: "Please enter valid FirstName"
                }, 
                {
                    pattern: /[a-zA-Z]+$/,
                    message: "Invalid name"
                }
                ]}
          />
        </label>
        <label>
          Card Number
          <input
            type="text"
            name="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter your card number"
            rules={[{required:true, type:'phone', message: "Please enter valid cardNumber"}]}
          />
        </label>
        <label>
          Expiry Date
          <input
            type="text"
            name="expiryDate"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/YY"
          />
        </label>
        <label>
          CVC
          <input
            type="text"
            name="cvv"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="CVV"
          />
        </label>
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
