import React from 'react'
import './Map.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdAccessAlarm } from "react-icons/md";
const Map = () => {
  return (
     <div className="contact-page">
      <div className="contact-container">
        <div className="contact-left">
          <h1>Get In Touch</h1>
          <p className="subtitle">
            We'd love to hear from you. Reach out with questions, feedback, or
            to book a service.
          </p>

          <div className="contact-item">
            <span className="icon"><BsFillTelephoneFill />
</span>
            <span>9834556681</span>
          </div>

          <div className="contact-item">
            <span className="icon"><CiMail /></span>
            <span>Vedhashree Professional Beauty Parlor and Makeup Studio.com</span>
          </div>

          <div className="contact-item1">
            <span className="icon"><CiLocationOn /></span>
            <span>Bargi, Kumta</span>
          </div>

          <div className="contact-item">
            <span className="icon"><FaInstagram /></span>
            <span>@Vedhashree Professional Beauty Parlor and Makeup Studio</span>
          </div>

          <div className="contact-item">
            <span className="icon"><FaWhatsapp /></span>
            <span className="whatsapp">Chat on WhatsApp</span>
          </div>
        </div>

        <div className="contact-right">
          <div className="timing-card">
            <div className="timing-header">
              <span className="clock"><MdAccessAlarm /></span>
              <h3>Parlor Timings</h3>
            </div>
            <p><strong>Opening:</strong> 10:00 AM</p>
            <p><strong>Closing:</strong> 8:00 PM</p>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Kumta Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30912.03263017594!2d74.39822596289986!3d14.426928356482003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbc2610a796c663%3A0xc214f69a6d77668a!2sKumta%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1771765373770!5m2!1sen!2sin" 
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default Map
