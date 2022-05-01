
const SelectSize = ({sizeOptions = [], setSize, setQuantity}) => {

    const handleRadio = (e) => {
        const radios = document.getElementsByClassName("radioSize")
        for (let i = 0; i < radios.length; i++) {
            radios[i].classList.remove("radioSizeSelected");
        }
        setSize(e.target.dataset.title);
        setQuantity(0)
        e.target.classList.add("radioSizeSelected");
    }

    return (
        <div className="selectSize m-3">
            <strong className="pe-3 fs-5">Talles:</strong>
                <div role="radiogroup" aria-labelledby="radioSizes" id="proba" data-sizes="[XL,L,M,S,XS]" className="d-flex mt-2">
                    <div onClick={handleRadio} role="radio" data-title="XL" aria-checked="false" tabIndex="0" className="radioSize">XL</div>
                    <div onClick={handleRadio} role="radio" data-title="L" aria-checked="false" tabIndex="0" className="radioSize">L</div>
                    <div onClick={handleRadio} role="radio" data-title="M" aria-checked="false" tabIndex="0" className="radioSize">M</div>
                    <div onClick={handleRadio} role="radio" data-title="S" aria-checked="false" tabIndex="0" className="radioSize">S</div>
                    <div onClick={handleRadio} role="radio" data-title="XS" aria-checked="false" tabIndex="0" className="radioSize">XS</div>
                </div>
        </div>
        
    )
}

export default SelectSize