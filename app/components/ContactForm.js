'use client'

import  styles from "@/app/contact/contact.module.css"
import { Mulish } from 'next/font/google';
import { useState } from "react";
const mulish = Mulish({
  weight: ['300', '400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
});

const ContactForm = () => {
  const[user, setUser] = useState({
    username:"",
    email:"",
    phone:"",
    message:""
  })
  const [status, setStatus] = useState(null);
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({...prevUser, [name] : value}));
}

  function handleSubmit(){

  }
  
  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}> 
        <label htmlFor="username" className={styles.label}>
          Enter your name
          <input type="text" name="username" id="username" placeholder="Enter your name" className={mulish.className} value={user.username} onChange={handleChange} required autoComplete="off"/>
        </label>
      </div>
      <div className={styles.input_field}> 
        <label htmlFor="email" className={styles.label}>
          Enter your email
          <input type="text" name="email" id="email" placeholder="Enter your email" className={mulish.className} value={user.email} onChange={handleChange} required autoComplete="off"/>
        </label>
      </div>
      <div className={styles.input_field}> 
        <label htmlFor="phone" className={styles.label}>
          Enter your phone
          <input type="text" name="phone" id="phone" placeholder="Enter your phone" className={mulish.className} value={user.phone} onChange={handleChange} required autoComplete="off"/>
        </label>
      </div>
      <div className={styles.input_field}> 
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea type="text" name="message" id="message" rows={5} placeholder="Enter your Message" className={mulish.className} value={user.message} onChange={handleChange} required autoComplete="off"/>
        </label>
      </div>
      <div>
        <button type="submit" className={mulish.className}>Send Message</button>
      </div>
      
    </form>
  )
}

export default ContactForm