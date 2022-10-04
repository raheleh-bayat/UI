import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "react-bootstrap-buttons/dist/react-bootstrap-buttons.css";
import Button from "./Component/Button/index";
import { useState } from "react";
import Modal  from "./Component/Modal";
import "./Component/Style/style.css"
import { Container }  from "./Component/Container/index";
function App() {
  const [basicModal, setBasicModal] = useState(false);
  return (
    <div className="App">
      {!basicModal && (
        <Button
          text="+Add Room"
          onClick={() => {
            setBasicModal(true);
          }}
        />
      )}
    {basicModal && <Modal closeModal={setBasicModal}/>}
   
    {/* <List/> */}
    {/* <Container/> */}
    </div>
  );
}

export default App;
