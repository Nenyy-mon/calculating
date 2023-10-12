import { useState } from "react";
import Calculator from "./Calculator.jsx"


let initialValue = 0;

function App() {
  const [valuePrep, setValuePrep] = useState(initialValue)
  const [valueSave, setValueSave] = useState(initialValue)
  const [operator, setOperator] = useState(null)
  const [currFunc, setCurrFunc] = useState(null)




  function onClickAdd(e) {
    if(valuePrep === 0) {
      return;
    }
    else if(valuePrep !== 0) {
      setOperator(e.target.innerHTML)
      setValueSave(Number(valueSave) + Number(valuePrep))
      setValuePrep(initialValue)  
    } 
    setCurrFunc(e.target.id)
  }


  function onClickSubtract(e) {
    if(valuePrep === 0) {
      return;
    } else if( valueSave === 0) {
    setValueSave(Math.abs(Number(valueSave) - Number(valuePrep)))
    setOperator(e.target.innerHTML)
    setValuePrep(initialValue)  
    } else  {
      setOperator(e.target.innerHTML)
      setValuePrep(initialValue) 
      setValueSave(Number(valueSave) - Number(valuePrep))
  }
      setCurrFunc(e.target.id)
  }

  function onClickMultiply(e) {
    if(valuePrep === 0) {
      return;
    } else if(valueSave === 0) {
      setValueSave(valuePrep)
      setValuePrep(initialValue)
  } else {
    setValueSave(Number(valueSave) * Number(valuePrep))
      setValuePrep(initialValue)
    
  }
  setOperator(e.target.innerHTML)
      setCurrFunc(e.target.id)
  }

  function onClickDivide(e) {
    if(valuePrep === 0) {
      return;
    } else if(valueSave === 0) {
      setValueSave(valuePrep)
      setValuePrep(initialValue)
  } else {
    setValueSave(Number(valueSave) / Number(valuePrep))
      setValuePrep(initialValue)
    
  }
  setOperator(e.target.innerHTML)
      setCurrFunc(e.target.id)
  }
 
  function onClickEquals() {
      switch(currFunc) {
      case "add": {
        setValueSave(Number(valueSave) + Number(valuePrep))
        setValuePrep(initialValue)
      }
      break;
      case "subtract": {
        setValueSave(Math.abs(Number(valueSave) - Number(valuePrep)))
        setValuePrep(initialValue)
      }
      break;
      case "multiply": {
        setValueSave(Number(valueSave) * Number(valuePrep))
        setValuePrep(initialValue)
      }
      break;
      case "divide": {
        setValueSave(Number(valueSave) / Number(valuePrep))
        setValuePrep(initialValue)
      }
      break;
      default:
        console.log("COCO")
    }
  }


  function switchCalc(e) {
    switch(e.target.id) {
      case "one": 
       if(valuePrep === 0) {
        setValuePrep(1)
      } else {
        setValuePrep(valuePrep + "1")
      }
       break;
       case "two": 
       if(valuePrep === 0) {
        setValuePrep(2)
      } else {
        setValuePrep(valuePrep + "2")
      }
       break;
       case "three": 
       if(valuePrep === 0) {
        setValuePrep(3)
      } else {
        setValuePrep(valuePrep + "3")
      }
       break;
       case "four": 
       if(valuePrep === 0) {
        setValuePrep(4)
      } else {
        setValuePrep(valuePrep + "4")
      }
       break;
       case "five": 
       if(valuePrep === 0) {
        setValuePrep(5)
      } else {
        setValuePrep(valuePrep + "5")
      }
       break;
       case "six": 
       if(valuePrep === 0) {
        setValuePrep(6)
      } else {
        setValuePrep(valuePrep + "6")
      }
       break;
       case "seven": 
       if(valuePrep === 0) {
        setValuePrep(7)
      } else {
        setValuePrep(valuePrep + "7")
      }
       break;
       case "eight": 
       if(valuePrep === 0) {
        setValuePrep(8)
      } else {
        setValuePrep(valuePrep + "8")
      }
       break;
       case "nine": 
       if(valuePrep === 0) {
        setValuePrep(9)
      } else {
        setValuePrep(valuePrep + "9")
      }
       break;
        case "zero": 
       if(valuePrep === 0) {
        setValuePrep(initialValue)
      } else {
        setValuePrep(valuePrep + "0")
      }
       break;
       case "decimal": 
       if(valuePrep === 0) {
        setValuePrep("0.")
      } else {
        setValuePrep(valuePrep + ".")
      }
       break;
       case "clear": 
       if(valuePrep === 0) {
        setValuePrep(initialValue)
        setOperator(null)
        setValueSave(initialValue)
      } else {
        setValuePrep(initialValue)
        setOperator(null)
        setValueSave(initialValue)
      }
       break;
       default:
        setValuePrep(initialValue)
    }
  }
  return (
    <div className="body">
     <Calculator 
     switchCalc={switchCalc} 
     onClickAdd={onClickAdd} 
     valueSave={valueSave} 
     valuePrep={valuePrep}
     operator={operator}
     onClickEquals={onClickEquals}
     onClickMultiply={onClickMultiply}
     onClickSubtract={onClickSubtract}
     onClickDivide={onClickDivide}/>
    
    </div>
  )
}

export default App
