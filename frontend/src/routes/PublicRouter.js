import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import Home from '../components/Home';
import { connect } from 'react-redux';

import PersonalData from '../components/Personal Data/PersonalData';

import OnBoarding from '../components/On Boarding/OnBoarding';


class PublicRouter extends Component {
  render() {
    return (
      <Switch>

        <Route path="/personaldata" component={PersonalData}/>

        <Route path="/onboarding" component={OnBoarding}/>
        <Route exact path="/" component={Home}/>


      </Switch>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  
})

const mapStateToProps = state => ({
  ...state
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PublicRouter));