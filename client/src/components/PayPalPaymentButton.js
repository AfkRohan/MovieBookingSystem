import React from 'react';
import { PayPalButton } from 'React-paypal-button-v2';

function PayPalPaymentButton() {
  return (
    <div>
    <PayPalButton
    amount="10.00"
    onSuccess={(details, data) => {
    alert('Payment successful');
    }}
    options={{
    clientId: 'AdxX5Jm6gPp1fqRFvOd-v6cnyrnckqDDBr_hG6rP8A8h6huOFONISAWsDgPYdAJOJzxVgqBtdYPXBcUW',
    }}
    />
    </div>
  )
}

export default PayPalPaymentButton