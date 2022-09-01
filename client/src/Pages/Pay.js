import React from "react";
import PaypalOrder from "./PaypalOrder";
import PaypalSubscription from "./PaypalSubscription";

import "./styles.css";

export default function Pay() {
  return (
    <div className="App">
   
<h1 style={{color: '#FFFFFF', marginTop:200, textAlign: 'center', margin: 70}}>In Order To Post Ads, You need to pay a one-time fee of 5 CAD$.</h1>
      <PaypalOrder />
    
    </div>
  );
}
