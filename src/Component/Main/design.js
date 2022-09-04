import { Component } from "react";
import { useSelector, useDispatch } from "react-redux";

const Design = (props) => {
  const addproduct = (number) => {
    return {
      type: "ADD_PRODUCT",
      payload: number,
    };
  };

  const decrease = (number) => {
    return {
      type: "DELETE_PRODUCT",
      payload: number,
    };
  };
  const removeproduct = (number) => {
    return {
      type: "REMOVE_PRODUCT",
      payload: number,
    };
  };

  const counter = useSelector((state) => state.product);
  let increase = useDispatch();
  let Decrease = useDispatch();
  let remove = useDispatch();

  return (
    <div>
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
      <div className="header">
        <button type="button" class="btn-add" onclicke="">
          +Add Room
        </button>
      </div>
      <div className="container">
        <div className="container-child">
          <div className="container-child-a">
          <i className="bi bi-x-lg "></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
          </div>
        </div>
        <div className="container-first-div">
          <p>Room1</p>
          <p>adults</p>
          <p>children</p>
        </div>
        <div className="container-seconds-div">
          <div className="container-children-div">
            <button className="container-btn">-</button>
            <p className="container-p">1</p>
            <button className="container-btn">+</button>
          </div>

          <div className="container-second-children-div">
            <button className="container-btn">-</button>
            <p className="container-p">1</p>
            <button className="container-btn">+</button>
          </div>
        </div>
      </div>
      <div className="container-third-div">
        <div className="container-first-div p">
          <p>Child 1 age</p>
          <p>child 2 age</p>
        </div>
        <div className="container-seconds-div">
          <div className="container-second-children-div option">
            
          <select id="cars" className="div-option">
            <option value="volvo">age</option>
            <option value="saab">adult</option>
            <option value="opel">children</option>
          </select>
          <div className="container-icon">
          <i className="bi bi-x-lg"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
            </div>
          </div>

          <div className="container-second-children-div option">
          <select id="cars" className="div-option">
            <option value="volvo">8</option>
            <option value="saab">5</option>
            <option value="opel">7</option>
            <option value="audi">9</option>
          </select>

          <div className="container-icon">
          <i className="bi bi-x-lg"></i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
            </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="footbar"></div>
    </div>
  );
};
export default Design;
