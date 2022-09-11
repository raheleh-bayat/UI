import { useState } from "react";
import Container from'../Container'
import Footer from "../Footer";

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
        { basicModal && <Footer/>}
      </div>
      
    </div>
  );
};
export default Header;