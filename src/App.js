import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Header from "./components/header/header.js";
import Landing from "./containers/Landing";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

function App({isLoading}) {
  return (
    <BrowserRouter>
      <div className='loading-container' hidden={!isLoading}>
        <Spinner animation="border" variant="light" />
      </div>
      <ToastContainer autoClose={2000} position="left" />
      <Header />
      <Switch>
        <Route path="/" exact component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  isLoading: state.AppState.home.isLoading,
});

export default connect(mapStateToProps, null)(App);
