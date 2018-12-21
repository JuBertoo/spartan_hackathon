import React, { Component } from 'react'
import './Home.scss'
import{NavLink} from 'react-router-dom';

export default class Home extends Component {
  render() {
    console.log('HOME')
    return (
      <div className="homePage">
        <div className="logoHome">
          <img src={require('./WiHub-05.png')}/>
          <img src={require('./WiHub-06.png')}/>
        </div>
        {/* <div className="logoText">
          <img src={require('./WiHub-06.png')}/>
        </div> */}
        <div className="logoArrow">
          <NavLink to={{pathname:"/onboarding"}}>
            <img className="arrow" src={require("../assets/img/arrow-reverser.png")}/>
          </NavLink>
        </div>
      </div>
    )
  }
}
