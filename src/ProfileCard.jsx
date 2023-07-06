import React from 'react';
import App from './App.css';
function ProfileCard(props) {
  return (
    <div className="card">
      <img src={props.image}/>
      <div className='container'>
      <div>{props.title}</div>
      <p>{props.designation}</p>
      </div>
    </div>
  );
}

export default ProfileCard;