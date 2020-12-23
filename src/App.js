import './App.css';
import Navbar from './components/Nav.jsx'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from './pages/homepage';
function App() {
  return (
    <Router>
      <Navbar />
      <br></br>
      <Switch>
        <Route exact path="/D15TR1KT/">
          <Homepage />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/about">
          <Homepage />
        </Route>
        <Route exact path="/music">
          <Homepage />
        </Route>
        <Route exact path="/projects">
          <Homepage />
        </Route>
        <Route exact path="/contact">
          <Homepage />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
