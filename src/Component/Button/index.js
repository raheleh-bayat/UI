import "./button.style.js";
import { ButtonAdd , Wrrap} from "./button.style";

const Button = (props) => {
  return (
    <Wrrap>
      <ButtonAdd
        backgrounColor="#eff2f6"
        Color=" rgb(12, 99, 250)"
        onClick={() => {
          props.onClick();
        }}
      >
        {props.text}
      </ButtonAdd> 
    </Wrrap>
  );
};
export default Button;
