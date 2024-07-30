import React, { useState, useEffect } from 'react';
import './Form.css';

export default function Form({ selectedValue, selectedInstallment }) {
    const [formData, setFormData] = useState({
        fullName: '',
        cpf: '',
        expirationMonth: '',
        expirationYear: '',
        cvv: '',
        installments: '1'
    });

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            installments: selectedInstallment.toString()
        }));
    }, [selectedInstallment]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    };

    const installmentOptions = [...Array(7)].map((_, i) => {
        const numInstallments = i + 1;
        const installmentValue = selectedValue / numInstallments;
        return (
            <option key={numInstallments} value={numInstallments}>
                {numInstallments}x - {formatCurrency(installmentValue)}
            </option>
        );
    });

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome Completo:
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        CPF:
                        <input
                            type="text"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        />
                    </label>
                </div>
                <div className="inline-fields">
                    <div className="third-width">
                        <label>
                            Mês de Vencimento:
                            <input
                                type="number"
                                name="expirationMonth"
                                value={formData.expirationMonth}
                                onChange={handleChange}
                                placeholder="MM"
                            />
                        </label>
                    </div>
                    <div className="third-width">
                        <label>
                            Ano de Vencimento:
                            <input
                                type="number"
                                name="expirationYear"
                                value={formData.expirationYear}
                                onChange={handleChange}
                                placeholder="YYYY"
                            />
                        </label>
                    </div>
                    <div className="third-width">
                        <label>
                            CVV:
                            <input
                                type="text"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                            />
                        </label>
                    </div>
                </div>
                <div>
                    <label>
                        Parcelas:
                        <select
                            name="installments"
                            value={formData.installments}
                            onChange={handleChange}
                            style={{ width: '100%' }}
                        >
                            {installmentOptions}
                        </select>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}