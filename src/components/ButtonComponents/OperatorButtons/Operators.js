import React, {useState} from "react";
import OperatorButton from './OperatorButton';
import '../../../App.css'
//import any components needed

import {operators} from '../../../data';


//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state

  const [calcOperators, setOperator] = useState(operators);

  return (
    <div className='operDiv'>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      

{calcOperators.map((operator, index) => <OperatorButton key={index} operator={operator} /> )}



    </div>
  );
};


export default Operators;