import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-buttons/dist/react-bootstrap-buttons.css";
import Button from "./Component/Button/index";
import { useState } from "react";
import Modal  from "./Component/Modal";
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
