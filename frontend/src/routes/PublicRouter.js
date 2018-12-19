import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom';
import Home from '../components/Home';
import { connect } from 'react-redux';

class PublicRouter extends Component {
  render() {
    return (
      <Switch>
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