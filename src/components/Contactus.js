import React from 'react';
import '../css/ContactUs.css';

export default function ContactUs() {
  return (
    <div id='contactus' className="contact-container">
      <div className="contact-info">
        <h1>BRIGHTSUN MARINE PTE LTD</h1>
        <h2>Workshop & Office</h2>
        <p>No 9, Tuas Ave 8, Singapore 639 224</p>
        <h2>Call us</h2>
        <p>Tel: +65 68634001 (Office)</p>
        <p>Sales: +65 68632575 (DID), +65 8189 5059 (Mobile)</p>
        <p>Fax: +65 68633521</p>
        <h2>Email us</h2>
        <p>sales@brightsun.com.sg</p>
        <p>engine@brightsun.com.sg</p>
        <p>commercial@brightsun.com.sg</p>
        <p>sales@marsmarine.com.sg</p>
        <p>sales@vidhul.com.sg</p>
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Inquiry" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
