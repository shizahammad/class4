import React, {useState} from 'react';

import './App.css';

function App() {
  const [numberOfFruits, setNumberOfFruits] = useState({bananas: 0, apples: 3, peaches: 2})

  return (
    <div className="App">
      
  <p>Bananas count: {numberOfFruits.bananas} Apple count : {numberOfFruits.apples}</p>
     <button onClick={() => setNumberOfFruits({ ...numberOfFruits, bananas: 2 })}>Banana</button> 
     <button onClick={() => setNumberOfFruits({ ...numberOfFruits, apples: 4 })}>Apple</button> 
    </div>
  );
}

export default App;
