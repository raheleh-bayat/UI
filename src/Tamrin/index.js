import { useState } from "react";
import { Button, Wrapp } from "./list.style.js";
import AddProduct from "./list";
const List = () => {
  const [room, SetRoom] = useState(false);
  const [addRoom, setAddRoom] = useState([]);
  const counter = () => {
    setAddRoom((addRoom) => [...addRoom, { id: addRoom.length + 1 }]);
  };
  return (
    <Wrapp>
      <Button onClick={counter}> Clicke me</Button>

      {room && <AddProduct />}

      {addRoom.map((item) => {
        return <AddProduct />;
      })}
    </Wrapp>
  );
};
export default List;
