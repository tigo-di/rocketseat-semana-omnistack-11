import React, { useState } from 'react';
import Header from './Header';


function App() {

  const [counter, setCounter] = useState(0);


  function Increment() {
    setCounter(counter + 1);

  }


  return (
    
    <div>
      <Header>
        Contador: {counter}
      </Header>
      <button onClick={Increment} >Incrementar
      </button >
    </div>

    );
}

export default App;
