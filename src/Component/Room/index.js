import { useState } from "react";
import Index from "../Children/index";
import {RemoveRoom} from '../Modal/remove'
import Modal from "../Modal";
import {
  ContainerRoomp,
  ContainerFirstp,
  ContainerSecondp,
  ContainerFirstDiv,
  ContainerSecondDiv,
  ContainerButton,
  ContainerP,
  RemoveP,
  Wrrap,
} from "./room.style.js";

export const Room = ({RemoveProduct, KID}) => {
  const [adultCount, setAdultCount] = useState(1);
  const [children, setChildren] = useState([]);

  function addChildren() {
    setChildren((children) => [...children, { id: children.length + 1 }]);
  }
  function deleteItem(id) {
    setChildren((children) => children.filter((item) => item.id != id)); 
  }
  

  return (
    <Wrrap>
      <ContainerRoomp>Room1</ContainerRoomp>
      <ContainerFirstp>adults</ContainerFirstp>
      <ContainerSecondp>children</ContainerSecondp>
      
      <ContainerFirstDiv>
      { KID != 1 ?  <RemoveRoom onClick={RemoveProduct}/> :"" }
        <ContainerButton
          onClick={adultCount > 1 ? () => setAdultCount(adultCount - 1) : ""}
        >
          -
        </ContainerButton>

        <ContainerP>{adultCount}</ContainerP>

        <ContainerButton
          onClick={() => {
            setAdultCount(adultCount + 1);
          }}
        >
          +
        </ContainerButton>
      </ContainerFirstDiv>

      <ContainerSecondDiv>
        <ContainerButton>-</ContainerButton>
        <ContainerP>{children.length}</ContainerP>
        <ContainerButton onClick={addChildren}>+</ContainerButton>
      </ContainerSecondDiv>
      {children.map((item) => {
        return <Index number={item.id} onDelete={() => deleteItem(item.id)} />;
      })}
    </Wrrap>
  );
};
