import { Wrrap, Inner, FooterSearch, Footerp , FooterIcon } from "./footer.style";
import {ButtonAdd} from '../Button/button.style'
import Button from '../Button/index'
const Footer = ({number}) => {
  return (
    <Wrrap>
      <Button/>
      <ButtonAdd backgroundColor="blue" marginTop="10px">
        rooms{number}gueset
        <Inner>
          <FooterIcon className="bi bi-search"></FooterIcon>
          <FooterSearch
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </FooterSearch>
        </Inner>
      </ButtonAdd>

      
    </Wrrap>
  );
};
export default Footer;
