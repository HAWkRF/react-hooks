import { useState } from 'react';
import useInput from './hooks/useInput';

function App() {

const username = useInput('');
const password = useInput('');

  

  return (
    <div>
          <input {...username} type= "text" placeholder='Username'></input>
          <input {...password} type= "text" placeholder='password'></input>
          <button onClick={()=> console.log(username.value, password.value)}>Click</button>
    </div>
  );
}

export default App;
