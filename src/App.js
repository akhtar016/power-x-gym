import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import SecondPart from "./Components/SecondPart/SecondPart";
import Footer from "./Components/Footer/Footer";
import ThirdPart from "./Components/ThirdPart/ThirdPart";
import FourthPart from "./Components/FourthPart/FourthPart";
import FifthPart from "./Components/FifthPart/FifthPart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import OurClasses from "./Components/OurClasses/OurClasses";
import AdvancedGym from "./Components/AdvancedGym/AdvancedGym";
import PricingPlan from "./Components/PricingPlan/PricingPlan";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <SecondPart />
          <ThirdPart />
          <FourthPart />
          <FifthPart />
          <Footer />
        </Route>

        <Route path="/our-classes">
          <OurClasses></OurClasses>
          <Footer />
        </Route>

        <Route path="/advanced-gym">
          <AdvancedGym />
          <Footer />
        </Route>

        <Route path="/pricing-plan">
          <PricingPlan></PricingPlan>
          <Footer />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
