import styled from "styled-components";

export const Wrrap = styled.div`
  max-width:100%;
  /* height: 60px; */
  margin: 0 auto;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;
export const WrrapP = styled.p`
  display: flex;
  justify-items: left;
  padding-top: 10px;
  border-left: 1px solid #eff2f6;
  margin-left: 15px;
  font-weight:600;
  font-size:16px;
`;
export const Div =styled.div`
  display:flex;
  justify-content:space-between;
  position:relative;
`;
export const WrrapSelect = styled.select`
  border-radius: 10px;
  width: 100px;
  height: 45px;
  border: 1px solid #eff2f6;
  font-weight:600;
  position:absolute;
  left:1140px;
  bottom:-10px;
`;
export const WrrapIcon = styled.i`
  color: #d83b3b;
  margin: 6px;
  margin-top: 10px;
  font-weight: 600;
  `;
// export const WrrapDiv = styled.div`
//   display: flex;
//   justify-content: right;
// `;
export const WrrapSVG = styled.svg`
  color: #d83b3b;
  margin: 6px;
  margin-top: 10px;
  position: absolute;
  left:1250px;
  bottom:-6px;
`;
