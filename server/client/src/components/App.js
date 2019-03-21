import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import SurveyNew from './SurveyNew';
import Dashboard from './Dashboard';
import Header from './Header';


class App extends Component {

  componentDidMount() {
    const {
      fetchUser,
    } = this.props
    fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route 
              exact
              path="/"
              component={Landing}
            />
            <Route
              path="/surveys/new"
              component={SurveyNew}
            />
            <Route
              exact
              path="/surveys"
              component={Dashboard}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
