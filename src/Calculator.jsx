import ButtonBox from "./ButtonBox.jsx"
import Display from "./Display.jsx"

function Calculator(
    {valuePrep, 
    switchCalc, 
    valueSave, 
    onClickAdd, 
    operator, 
    onClickEquals, 
    onClickSubtract, 
    onClickMultiply}) {
    return (
        <div className="calculator-parent">
            <Display 
            switchCalc={switchCalc} 
            value={valuePrep} 
            valueSave={valueSave}
            operator={operator}/>
            <ButtonBox 
            switchCalc={switchCalc}
            onClickAdd={onClickAdd}
            onClickSubtract={onClickSubtract} 
            onClickEquals={onClickEquals}
            onClickMultiply={onClickMultiply}/>
        </div>
    )
}

export default Calculator