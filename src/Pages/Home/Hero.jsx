import './Hero.css'
import React, { useState } from "react";

export default function Hero() {
  const [checkout, setCheckOut] = useState(false);

  return (

    <section id="hero">
      <div class="hero-content">
        <h1>Roberto's Heart</h1>
        <p>"Our mission is to support the families and victims of gun violence with healing and assistance through
            mortuary care, legal advocacy, counseling services and more."</p>
        <div className="btn">
          <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="business" value="H5C5UX2ECXE54" />
            <input type="hidden" name="no_recurring" value="1" />
            <input type="hidden" name="currency_code" value="USD" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
        </div>  
      </div>
      <div class="overlay"></div>
    </section>



  );
}