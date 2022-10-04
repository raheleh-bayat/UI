import styled from "styled-components";

export const ButtonAdd = styled.button`
  width: 100%;
  height: 50px;
  background-color:  ${(props) => props.backgrounColor};
  border: 1px solid lightgray;
  border-radius: 7px;
  color: ${(props) => props.Color};
  margin-top: ${(props) => props.marginTop};
  margin-left: 0px;
  margin-right: 0px;
  font-family: rial, Helvetica, sans-serif;
`;

export const Wrrap = styled.div`
@media screen and (max-width: 1220px) and (min-width : 760px)
{
  background: black;
}

`;
