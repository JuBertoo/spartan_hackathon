import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import Home from '../components/Home';
import { connect } from 'react-redux';
import Booking from '../components/Booking/Booking'
import myBookings from '../components/My Bookings/myBookings';
import PersonalData from '../components/Personal Data/PersonalData';
import OnBoarding from '../components/On Boarding/OnBoarding';
import LaverieMap from '../components/Map/LaverieMap';


class PublicRouter extends Component {
  render() {
    return (
      <Switch>
        
        <Route path="/booking" component={Booking}/>
        <Route path="/personaldata" component={PersonalData}/>
        <Route path="/onboarding" component={OnBoarding}/>
        <Route exact path="/" component={Home}/>
        <Route path="/reservations" component={myBookings}/>
        <Route path="/map" component={LaverieMap}/>
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