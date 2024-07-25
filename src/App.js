import './App.css';
import FirstBox from "./components/avista/AvistaBox";
import OtherBox from "./components/parcelado/ParceladoBox"

function App() {
  return (
    <div className="App">
      <div className='main'>
      <img src="https://woovi.com/_next/static/media/woovi-logo.1612aac8.webp" style={{width: 150, display: "block", margin: "auto"}}/>
        <h1 style={{textAlign: "center"}}>João, como você quer pagar?</h1>
            <FirstBox />
            <OtherBox />
      </div>
    </div>
  );
}

export default App;