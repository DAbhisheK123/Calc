import React,{useState} from 'react';
import Button from '@mui/material/Button';
import './App.css';


function App() {
const [result,setResult]=useState("");
const clicked=(event)=>{
  
   setResult(result.concat(event.target.value))
   
}
const calculate=()=>{
  try{setResult(eval(result).toString());}
  catch(err){setResult(result)} 
}
const clear=()=>{
  setResult("");
}
const delt=()=>{
setResult(result.slice(0,-1))
}
const buttonStyles={
 
  margin: "4px",
  color:"#FF105E",
  
  //margin-top:"8px",
  background: "rgba(236, 240, 237, 0.4)",
  border: "1px solid rgba(34,36,38,.15)"
}
const equalbuttonStyles={
 
  margin: "4px",
  color:"green",
  
  //margin-top:"8px",
  background: "rgba(236, 240, 237, 0.4)",
  border: "1px solid rgba(34,36,38,.15)"
}

  return (
  
    <div className="calc">
            <input  type="text" id="inputtext" placeholder="0" value={result}/>
            <Button sx={buttonStyles} className='btn' onClick={clear}>C</Button>
            <Button sx={buttonStyles} className='btn' onClick={delt}>DEL</Button>
            <Button sx={buttonStyles} className='btn' value={"%"} onClick={clicked}>%</Button>
            <Button sx={buttonStyles} className='btn' value={"/"} onClick={clicked}>/</Button>
            <Button sx={buttonStyles} className='btn' value={7} onClick={clicked}>7</Button>
            <Button sx={buttonStyles} className='btn' value={8} onClick={clicked}>8</Button>
            <Button sx={buttonStyles} className='btn' value={9} onClick={clicked}>9</Button>
            <Button sx={buttonStyles} className='btn' value={"*"} onClick={clicked}>*</Button>
            <Button sx={buttonStyles} className='btn' value={4} onClick={clicked}>4</Button>
            <Button sx={buttonStyles} className='btn' value={5} onClick={clicked}>5</Button>
            <Button sx={buttonStyles} className='btn' value={6} onClick={clicked}>6</Button>
            <Button sx={buttonStyles} className='btn' value={"-"} onClick={clicked}>-</Button>
            <Button sx={buttonStyles} className='btn' value={1} onClick={clicked}>1</Button>
            <Button sx={buttonStyles} className='btn' value={2} onClick={clicked}>2</Button>
            <Button sx={buttonStyles} className='btn' value={3} onClick={clicked}>3</Button>
            <Button sx={buttonStyles} className='btn' value={"+"} onClick={clicked}>+</Button>
            <Button sx={buttonStyles} className='btn' value={"."} onClick={clicked}>.</Button>
            <Button sx={buttonStyles} className='btn' value={0} onClick={clicked}>0</Button>
            <Button sx={equalbuttonStyles} className='btn equal' onClick={calculate}>=</Button>
    </div>
  );
}

export default App;
