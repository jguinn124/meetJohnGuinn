import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./ui/Theme.js";
import Header from "./ui/Header";
import Footer from "../components/ui/Footer";
import LandingPage from "../components/LandingPage";
import WebDevelopment from "../components/WebDevelopment";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route
            exact
            path="/webdevelopment"
            component={WebDevelopment}
          ></Route>
          <Route exact path="/resume" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
