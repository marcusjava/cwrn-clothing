import React from "react";
import StripeCheckout from "react-stripe-checkout";

// import { Container } from './styles';

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishKey =
    "pk_test_51JF1DdIZb7J9bn36SN6XXK45SbkTUnGatTWvzhfocSaqUQCsWYfCAMFI8KEsv9HQ9iNOLaHoJEx2st5JdJccXjBh00lOLgndiY";

  const onToken = (token) => {
    console.log(token);
    alert("Payment success!");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CWRN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price} `}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
}

export default StripeButton;
