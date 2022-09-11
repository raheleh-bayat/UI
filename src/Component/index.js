import { current } from "@reduxjs/toolkit";
import React from "react";
import { useState } from "react";

const Index = ({ number, onDelete }) => {
  const [children, setChildren] = useState("2");

  const removeElemnt = () => {
    setChildren((current) =>
      current.filter((children) => {
        return children.id !== 2;
      })
    );
  };
  return (
    <div className="div-first">
      <div className="div-seconed">
        <p>Children {number} age</p>
      </div>
      <div className="div-last">
        <select className="div-option">
          <option value="volvo">0</option>
          <option value="saab">8</option>
          <option value="opel">9</option>
        </select>
        <i className="bi bi-x-lg "></i>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg container-icon"
          viewBox="0 0 16 16"
          id="1"
          onClick={onDelete}
          value={children}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </div>
    </div>
  );
};
export default Index;
