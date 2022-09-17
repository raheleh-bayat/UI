import { useState } from "react";
import Container from "../Room ";
import './button.style.js'
import {ButtonAdd} from "./button.style"
const Button = () => {
    const [basicModal, setBasicModal] = useState(false);

    return(
        <div>
        {!basicModal ?  <ButtonAdd  backgrounColor= "#eff2f6" onClick={()=>{setBasicModal(true)} }>
          +Add Room
        </ButtonAdd> : ""}
       
        {basicModal && <Container closeModal={setBasicModal}/>}
        </div>
    )
}
export default Button;