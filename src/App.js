import React, {useState} from 'react';

import './App.css';

function App() {
  const [numberOfFruits, setNumberOfFruits] = useState({bananas: 0, apples: 3, peaches: 2})
  const [message, setMessage] = useState( '' );
  const [Light, setLight] = useState(false);
  return (
    <div className={`Box ${Light ? 'day' : 'dark'}`}>
      <input
         type="text"
         value={message}
         placeholder="Enter a message"
         onChange={e =>  setMessage(e.target.value)} />
      <p>{message}</p>
  <p>Bananas count: {numberOfFruits.bananas} Apple count : {numberOfFruits.apples}</p>
     <button onClick={() => setNumberOfFruits({ ...numberOfFruits, bananas:numberOfFruits.bananas+1 })}>Banana</button> 
     <button onClick={() => setNumberOfFruits({ ...numberOfFruits, apples:numberOfFruits.apples+1 })}>Apple</button> 
   <br/>
   <h2>Button for Light</h2>
   <button onClick={() => setLight(!Light) }>Light On/Off</button> 
<br/>
   <h3>{Light ?  'Light on': 'Light off'} </h3>
    </div>
    
  );
}

export default App;
