import React from 'react';
import '../css/ContactUs.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiry: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_1nh199j', 'template_kc6mbnb', formData, 'yhsy3_WX92YhnZkdE')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send the message, please try again.");
      });
  };


  return (
    <div id='contactus' className="contact-container">
      <div className="contact-info">
        {/* Your contact info here */}
      </div>
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="inquiry"
            placeholder="Inquiry"
            required
            value={formData.inquiry}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
