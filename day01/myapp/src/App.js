// import logo from './logo.svg';
import './App.css';
import Hello from "./mycomponents/Hello";
import Wellcome from "./mycomponents/Wellcome";
import Arrow from "./mycomponents/Arrow";
import Welcome from './mycomponents/welcome';
import Btncng from "./mycomponents/Btncng";

function App() {
  return (
    <div className="App">
      <Btncng></Btncng>
      <Welcome></Welcome>
      <Hello age='17' name='Rifat'></Hello>
      <Wellcome age='18' name='Devhack' ></Wellcome>
      <Arrow></Arrow>

    </div >
  );
}

export default App;
