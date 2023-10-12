function ButtonBox(
    {switchCalc, 
    onClickAdd, 
    onClickEquals, 
    onClickSubtract,
    onClickMultiply}) {
   return  (
        <div className="parent-button">
            <button 
            onClick={switchCalc}
            id="clear" 
            className="child-button">
                C
            </button>
            
            <button
            onClick={onClickEquals} 
            id="equals" 
            className="child-button">
                =
            </button>

            <button
            onClick={switchCalc} 
            id="one" 
            className="child-button">
                1
            </button>
            
            <button
            onClick={switchCalc} 
            id="two" 
            className="child-button">
                2
            </button>
            
            <button
            onClick={switchCalc} 
            id="three" 
            className="child-button">
                3
            </button>
            
            <button
            onClick={switchCalc} 
            id="four" 
            className="child-button">
                4
            </button>
            
            <button
            onClick={switchCalc} 
            id="five" 
            className="child-button">
                5
            </button>
            
            <button
            onClick={switchCalc} 
            id="six" 
            className="child-button">
                6
            </button>
            
            <button
            onClick={switchCalc} 
            id="seven" 
            className="child-button">
                7
            </button>
            
            <button
            onClick={switchCalc} 
            id="eight" 
            className="child-button">
                8
            </button>
            
            <button
            onClick={switchCalc} 
            id="nine" 
            className="child-button">
                9
            </button>
            
            <button
            onClick={switchCalc} 
            id="zero" 
            className="child-button">
                0
            </button>
            
            <button
            onClick={onClickAdd}
            id="add" 
            className="child-button">
                +
            </button>
            
            <button
            onClick={onClickSubtract}
            id="subtract"
            className="child-button">
                -
            </button>
            
            <button
            onClick={onClickMultiply}
            id="multiply" 
            className="child-button">
                *
            </button>
            
            <button
            id="divide"
            className="child-button">
                /
            </button>
            
            <button
             onClick={switchCalc}
            id="decimal" 
            className="child-button">
                .
            </button>

        </div>
    )
}

export default ButtonBox