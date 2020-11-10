import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddUserPage from "./pages/AddUserPage";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/add-user" component={AddUserPage}/>
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
