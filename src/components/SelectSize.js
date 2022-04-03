
const SelectSize = ({sizeOptions = [], setSize}) => {

    const handleSelect = (e) => {
        setSize(e.target.value)
    }

    return (
        <div className="selectSize m-3">
            <strong className="pe-3">Talle:</strong>
            <select onChange={handleSelect} required>
                <option value="">Elige talle</option>
                {sizeOptions.map((el) => <option key={el.value} value={el.value}>{el.text}</option>)}
            </select>
        </div>
        
    )
}

export default SelectSize