import valuesObject from './prices';
import "./parcelado.css"

export default function OtherBox() {

    const valuesToMap = valuesObject.slice(1);
    const listBoxes = valuesToMap.map(value => {
    const inputId = `other-box-radio-${value.id}`;
    const cashback = <div className="flag"><div>-3% de juros: Melhor opção de parcelamento</div></div>

        return (
            <label htmlFor={inputId} className="radio-label" key={value.id}>
                <div className="radio-container">
                    <div className="parcelado-box">
                        <div className="margin-spacer">
                            <span className="pix-tag">{value.tag}</span>
                        </div>
                        <div className="price-box">
                            <p><em>{value.id}x</em> R$ {value.currentValue}</p>
                            <p style={{fontSize: 8, color: 'gray'}}>Total: {value.totalValue}</p>
                            <p className="cash-back-tag"></p>
                            {value.cashback && cashback}
                        </div>
                    </div>
                    <input type="radio" id={inputId} name="payment-option" value="parcelado" />
                </div>
            </label>
        );
    });

    return (
        <>
            {listBoxes}
        </>
    );
};
