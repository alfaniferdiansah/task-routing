import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./project/home/Header";
import Navbar from "./project/Navbar";
import About from "./project/About";
import Services from "./project/Services";
import Contact from "./project/Contact";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path='/header' component={Header} exact><Header /></Route>
          <Route path='/about' component={About} exact><About /></Route>
          <Route path='/services' component={Services} exact><Services /></Route>
          <Route path='/contact' component={Contact} exact><Contact /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
