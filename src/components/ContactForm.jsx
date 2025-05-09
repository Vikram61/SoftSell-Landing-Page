import React, { useState } from 'react';
import './ContactForm.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {

 const [form,setForm] = useState({
    name:'',
    email:'',
    license:'',
    message:''

 })

  const handleSubmit = (e) => {
     e.preventDefault();
      toast.success('Message sent successfully!');
      setForm({
        name:'',
        email:'',
        license:'',
        message:'',
      })
    }


  return (
    <section className="contact-form-section">
      <h2 className="contact-title">Get in Touch</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name"  />
        
        <input type="email" name="email" placeholder="Email"  />
        <input type="text" name="company" placeholder="Company" />

        <select name="licenseType" >
          <option value="">Select License Type</option>
          <option value="Office">Office Suite</option>
          <option value="Design">Design Tools</option>
          <option value="Development">Development Tools</option>
        </select>
        

        <textarea name="message" placeholder="Your Message" ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};
export default ContactForm;
