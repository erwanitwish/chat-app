import React from 'react';
import './css/Contact.css'

const name = 'Megan Watkins';
const avatar = "https://randomuser.me/api/portraits/women/20.jpg";
const online = true;

function Contact() {
  return(
    <div className="Contact">
      <div>
        <img className="avatar" src={avatar}></img>
      </div>
      <div>
        <h4 className="name">{name}</h4>
        <div className="status">
          {online ? <div className="status-online"></div> : <div className="status-offline"></div>}
          <p className="status-text">
            {online ? "Online" : "OffLine"}
          </p>
        </div>
      </div>
    </div>
);
};


export default Contact;
