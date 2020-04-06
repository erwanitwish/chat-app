import React from 'react';
import './css/Contact.css';



function Contact(props) {
  return(
    <div className="Contact">
      <div>
        <img className="avatar" src={props.avatar} alt={props.name}></img>
      </div>
      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <div className={props.online ? "status-online" : "status-offline"}></div>
          <p className="status-text">
            {props.online ? "Online" : "OffLine"}
          </p>
        </div>
      </div>
    </div>
);
};


export default Contact;
