import logo from './logo.svg';
import './App.css';
import {Userform  } from "./component/userform/userform";

function App() {
  return ( //JSX
    <div className="App">
      <Userform lable="first name" color='white'></Userform>
    </div>
  );
}

export default App;
