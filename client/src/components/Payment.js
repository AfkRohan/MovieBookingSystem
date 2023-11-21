import React,{useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Payment(props) {
  const location = useLocation();
  const { ticketQuantity } = location.state || { ticketQuantity: 0 };
  
  console.log('Ticket Quantity:', ticketQuantity); 
  const shows = props.shows;
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [streetCity, setStreetCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholdername, setCardholderName] = useState("");
  const initialOptions = {
    clientId: "AdxX5Jm6gPp1fqRFvOd-v6cnyrnckqDDBr_hG6rP8A8h6huOFONISAWsDgPYdAJOJzxVgqBtdYPXBcUW",
    currency: "USD",
    intent: "capture",
};
  const [ticketPrice, setTicketPrice] = useState(
    props.shows ? props.shows.price : 0
  );
  const [gstPercentage, setGstPercentage] = useState(5);
  const [firstNameError, setFirstNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [billingAddressError, setBillingAddressError] = useState("");
  const [streetCityError, setStreetCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");

  
  const handlePostalCodeChange = (value) => {
    const postalCodeRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/; 

    if (value.trim() === "") {
      setPostalCodeError("Postal Code is required");
    } else if (!postalCodeRegex.test(value)) {
      setPostalCodeError("Enter a valid Canadian postal code (e.g., A1A 1A1)");
    } else {
      setPostalCodeError("");
    }
    setPostalCode(value);
  };

  const handleStateChange = (value) => {
    if (value.trim() === "") {
      setStateError("State is required");
    } else {
      setStateError("");
    }
    setState(value);
  };

  const handleStreetCityChange = (value) => {
    if (value.trim() === "") {
      setStreetCityError("Street/City is required");
    } else {
      setStreetCityError("");
    }
    setStreetCity(value);
  };

  const handleBillingAddressChange = (value) => {
    if (value.trim() === "") {
      setBillingAddressError("Billing Address is required");
    } else if (value.trim().length < 5) {
      setBillingAddressError("Billing Address should be at least 5 characters");
    } else {
      setBillingAddressError("");
    }
    setBillingAddress(value);
  };

  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: 20,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
      console.log("Order successful . Your order id is--", orderID);
    }
  }, [orderID, success]);

  const calculateTotalAmount = () => {
    const subtotal = ticketPrice * ticketQuantity;
    const gstAmount = (subtotal * gstPercentage) / 100;
    const totalAmount = subtotal + gstAmount;
    return totalAmount.toFixed(2);
  };

  const handleFirstNameChange = (value) => {
    const alphabeticRegex = /^[a-zA-Z]+$/; 

    if (value.trim() === "") {
      setFirstNameError("First Name is required");
    } else if (!alphabeticRegex.test(value)) {
      setFirstNameError("First Name should contain only alphabetic characters");
    } else {
      setFirstNameError("");
    }
    setFirstName(value);
  };

  const handleLastNameChange = (value) => {
    const alphabeticRegex = /^[a-zA-Z]+$/; 

    if (value.trim() === "") {
      setLastNameError("Last Name is required");
    } else if (!alphabeticRegex.test(value)) {
      setLastNameError("Last Name should contain only alphabetic characters");
    } else {
      setLastNameError("");
    }
    setLastName(value);
  };

  const handleEmailChange = (value) => {
    if (value.trim() === "") {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
    setEmail(value);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    console.log("Payment submitted:", {
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
      <h2>Ticket Payment Information</h2>
      <form
        action="/paymentsuccess"
        className="formclass"
        onSubmit={handlePaymentSubmit}
      >
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => handleFirstNameChange(e.target.value)}
              onBlur={() => {
                const alphabeticRegex = /^[a-zA-Z]+$/;
                if (firstName.trim() === "") {
                  setFirstNameError("First Name is required");
                } else if (!alphabeticRegex.test(firstName)) {
                  setFirstNameError(
                    "First Name should contain only alphabetic characters"
                  );
                } else {
                  setFirstNameError("");
                }
              }}
              placeholder="Enter your first name"
            />
            {firstNameError && (
              <span
                style={{ color: "red", fontSize: "14px", marginTop: "5px" }}
              >
                {firstNameError}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => handleLastNameChange(e.target.value)}
              onBlur={() => {
                const alphabeticRegex = /^[a-zA-Z]+$/; 
                if (lastName.trim() === "") {
                  setLastNameError("Last Name is required");
                } else if (!alphabeticRegex.test(lastName)) {
                  setLastNameError(
                    "Last Name should contain only alphabetic characters"
                  );
                } else {
                  setLastNameError("");
                }
              }}
              placeholder="Enter your last name"
            />
            {lastNameError && (
              <span
                style={{ color: "red", fontSize: "14px", marginTop: "5px" }}
              >
                {lastNameError}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              onBlur={() => {
                if (email.trim() === "") {
                  setEmailError("Email is required");
                } else if (!/\S+@\S+\.\S+/.test(email)) {
                  setEmailError("Invalid email format");
                } else {
                  setEmailError("");
                }
              }}
              placeholder="Enter your email"
            />
            {emailError && (
              <span
                style={{ color: "red", fontSize: "14px", marginTop: "5px" }}
              >
                {emailError}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="billingAddress">Billing Address</label>
            <input
              type="text"
              id="billingAddress"
              name="billingAddress"
              value={billingAddress}
              onChange={(e) => handleBillingAddressChange(e.target.value)}
              onBlur={() => {
                if (billingAddress.trim() === "") {
                  setBillingAddressError("Billing Address is required");
                } else if (billingAddress.trim().length < 5) {
                  setBillingAddressError(
                    "Billing Address should be at least 5 characters"
                  );
                } else {
                  setBillingAddressError("");
                }
              }}
              placeholder="Enter your billing address"
            />
            {billingAddressError && (
              <span
                style={{ color: "red", fontSize: "14px", marginTop: "5px" }}
              >
                {billingAddressError}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="streetCity">City</label>
            <input
              type="text"
              id="streetCity"
              name="streetCity"
              value={streetCity}
              onChange={(e) => handleStreetCityChange(e.target.value)}
              onBlur={() => {
                if (streetCity.trim() === "") {
                  setStreetCityError("City is required");
                } else {
                  setStreetCityError("");
                }
              }}
              placeholder="Enter your city"
            />
            {streetCityError && (
              <span
                style={{ color: "red", fontSize: "14px", marginTop: "5px" }}
              >
                {streetCityError}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="state">Province</label>
            <input
              type="text"
              id="state"
              name="state"
              value={state}
              onChange={(e) => handleStateChange(e.target.value)}
              onBlur={() => {
                if (state.trim() === "") {
                  setStateError("Province is required");
                } else {
                  setStateError("");
                }
              }}
              placeholder="Enter your province"
            />
            {stateError && (
              <span
                style={{ color: "red", fontSize: "14px", marginTop: "5px" }}
              >
                {stateError}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={postalCode}
              onChange={(e) => handlePostalCodeChange(e.target.value)}
              onBlur={() => {
                const postalCodeRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/; 
                if (postalCode.trim() === "") {
                  setPostalCodeError("Postal Code is required");
                } else if (!postalCodeRegex.test(postalCode)) {
                  setPostalCodeError(
                    "Enter a valid Canadian postal code (e.g., A1A 1A1)"
                  );
                } else {
                  setPostalCodeError("");
                }
              }}
              placeholder="Enter your postal code"
            />
            {postalCodeError && (
              <span
                style={{ color: "red", fontSize: "14px", marginTop: "5px" }}
              >
                {postalCodeError}
              </span>
            )}
          </div>
          
          <div className="form-group">
          <label htmlFor="ticketQuantity">Ticket Quantity</label>
        <input
          type="number"
          id="ticketQuantity"
          name="ticketQuantity"
          value={ticketQuantity}
          readOnly 
        />
      </div>
    </div>

    <div className="payment-details">
      <p>Ticket Price: ${ticketPrice.toFixed(2)}</p>
      <p>Quantity: {ticketQuantity}</p>
      <p>GST ({gstPercentage}%): ${((ticketPrice * ticketQuantity * gstPercentage) / 100).toFixed(2)}</p>
      <p>Total Payment: ${calculateTotalAmount()}</p>
    </div>
    {/* <button type="submit">Pay Now</button> */}
     <PayPalScriptProvider options={initialOptions}>  
        <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={createOrder}
        onApprove={onApprove}
        />
      </PayPalScriptProvider>
  </form>
</div>
  );}
export default Payment;
