import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'react-bootstrap-buttons/dist/react-bootstrap-buttons.css';
// import Index from './Component/index';
// import Container from './Component/Room ';
import Button from "./Component/Button/index"
// import {Button,ButtonLable} from './Component/Button.style'



function App() {
  return (
    <div className="App">
      {/* <Index/> */}
      <Button/>
      {/* <Button backgroundColor="red"> <ButtonLable>salam</ButtonLable></Button>
      <Button backgroundColor="green"> salam </Button>
      <Button backgroundColor="blue"> salam </Button> */}
    </div>
  );
}

export default App;
