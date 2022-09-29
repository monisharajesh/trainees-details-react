// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Details from './form/login/details';
import Sign from './form/login/sign/sign';

function App() {
 const [login,setLogin] = useState(false);

 const SigninHandler= (login)=>{
setLogin(login);
 }

  return (
    <div className="App">
          {/* <Sign signin ={SigninHandler}/>
          <Details/> */}
          {
            login ? <Details/> : <Sign signin ={SigninHandler}/>
          }

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
