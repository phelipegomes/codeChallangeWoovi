import valuesObject from './prices';
import "./Payment.css"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Payment() {
    /* Definição do estate do componente payment para uso de prices.js*/
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedInstallment, setSelectedInstallment] = useState(null);
    const [selectedValueTotal, setSelectedValueTotal] = useState(null);

    /* Inicialização de navigate para uso do state em card */
    const navigate = useNavigate();

    /* Função handler para alterar o estado ao selecionar o label (radio) */
    const handleSelection = (value, installment, total) => {
        setSelectedValue(value);
        setSelectedInstallment(installment);
        setSelectedValueTotal(total);
    };

    /* Função para enviar o estado para view card (next view) ao submeter */
    const handleSubmit = () => {
        if(selectedValue && selectedInstallment && selectedValueTotal) {
            navigate("/card", { state: {selectedValue, selectedInstallment, selectedValueTotal }});
        };
    };

    /* Iteração sobre todos os valores de prices.js e retornando JXS */
    const listValues = valuesObject.map(value => {
        const inputId = `box-radio-${value.id}`;

        /* JSX condicional que depende dos atributos de prices.js */
        const cashback = <div className="flag"><div>-3% de juros: Melhor opção de parcelamento</div></div>
        const avista = <div className='flag'><b>R$300,00</b> de cashback no seu pix</div>
        
        /* Conversão do valor atual para modela (Real) */
        const formattedValue = value.currentValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
        
        /* Conversão do valor total para moeda (Real) */
        const totalFormattedValue = value.totalValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
    
        });

        return (  
            /* htmlFor está recenbendo uma string interpolada com o id  */
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

                            {/* Flag de renderização será inclusa se parcela tem cashback */}
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
                style={
                    {
                        width: 150, 
                        display: "block", 
                        margin: "auto",
                        marginTop:50
                    }
                }
            />
            <h1 style={{textAlign: "center"}}>Olá João, como você quer pagar?</h1>
            {/* Renderização da variável que tem o retorno da iteração sobre prices e retorna JSX */}
            {listValues}

            <div className="pay-div" style={{marginBottom: 50}}>
                <button className="pay-button" onClick={handleSubmit}>Pagar</button>
            </div>
        </div>
    );
};
