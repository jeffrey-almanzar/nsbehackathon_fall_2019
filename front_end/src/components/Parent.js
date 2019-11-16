import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// components
import App from "../App";
import SearchPage from './SearchPage';


class Parent extends React.Component {

  render() {
    const Home = () => <App />;
    const SearchP = () => <SearchPage />
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={SearchP} />
        </Switch>
      </Router>
    );
  }
}

export default Parent;

