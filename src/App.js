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
import OurClassesHeader from "./Components/OurClassHeader/OurClassesHeader";
import AdvanceGymHeader from "./Components/AdvanceGymHeader/AdvanceGymHeader";
import PricingHeader from "./Components/PricingHeader/PricingHeader";
import MembershipFirst from "./Components/MembershipFirst/MembershipFirst";
import MembershipFirstHead from "./Components/MembershipFirstHead/MembershipFirstHead";
import BankPayment from "./Components/BankPayment/BankPayment";

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
          <OurClassesHeader/>
          <OurClasses/>
          <Footer/>
        </Route>

        <Route path="/advance-gym">
          <AdvanceGymHeader/>
          <AdvancedGym/>
          <Footer/>
        </Route>

        <Route path="/pricing">
          <PricingHeader/>
          <PricingPlan></PricingPlan>
          <Footer/>
        </Route>


        <Route path="/personal-details">
        <MembershipFirstHead/>
        <MembershipFirst></MembershipFirst>
        <Footer/>
        </Route>

        <Route path="/payment">
          <MembershipFirstHead/>
          <BankPayment/>
          <Footer/>

        </Route>
        

       

      

      

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
