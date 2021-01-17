import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Guide from "./Pages/Guide/Guide";
import Home from "./Pages/HomePage/Home";
import NotFound from "./Components/NotFound/NotFound";
import Plans from "./Pages/Plans/Plans";
import GetStarted from "./Pages/GetStarted/GetStarted";
import { AuthProvider } from "./contexts/AuthContext";
import ScrollToTop from "./hoc/ScrollToTop";
import signIn from "./Pages/SignIn/SignIn";

function UnauthApp() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/plans" component={Plans} />
            <Route path="/guide" component={Guide} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/get-started" component={GetStarted} />
            <Route path="/sign-in" component={signIn} />
            <Route component={NotFound} />
          </Switch>
          <div className="main"></div>
          <Footer />
        </ScrollToTop>
      </Router>
    </AuthProvider>
  );
}

export default UnauthApp;
