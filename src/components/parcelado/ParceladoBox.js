import valuesObject from './prices';
import "./parcelado.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OtherBox() {
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedInstallment, setSelectedInstallment] = useState(null);
    const [selectedValueTotal, setSelectedValueTotal] = useState(null);
    const navigate = useNavigate();

    const handleSelection = (value, installment, total) => {
        setSelectedValue(value)
        setSelectedInstallment(installment)
        setSelectedValueTotal(total)

    };

    const handleSubmit = () => {
        if(selectedValue && selectedInstallment && selectedValueTotal) {
            navigate("/pay", { state: {selectedValue, selectedInstallment, selectedValueTotal }});
        }
    };

    const valuesToMap = valuesObject.slice(1);
    const listBoxes = valuesToMap.map(value => {
        const inputId = `other-box-radio-${value.id}`;
        const cashback = <div className="flag"><div>-3% de juros: Melhor opção de parcelamento</div></div>
        const formattedValue = value.currentValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        })

        const totalFormattedValue = value.totalValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
    
        });

        return (
            <label htmlFor={inputId} className="radio-label" key={value.id}>
                <div className="radio-container">
                    <div className="parcelado-box">
                        <div className="margin-spacer">
                            <span className="pix-tag">{value.tag}</span>
                        </div>
                        <div className="price-box">
                            <p style={{marginBottom: 1 }}><b>{value.id}x</b> {formattedValue}</p>
                            <p style={{fontSize: 8, color: 'gray'}}>Total: {totalFormattedValue}</p>
                            <p className="cash-back-tag"></p>
                            {value.cashback && cashback}
                        </div>
                    </div>
                    <input 
                        type="radio" 
                        id={inputId} 
                        name="payment-option" 
                        value="parcelado" 
                        onChange={() => handleSelection(value.currentValue, value.id, value.totalValue)}
                    />
                </div>
            </label>
        );
    });

    return (
        <>
            {listBoxes}
            <div className="pay-div">
            <button className="pay-button" onClick={handleSubmit}>Pagar</button>
            </div>
            
        </>
    );
};
