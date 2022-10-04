import { RemoveP } from "./modal.style";
export const RemoveRoom = (props) => {
  return (
    <>
      <RemoveP onClick={() => props.onClick()}>Remove room</RemoveP>
    </>
  );
};
