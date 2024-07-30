import valuesObject from './prices';
import "./Payment.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedInstallment, setSelectedInstallment] = useState(null);
    const [selectedValueTotal, setSelectedValueTotal] = useState(null);

    const navigate = useNavigate();

    const handleSelection = (value, installment, total) => {
        setSelectedValue(value);
        setSelectedInstallment(installment);
        setSelectedValueTotal(total);
    };

    const handleSubmit = () => {
        if (selectedValue && selectedInstallment && selectedValueTotal) {
            navigate("/card", { state: { selectedValue, selectedInstallment, selectedValueTotal }});
        }
    };

    const listValues = valuesObject.map(value => {
        const inputId = `box-radio-${value.id}`;

        const cashback = <div className="flag"><div>-3% de juros: Melhor opção de parcelamento</div></div>
        const avista = <div className='flag'><b>R$300,00</b> de cashback no seu pix</div>
        
        const formattedValue = value.currentValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        
        const totalFormattedValue = value.totalValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        const isSelected = selectedValue === value.currentValue;

        return (  
            <label htmlFor={inputId} className={`radio-label ${isSelected ? 'selected' : ''}`} key={value.id}>
                <div className={`radio-container ${isSelected ? 'selected' : ''}`}>
                    <div className="parcelado-box">
                        <div className="margin-spacer">
                            <span className="pix-tag">{value.tag}</span>
                        </div>
                        <div className="price-box">
                            <p style={{marginBottom: 1 }}><b>{value.id}x</b> {formattedValue}</p>
                            <p style={{fontSize: 8, color: 'gray'}}>Total: {totalFormattedValue}</p>
                            <p className="cash-back-tag"></p>
                            {value.cashback && cashback}
                            {value.avista && avista}
                        </div>
                    </div>
                    <input 
                        type="radio" 
                        id={inputId} 
                        name="payment-option" 
                        value="payment" 
                        onChange={() => handleSelection(value.currentValue, value.id, value.totalValue)}
                    />
                </div>
            </label>
        );
    });

    return ( 
        <div className='main'>
            <img alt="Logo Woovi" 
                src="https://woovi.com/_next/static/media/woovi-logo.1612aac8.webp" 
                style={{
                    width: 150, 
                    display: "block", 
                    margin: "auto",
                    marginTop: 20
                }}
            />
            <h1 style={{textAlign: "center"}}>Olá João, como você quer pagar?</h1>
            {listValues}

            <div className="pay-div" style={{marginBottom: 50}}>
                <button className="pay-button" onClick={handleSubmit}>Pagar</button>
            </div>
        </div>
    );
}