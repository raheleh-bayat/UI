import { current } from "@reduxjs/toolkit";
import { useState } from "react";
const Header = () => {
  const[show , setShow]=useState(false);

  const handlerhedear=()=>{
    
  }
  return (
    <div>
      <div className="header">
        <button type="button" className="btn-add" onClick={handlerhedear}>
          +Add Room
        </button>
      </div>
    </div>
  );
};
export default Header;