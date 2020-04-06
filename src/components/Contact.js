import React from 'react';
import './css/Contact.css';






class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online : props.online
    }
  }

  render() {
    return(
      <div className="Contact">
        <div>
          <img className="avatar" src={this.props.avatar} alt={this.props.name}></img>
        </div>
        <div>
          <h4 className="name">{this.props.name}</h4>
          <div className="status" onClick = {event => {
            const newStatus = !this.state.online;
            this.setState({ online: newStatus })}}>
            <div className={this.state.online ? "status-online" : "status-offline"}></div>
            <p className="status-text">
              {this.state.online ? "Online" : "OffLine"}
            </p>
          </div>
        </div>
      </div>
  );
}}

export default Contact;
