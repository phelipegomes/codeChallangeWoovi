import './App.css';
import FirstBox from "./components/avista/AvistaBox";
import OtherBox from "./components/parcelado/ParceladoBox"

function App() {
  return (
    <div className="App">
      <div className='main'>
        <h1 style={{textAlign: "center"}}>João, como você quer pagar?</h1>
            <FirstBox />
            <OtherBox />
      </div>
    </div>
  );
}

export default App;