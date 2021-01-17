import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import { AuthProvider } from "./contexts/AuthContext";
import ForgotPass from "./Components/ForgotPass/ForgotPass";
import PrivateRoute from "./hoc/PrivateRoute";
import ScrollToTop from "./hoc/ScrollToTop";
import Guide from "./Pages/Guide/Guide";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AuthHome from "./Pages/HomePage/AuthHome";
import Account from "./Pages/Account/Account";
import AddProduct from "./Pages/AddProduct/AddProduct";
import ProductBuilder from "./Components/ProductBuilder/ProductBuilder";
import DBProvider from "./contexts/DBContext";
import Orders from "./Pages/Orders/Orders";
import ErrorHandler from "./hoc/ErrorHandler";

function AuthApp() {
  return (
    <AuthProvider>
      <DBProvider>
        <Router>
          <ScrollToTop>
            <Navbar />
            <ErrorHandler>
              <Switch>
                <PrivateRoute path="/" exact component={AuthHome} />
                <Route path="/guide" component={Guide} />
                <Route path="/contact-us" component={ContactUs} />
                <PrivateRoute path="/add-product" component={AddProduct} />
                <PrivateRoute
                  path="/build-product"
                  component={ProductBuilder}
                />
                <PrivateRoute
                  path="/forgotten-password"
                  component={ForgotPass}
                />
                <PrivateRoute path="/account" component={Account} />
                <PrivateRoute path="/orders" component={Orders} />
                <Route component={NotFound} />
              </Switch>
            </ErrorHandler>
            <div className="main"></div>
            <Footer />
          </ScrollToTop>
        </Router>
      </DBProvider>
    </AuthProvider>
  );
}

export default AuthApp;
