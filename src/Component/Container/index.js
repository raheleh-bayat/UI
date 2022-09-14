import React from "react";
import { useState } from "react";
import Index from "../Children/index";
import Header from "../Header";
import './container.css'

const Container = () => {
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
      
        <p className="container-room-p">Room1</p>
        <p className="container-first-p">adults</p>
        <p className="container-second-p">children</p>

        <div className="container-first-div">
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
        <div className="container-second-div">
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

      {children.map((item) => {
        return <Index number={item.id} onDelete={() => deleteItem(item.id)} />;
      })}
    </div>
  );
};
export default Container;
