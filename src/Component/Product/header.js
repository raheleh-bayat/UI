import { useState } from "react";
import Container from'./container'
import Footbar from "./footbar";

const Header = () => {
  const [basicModal, setBasicModal] = useState(false);
  
  // const showtoggle=()=>{setBasicModal(true)};
  return (
    <div>
      {basicModal && <Container closeModal={setBasicModal}/>}

      <div className="header">
        <button  className="btn-add" onClick={()=>{setBasicModal(true)}}>
          +Add Room
        </button>
        { basicModal && <Footbar/>}
      </div>
      
    </div>
  );
};
export default Header;