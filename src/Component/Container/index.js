import { useState } from "react";
import { Div } from "./div";

export const Container = () => {
    const[addDiv , setAddDiv]=useState([]);

    const addProduct = ()=>{
        setAddDiv((addDiv)=>[...addDiv, {id: addDiv.length + 1}]);
    }

  return (
    <div>
    <div className="main">
    
      <a className="menu">
        menu
        <ul className="child">
          <li>#</li>
          <li>#</li>
          <li>#</li>
        </ul>
      </a>
      <a className="menu">
        aboutme
        <ul className="child">
          <li>#</li>
          <li>#</li>
          <li>#</li>
        </ul>
      </a>
      <a className="menu">
        cover
        <ul className="child">
          <li>#</li>
          <li>#</li>
          <li>#</li>
        </ul>
      </a>
      <button onClick={addProduct}>welcome </button>
      
    </div>
    {addDiv.map((item)=>{
            return <Div></Div>
        })}     
        
    </div>
  );
};
