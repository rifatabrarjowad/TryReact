import "./App.css";
import Form from "./Form.js";
import Home from "./Home.js";
import About from "./About.js";

import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/form">Form</Link>

        <Route path="" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/form" component={Form} />
      </BrowserRouter>
    </div>
  );
}

export default App;
