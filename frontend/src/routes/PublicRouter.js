import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import Profile from '../components/Profile';
import { connect } from 'react-redux';
import PersonalData from '../components/Personal Data/PersonalData';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Profile}/>
        <Route path="/personaldata" component={PersonalData}/>
      </Switch>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  
})

const mapStateToProps = state => ({
  ...state
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));