import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import PayPalButton from "./PaypalButton";

const PaypalSubscription = () => {
  const initialOptionsSubscription = {
    "client-id": "test",
    currency: "USD",
    intent: "subscription",
    vault: true
  };

  const createSubscriptionHandler = (data, actions) => {
    return actions.subscription.create({
      plan_id: "P-3RX065706M3469222L5IFM4I"
    });
  };

  const onApproveSubscriptionHandler = (data, actions) => {
    alert("You have successfully created subscription " + data.subscriptionID);
  };

  return (
    <>
     
      <PayPalScriptProvider options={initialOptionsSubscription}>
        <PayPalButton
          createSubscription={createSubscriptionHandler}
          onApprove={onApproveSubscriptionHandler}
        />
      </PayPalScriptProvider>
    </>
  );
};

export default PaypalSubscription;
