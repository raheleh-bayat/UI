
export default function Reducer(state=0 , action){
    if(action.type == "ADD_PRODUCT"){
        return ++state
    }
    if(action.type == "DELETE_PRODUCT"){
        return --state;
    }
    
  
  return state;
    }



// let rooms = [];
// const[room,setRooms]=useState([
//     {adults:1 , children:[5,7,8]}
// ]);