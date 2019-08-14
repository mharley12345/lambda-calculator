import React,{useState} from "react";
import '../../App.css';



const Display = (props) => {
  const [display,setDisplay] = useState(0)
  return (
    <div className="display">
      {display}
         </div>

  );
};



export default Display;