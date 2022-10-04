import styled from "styled-components";

export const Wrrap = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1200px) and (min-width : 760px)
{
  margin-left: 40px;
  padding-left: 40px;
}
`;
export const WrrapP = styled.p`
  display: flex;
  justify-items: left;
  align-items: center;
  padding-top: 10px;
  border-left: 1px solid #eff2f6;
  margin-left: 15px;
`;
export const WrrapSelect = styled.select`
  border-radius: 10px;
  width: 100px;
  height: 45px;
  border: 1px solid #eff2f6;
  display: flex;
  justify-items: right;
  align-items: center;
  margin-left: 1125px;
  @media screen and (max-width: 1200px) and (min-width : 760px)
{
  margin-left: 495px;
}
`;
export const WrrapIcon = styled.i`
  color: #d83b3b;
  display: flex;
  justify-items: right;
  align-items: center;
  margin: 6px;
  margin-top: 10px;
`;
export const WrrapDiv = styled.div`
  display: flex;
  justify-content: right;
`;
export const WrrapSVG = styled.svg`
  color: #d83b3b;
  display: flex;
  justify-items: right;
  align-items: center;
  margin: 6px;
  margin-top: 10px;
`;
