function Display({value, valueSave, operator}) {
    return (
        <div className="parent-display">
        <p id="prepVal" className="child-display">{value}</p>
        <p className="operator">{operator}</p>
        <p id="saveVal" className="child-display">{valueSave}</p>

        </div>
    )
}

export default Display