import React, { useState } from 'react';
import Payment from '../../components/Payment';

function PaymentForm(props){
  const [shows] = useState(null);
  return (
    <div className="App">
      <Payment shows = {props.price}>
      </Payment>
    </div>
  );
}

export default PaymentForm;
