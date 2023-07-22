import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import  {Provider} from 'react-redux';
const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Landing} />
        </Routes>
        <section className="container">
          <Routes>
            <Route exact path="/login" Component={Login} />
            <Route exact path="/register" Component={Register} />
          </Routes>
        </section>
      </Fragment>
    </Router>
  );
};

export default App;
