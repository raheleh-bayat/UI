import  Header  from "./header";
import "./design.css"
import Container from "./container";
import Footbar from "./footbar";
import Index from "./index";
// import { useState } from "react";

const Design = () => {
  // const[rooms,setrooms]=useState([{},{age:[2,5,8]}]);
 
  return (
    <div>
     <Header/>
     {/* <Container/> */}
     <Footbar/>
     
    </div>
  );
};
export default Design;
