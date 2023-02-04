import Button from "../../Button/index";
import { Search } from "./search";
const Footer = ({addRoom, totalCounter}) => {

  return (
    <div>
      <Button text="+Add Room" Color="blue" marginTop="20px" onClick={() => addRoom()}/>
      <Search totalCounter={totalCounter}/>
    </div>
  );
};
export default Footer;
