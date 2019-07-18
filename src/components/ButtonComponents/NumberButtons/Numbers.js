import React, {useState} from "react";

//import any components needed

//Import your array data to from the provided data file
import {numbers} from "../../../data";
  const Numbers = () => {
  // STEP 2 - add the imported data to state
  numbers[ 0] = useState(1)
  numbers[ 1] = useState(2)
  numbers[ 2] = useState(3)
  numbers[ 3] = useState(5)
  numbers[ 4] = useState(6)
  numbers[ 5] = useState(4)
  numbers[ 6] = useState(7)
  numbers[ 7] = useState(8)
  numbers[ 8] = useState(9)
  numbers[ 9] = useState(0)
  numbers[ 10] = useState('.')
console.log(Numbers)
  return (
    <div>
      
  {Numbers}
     
     
     
     
         
     });
       
      
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Numbers