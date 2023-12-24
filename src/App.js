import React,{useState} from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [token, setToken] = useState("");

  return (
    <div className="App">
      <Signup setToken={setToken}/>
      <Login setToken={setToken}/>
      <Dashboard token={token}/>
    </div>
  );
}

export default App;


