import './App.css';

const FirstBox = () => {
  return (
    <div className="avista-box">
      <div className="margin-spacer"><span className="pix-tag">Pix</span></div>
        <div className="price-box">
        <p><em>1x</em> R$ 30.500,00</p>
        <p style={{color: '#3adba9', fontSize: 10
        }}>Ganhe 3% de Cashback</p>
        <p className="cash-back-tag"></p>
        <div className="flag">
          @ <em>R$ 300,00</em> de volta no seu Pix na hora
        </div>
      </div>
    </div>
  );
};

const OtherBox = () => {
  return (
    <div className="parcelado-box">
      <div className="margin-spacer"><span className="pix-tag">Pix Parcelado</span></div>
      <div className="price-box">
        <p><em>1x</em> R$ 30.500,00</p>
        <p className="cash-back-tag"></p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <div className='main'>
        <h1 style={{textAlign: "center"}}>João, como você quer pagar?</h1>
        <label htmlFor="first-box-radio" className="radio-label">
          <div className="radio-container">
            <FirstBox />
            <input type="radio" id="first-box-radio" name="payment-option" value="avista" />
          </div>
          
        </label>
        <label htmlFor="other-box-radio" className="radio-label">
          <div className="radio-container">
            <OtherBox />
            <input type="radio" id="other-box-radio" name="payment-option" value="parcelado" />
          </div>
        </label>
      </div>
    </div>
  );
}

export default App;