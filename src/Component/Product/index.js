import React from "react";

const Index = () => {
  return (
  
<div className="div-p">
  <div className="container">
<div className="row justify-content-between">
    <div className="col-4">
    <p>Child age</p>
    </div>
    <div className="col-4">
      {/* <div className="container-icon"> */}
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
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
        </div>
    </div>
  </div>

   </div>



  );
};
export default Index;
