import React from "react";

//import any components needed

//Import your array data to from the provided data file
import {operators} from "../../../data"
const Operators = () => {
  // STEP 2 - add the imported data to state
  operators[0].char=Operators('/')
  operators[1].char=Operators('X')
  operators[2].char=Operators('-')
  operators[3].char=Operators('+')
  operators[4].char=Operators('=')

  return (
    <div>
      {Operators('/')}
      {Operators('X')}
      {Operators('-')}
      {Operators('=')}
      {Operators('X')}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Operators