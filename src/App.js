import React from 'react';
import ProfileCard from './ProfileCard';
import Alexa from './images/alexa.png';
import Cortona from './images/cortana.png';
import Siri from './images/siri.png';

function App() {
  return (
    <div className="Procontainer">
    
        
        <ProfileCard title ='alexa' image= {Alexa} designation='architect'/>
        <ProfileCard title ='cortona' image= {Cortona} designation='UI Developer'/>
        <ProfileCard title ='siri' image= {Siri} designation='UX designer'/>
        
     
    </div>
  );
}

export default App;
