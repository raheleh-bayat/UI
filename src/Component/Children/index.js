import React from "react";
import { useState } from "react";

import {
  Wrrap,
  WrrapP,
  WrrapSelect,
  WrrapDiv,
  WrrapSVG,
  WrrapIcon
} from './children.style.js'

const Index = ({ number, onDelete }) => {

  const [getValue , setGetValue] = useState([{value : ""}]);

  const getData = (ev) =>{
    setGetValue((getValue) => [...getValue] , {value: ev.target.value});
  }
  console.log(getData);
  
  return (
      <Wrrap>
        <WrrapP>Children {number} age</WrrapP>
        <WrrapDiv>
        <WrrapSelect value={getValue.value}>
          <option value="0">0</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </WrrapSelect>
        <WrrapIcon className="bi bi-x-lg"></WrrapIcon>
        <WrrapSVG
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
          id="1"
          onClick={onDelete}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </WrrapSVG>
        </WrrapDiv>
    </Wrrap>
  );
};
export default Index;
