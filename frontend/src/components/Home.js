import React, { Component } from 'react'
import './Home.scss'

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
        <img className="arrow" src={require("../assets/img/arrow-reverser.png")}/>
        </div>
      </div>
    )
  }
}
