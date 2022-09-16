import { useState } from "react";
import Container from "../Room ";
import './button.style.js'
import {ButtonAdd} from "./button.style"
const Button = () => {
    const [basicModal, setBasicModal] = useState(false);

    return(
        <div>
             {basicModal && <Container closeModal={setBasicModal}/>}
        <ButtonAdd  onClick={()=>{setBasicModal(true)} }>
          +Add Room
        </ButtonAdd>

        </div>
    )
}
export default Button;