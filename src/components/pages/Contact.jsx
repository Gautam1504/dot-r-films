import React from 'react'
import './Contact.css'
import { FaPhone, FaEnvelope } from 'react-icons/fa'
import {toast} from 'react-toastify';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4ac70d6a-6577-4dda-a7e6-75a73b11d442");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <div className='contact'>
      <h1>Contact Us</h1>
      <p>Feel free to contact us for any inquiries regarding film production.</p>
    
      <div className="contact-container">
        <div className="contact-details">
          <h2>General Enquiries</h2>
          <p><FaEnvelope/> dotrfilms@gmail.com</p>
          <h2>Production Enquiries</h2>
          <p><FaEnvelope/> dotrfilms@gmail.com</p>
        </div>
        <form className='contact-form' onSubmit={onSubmit}>
         <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder='Name' required />
         </div>
         <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder='Email' required />
         </div>
         <div className="form-group">
           <label htmlFor="description">Description:</label>
          <textarea name="description" id="description" placeholder='Description' required ></textarea>
         </div>
         <button className='submit-button' type='submit'>{result ? result :"Submit"}</button>
       </form>
      </div>
    </div>
  )
}

export default Contact
