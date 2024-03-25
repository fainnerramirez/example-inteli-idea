import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {

    const [state, setState] = useState(false);

    useEffect(() => {
        setState(true);
    }, [])


  return (
    <div className="App">
     <h1>Hola Fainner</h1>
    </div>
  );
}

export default App;
