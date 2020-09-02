import {BrowserRouter, Route, Switch} from "react-router-dom";
import React from "react";
import Main from "./pages/Main/Main";
import Features from "./pages/Features/Features";
import Concept from "./pages/Concept/Concept";
import Symptoms from "./pages/Symptoms/Symptoms";
import Treatment from "./pages/Treatment/Treatment";
export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Main}></Route>
            <Route path="/concept" exact component={Concept}></Route>
            <Route path="/features" exact component={Features}></Route>
            <Route path="/symptoms" exact component={Symptoms}></Route>
            <Route path="/treatment" exact component={Treatment}></Route>
            
        </Switch>
    );
}