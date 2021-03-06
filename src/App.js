import React from "react";
import "./App.sass";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import SleepNotNow from "./Components/SleepNotNow/SleepNotNow";
import SleepNow from "./Components/SleepNow/SleepNow";
import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import PlanSleep from "./Components/PlanSleep/PlanSleep";
import PlanSleepResult from "./Components/PlanSleep/PlanSleepResult";

const App = () => {
  return (
    <div>
      <div className="grain"></div>
      <Header />
      <Switch>
        <Route path="/" exact render={() => <Home />}></Route>
        <Route path="/not_now" exact render={() => <SleepNotNow />}></Route>
        <Route path="/sleep_now" exact render={() => <SleepNow />}></Route>
        <Route path="/plan_sleep" exact render={() => <PlanSleep />}></Route>
        <Route path="/plan_sleep/result" exact render={() => <PlanSleepResult />}></Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
