import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path="/" Component={Landing} />
          </Routes>
          

          <section className="container">
          <Alert />
            <Routes>
              <Route exact path="/login" Component={Login} />
              <Route exact path="/register" Component={Register} />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
