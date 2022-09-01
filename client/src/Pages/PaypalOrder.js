import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import PayPalButton from "./PaypalButton";

const PaypalOrder = () => {
  const initialOptions = {
    "client-id": "AbivnN3s5tryHPhqQAchiKS3XsBLzQjj0OSpGg73RsvemklguSs_Z2hcv5zk5doxIDcI70RX92EowVxj",
    "client-secret": "EBfx9b1wflNDEIHw97lVSMhExsD4gYFlzI-ouYAkhy7r2Ae0ADXP0NrKhkzWonT7Xazjt7wpR6H-PP_g",
    currency: "CAD",
    intent: "capture"
  };

  const createOrderHandler = (data, actions) => {
    // Set up the transaction
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "5"
          }
        }
      ]
    });
  };

  const onApproveHandler = (data, actions) => {
    // This function captures the funds from the transaction.
    return actions.order.capture().then(function (details) {
      // This function shows a transaction success message to your buyer.
      alert("Transaction completed by " + details.payer.name.given_name);
    });
  };

  return (
    <>
     
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButton
          createOrder={createOrderHandler}
          onApprove={onApproveHandler}
        />
      </PayPalScriptProvider>
    </>
  );
};

export default PaypalOrder;
