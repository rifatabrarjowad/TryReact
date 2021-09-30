import logo from './logo.svg';
import './App.css';
import Hello from "./mycomponents/Hello";
import Wellcome from "./mycomponents/Wellcome";

function App() {
  return (
    <div className="App">
      <Hello age='17' name = 'Rifat'></Hello>
        <Wellcome age='18' name = 'Devhack' ></Wellcome>
    </div>
  );
}

export default App;
