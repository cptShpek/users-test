import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserDetailsPage from "./pages/UserDetailsPage";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/add-user" component={UserDetailsPage}/>
            <Route path="/:id" component={UserDetailsPage}/>
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
