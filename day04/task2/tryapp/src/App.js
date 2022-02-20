import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Form from "./Form.js";
import Home from "./Home.js";
import About from "./About.js";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/form" component={Form} />
      </Router>
    </div>
  );
}
