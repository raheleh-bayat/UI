import { useState } from "react";
import Container from "../Container";
import './button.css'
const Button = () => {
    const [basicModal, setBasicModal] = useState(false);

    return(
        <div>
             {basicModal && <Container closeModal={setBasicModal}/>}
        <button  className="btn-add" onClick={()=>{setBasicModal(true)} }>
          +Add Room
        </button>
        </div>
    )
}
export default Button;