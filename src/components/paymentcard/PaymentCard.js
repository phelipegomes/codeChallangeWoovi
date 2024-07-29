import "./paymentcard.css"
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import CardForm from "../cardform/CardForm";

export default function ResultPage() {

    const location = useLocation();
    const {
        selectedValue = 0,
        selectedInstallment = 0,
        selectedValueTotal = 0
    } = location.state || {};

    const formattedValue = selectedValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const totalValue = selectedValue * selectedInstallment * 1.1;
    const formattedTotalValue = totalValue.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    const currentDate = new Date();
    
    const nextDayDate = new Date(currentDate);
    nextDayDate.setDate(currentDate.getDate() + 1);


    
    const formattedDate = nextDayDate.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });


    
    return (
        <div style={{maxWidth: 500, display: "block", margin: "auto"}}>
            <h1 style={{textAlign: "center"}}> João, pague o restante em {selectedInstallment}x de <br/> {formattedValue} no cartão</h1>
            <CardForm/>

            <p style={{textAlign: "center"}}>Prazo de pagamento:<br/> {formattedDate}</p>
            <div>
            <span className="span-left">1ª entrada no pix</span><span className="span-right">{formattedValue}</span>
            <span className="span-left">{selectedInstallment - 1}x no cartão</span><span className="span-right">{formattedValue}</span>
            <hr/>
            <span className="span-left">CET: 0,5%</span><span className="span-right">Total: {formattedTotalValue}</span>
            <hr/>
            <span>Comom funciona?</span>
            <hr/>
            <div style={{textAlign: "center", paddingTop: 20}}>
            <p style={{margin: 0}}>Identificador:</p>
            <p style={{margin: 0}}>135bl1kjhcl1kjn3k4bkbc</p>
            </div>

            <div style={{textAlign: "center", paddingTop: 20}}>
            <p style={{margin: 0, paddingBottom: 50}}>Pagamento 100% seguro com: Woovi</p>
            
            </div>
            </div>
        </div>
    );
}