import React, { useState } from "react";
import'./calculator.css';

function Calculator(){
  const[display,setDisplay]=useState('')
 const haldleclick=(value)=>{
    setDisplay(display + value)
 }
 const calculateResult = () =>{
    try{
        const result = eval(display);
        setDisplay(result);
    }catch(error){
        setDisplay('Invalid Entry')
    }
 }
 const clearResult=() =>{
    setDisplay('')
 }
const clearSingleResult =()=>{
    setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
}
const percentage=()=>{
    try{
        const result=eval(display)/100;
        setDisplay(result.toString())
    }catch(error){
        setDisplay('Invalid Input')
    }
}
const oneByX=()=>{
    try{
       const currentVariable=eval(display);
       if(currentVariable!==0)
       {
        const result=1/currentVariable;
        setDisplay(result.toString());
       }
       else{
        setDisplay('Invalid Input')
       }
    }catch(error){
        setDisplay('Invalid Input')
    }
}
    const square=()=>{
        try {
            const currentValue = parseFloat(display);
            const result = currentValue * currentValue;
            setDisplay(result.toString());
          } catch (error) {
            setDisplay('Invalid Input');
          }
        
    }
    const calculateSquareRoot = () => {
        try {
          const currentValue = parseFloat(display);
          if (currentValue >= 0) {
            const result = Math.sqrt(currentValue);
            setDisplay(result.toString());
          } else {
            setDisplay('Invalid Input');
          }
        } catch (error) {
          setDisplay('Invalid Input');
        }
      };
      const clearEntry = () => {
        setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
      };
      const toggleSign = () => {
        if (display !== "") {
          let currentValue = parseFloat(display);
                currentValue *= -1;
                setDisplay(currentValue.toString());
        }
      };
      
      
 
    return(
        <div className="calc">
            <div className="section">
                
                <div className="display">
                <div className="head"><h6>Calculator</h6></div>
                    <h5>{display}</h5>
                    <h2>{display}</h2> 
                    </div>
                    <div className="buttons">
                        <div className="row">
                            <button className="col" onClick={percentage}>%</button>
                            <button className="col"onClick={clearEntry}>CE</button>
                            <button className="col" onClick={clearResult}>C</button>
                            <button className="col" onClick={clearSingleResult}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace" viewBox="0 0 16 16">
  <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z"/>
  <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z"/>
</svg></button>
</div>
                    <div className="row">
                            <button className="col" onClick={oneByX}>1/x</button>
                            <button className="col" onClick={square}>x²</button>
                            <button className="col"onClick={calculateSquareRoot}>2√x</button>
                            <button className="col" onClick={()=>haldleclick('/')}>&divide;</button>

                        </div>
                        <div className="row">
                            <button className="col" onClick={()=>haldleclick('7')}>7</button>
                            <button className="col" onClick={()=>haldleclick('8')}>8</button>
                            <button className="col" onClick={()=>haldleclick('9')}>9</button>
                            <button className="col"onClick={()=>haldleclick('*')}>&#215;</button>
                        </div>
                        <div className="row">
                            <button className="col" onClick={()=>haldleclick('4')}>4</button>
                            <button className="col" onClick={()=>haldleclick('5')}>5</button>
                            <button className="col" onClick={()=>haldleclick('6')}>6</button>
                            <button className="col"onClick={()=>haldleclick('-')}>-</button>
                        </div>
                        <div className="row">
                            <button className="col" onClick={()=>haldleclick('1')}>1</button>
                            <button className="col" onClick={()=>haldleclick('2')}>2</button>
                            <button className="col" onClick={()=>haldleclick('3')}>3</button>
                            <button className="col" onClick={()=>haldleclick('+')}>+</button>
                        </div>
                        <div className="row">
                            <button className="col"onClick={toggleSign}>+/-</button>
                            <button className="col"onClick={()=>haldleclick('0')}>0</button>
                            <button className="col" onClick={()=>haldleclick('.')}>.</button>
                            <button className="col" onClick={calculateResult} >=</button>
                        </div>
                        
                </div>           
            </div>
        </div>

    )
}
export default Calculator;