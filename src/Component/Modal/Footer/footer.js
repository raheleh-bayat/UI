import Button from "../../Button/index";
import { Search } from "./search";
const Footer = ({addRoom}) => {

  return (
    <div>
      <Button text="+Add Room" Color="blue" marginTop="20px" onClick={() => addRoom()}/>
      <Search/>
    </div>
  );
};
export default Footer;
