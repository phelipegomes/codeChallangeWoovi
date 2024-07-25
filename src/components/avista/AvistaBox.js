import "./avista.css"

export default function FirstBox() {
    return (
        <label htmlFor="first-box-radio" className="radio-label">
            <div className="radio-container">
                <div className="avista-box">
                    <div className="margin-spacer"><span className="pix-tag">Pix</span>
                    </div>
                        <div className="price-box">
                            <p><em>1x</em> R$ 30.500,00</p>
                            <p style={{color: '#3adba9', fontSize: 10 }}>Ganhe 3% de Cashback</p>
                    <p className="cash-back-tag"></p>
                    <div className="flag">
                    @ <em>R$ 300,00</em> de volta no seu Pix na hora
                    </div>
                </div>
            </div>
          <input type="radio" id="first-box-radio" name="payment-option" value="avista" />
        </div>
        
      </label>

       
    );
};