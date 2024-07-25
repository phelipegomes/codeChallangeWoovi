import './App.css';
import FirstBox from "./components/avista/AvistaBox";
import OtherBox from "./components/parcelado/ParceladoBox"


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