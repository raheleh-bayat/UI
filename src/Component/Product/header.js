import { useState } from "react";
import Container from'./container'

const Header = () => {
  const [basicModal, setBasicModal] = useState(false);
  const showtoggle=()=>{setBasicModal(true)};
  return (
    <div>
      <div className="header">
        <button type="button" className="btn-add" onClick={showtoggle}>
          +Add Room
        </button>
      </div>
      {basicModal && <Container closeModal={setBasicModal}/>}
    </div>
  );
};
export default Header;