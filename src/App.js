import React from "react";
import { Helmet } from "react-helmet";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Work from "./pages/HomePage/Work";
import Education from "./pages/HomePage/Education";
import Certification from "./pages/HomePage/Certifications";
import Project from "./pages/HomePage/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Swalih</title>
        <meta name="swalih" content="Web mobile application develper" />
      </Helmet>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/work" exact component={Work} />
        <Route path="/education" exact component={Education} />
        <Route path="/certification" exact component={Certification} />
        <Route path="/project" exact component={Project} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
