import "./payment.css"
import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';

export default function ResultPage() {
    const [textToCopy, setTextToCopy] = useState('https://www.gerarpix.com.br/pix?code=TN2HPgOL_7fn_qeJxr_N3W-2q-7ylnAb5kRBtRgP7d7gOLXnQVuFaEHJmKhPMrt2luqvpTxp9zvjrWcUdHxDah3Oue2pOia3EnFT1ZMc2eNV4cd8Hfk500SHD2gq-5f4FnfT63G9ydeY98N2m3_2JLH7tzykzYDZWCdnRASr126wf72_h6KZW6a8vpCgofKe6ifBpSovi5IM3Tz3TRGcTcwMOYuhZVJg');

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert('Código QR Copiado!');
            })
            .catch(err => {
                console.error('Erro ao copiar texto: ', err);
            });
    };

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
            <h1 style={{textAlign: "center"}}> João, pague a entrada de<br/> {formattedValue} pelo Pix</h1>
            <div className='qrcode-box'>
                <img style={{width: 400}}  alt="Código QR" src="http://product.corel.com/help/Common/CDGS/540223850/Shared/CorelDRAW-QR-code.png"/>
            </div>
            <div className="qrcode-div">
                <button className="qrcode-button" onClick={handleCopy}>Clique para copiar o QR CODE </button>
            </div>
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
            <div className="qrcode-div">
                <button className="qrcode-button">Continuar para Cartão</button>
            </div>
        </div>
    );
}