import React from "react";
import { useState } from "react";
import Index from "../index";

const Container = ({ closeModal }) => {
  const [adultCount, setAdultCount] = useState(1);
  const [children, setChildren] = useState([]);

  function addChildren() {
    setChildren((children) => [...children, { id: children.length + 1 }]);
  }

  function deleteItem(id) {
    setChildren((children) => children.filter((item) => item.id != id));
  }

  return (
    <div className="container">
      <div className="container-child">
        <div className="container-child-a">
          <div
            className="container-first-btn"
            onClick={() => {
              closeModal(false);
            }}
          >
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
      </div>
      <div className="container-first-div">
        <p>Room1</p>
        <p>adults</p>
        <p className="container-p">children</p>
      </div>
      <div className="container-seconds-div">
        <div className="container-children-div">
          <button
            className="container-btn"
            onClick={adultCount > 1 ? () => setAdultCount(adultCount - 1) : ""}
          >
            -
          </button>
          <p className="container-p">{adultCount}</p>
          <button
            className="container-btn"
            onClick={() => {
              setAdultCount(adultCount + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="container-second-children-div">
          <button
            className="container-btn"
          >
            -
          </button>
          <p className="container-p">{children.length}</p>
          <button className="container-btn" onClick={addChildren}>
            +
          </button>
        </div>
        <div></div>
      </div>

      {children.map((item) => {
        return <Index number={item.id} onDelete={() => deleteItem(item.id)} />;
      })}
    </div>
  );
};
export default Container;
