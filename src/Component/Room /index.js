import React from "react";
import { useState } from "react";
import Index from "../Children/index";
import Footer from '../Footer/index'
import "./room.style.js";
import {
  Wrrap,
  Header,
  ContainerRoomp,
  ContainerFirstp,
  ContainerSecondp,
  ContainerFirstDiv,
  ContainerSecondDiv,
  ContainerButton,
  ContainerP,
  HeaderP,
  HeaderSVG
} from './room.style.js'

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
            closeModal(false);
          }}
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </HeaderSVG>

        <HeaderP>who is staying</HeaderP>
      </Header>

      <ContainerRoomp>Room1</ContainerRoomp>
      <ContainerFirstp>adults</ContainerFirstp>
      <ContainerSecondp>children</ContainerSecondp>

      <ContainerFirstDiv>

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
        <ContainerButton onClick={addChildren}>
          +
        </ContainerButton>

      </ContainerSecondDiv>
      {children.map((item) => {
        return <Index number={item.id} onDelete={() => deleteItem(item.id)} />;
      })}
      
    </Wrrap>
   
   
  );
};
export default Container;
