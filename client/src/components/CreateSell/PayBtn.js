import React from 'react';
import { CgEnter } from 'react-icons/cg';
import { PayPalButton } from "react-paypal-button-v2";
class PayPalBtn extends React.Component {
    render() {
      const { amount, onSuccess, currency } = this.props;
        return (
          <div className="App">
            <PayPalButton
              amount={amount}
              currency={currency}
              onSuccess={(details, data) => onSuccess(details, data)}
              options={{
                clientId: "AR0CfORtExg1IHae2vPab_oc5Buy41qAOsGcYJxvebQPPEC33E8mMnN-4WCKYsJHUBSJE2WxaNyW7U6D"
              }}
          />
          </div>
        );
    }
}
export default PayPalBtn;