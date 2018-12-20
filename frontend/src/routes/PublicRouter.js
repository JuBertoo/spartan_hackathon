import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import Profile from '../components/Profile';
import { connect } from 'react-redux';
import Booking from '../components/Booking/Booking'

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Profile}/>
        <Route path="/booking" component={Booking}/>
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