import React, { useState } from "react";
import { Room } from "../Room";
import Footer from "./Footer/footer";
import "./modal.style.js";

import { Wrrap, Header, HeaderP, HeaderSVG } from "./modal.style.js";

const Modal = ({ closeModal}) => {
  const [roomList, setRoomList] = useState([{ id: 1, adult: 1, children: 0 }]);
  const addRoom = ()=>{
    setRoomList((roomList) => [...roomList,{ id : roomList.length + 1}])
  };
  const DeleteRoom= (id)=>{
    setRoomList((roomList) => roomList.filter((item) => item.id != id)); 
}

  return (
    <Wrrap>
      <Header>
        <i className="bi bi-x-lg"></i>
        <HeaderSVG
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-x-lg"
          viewBox="0 0 16 16"
          onClick={() => {
            return closeModal(false);
          }}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </HeaderSVG>

        <HeaderP>who is staying</HeaderP>
      </Header>

      {roomList.map((item) => {
        return <Room key={item.id}  KID={item.id}  RemoveProduct={()=>{DeleteRoom(item.id)}} />;
      })}
      <Footer addRoom={addRoom}/>
    </Wrrap>
  );
};
export default Modal;
