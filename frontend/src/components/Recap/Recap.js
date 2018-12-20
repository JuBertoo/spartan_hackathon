import React, { Component } from 'react'
import './Recap.scss'
import{NavLink} from 'react-router-dom';

export default class Recap extends Component {
  render() {
    return (
        <div className="recapContainer">
            <div className="recapTitle">
                <NavLink to={{pathname:"/personaldata"}}>
                    <div className="backButton">
                        <img src={require('./left-arrow.png')}/>
                    </div>
                </NavLink>
                <h1>RÉCAPITULATIF COMMANDE</h1>
            </div>
            <div className="recapInfos">
                <p className="recapTarif">23.00 €</p>
                <p className="recapDate">January 27, 2017 - 3:45 PM</p>
                <p className="recapCompany">WIHUB</p>
            </div>
            <div className="recapImage">
                <img src="https://via.placeholder.com/414x200.png"/>
            </div>
            <div className="recapMessage">
                <p>Merci !</p>
                <p>Rendez-vous au 1 rue place Francis Chirat, 13002 Marseille</p>
            </div>
            <div className="recapNext">
                <h3>Accéder à mes réservations</h3>
                <NavLink to={{pathname:"/reservations"}}>
                    <div className="nextButton">
                        <img src={require('./arrow.png')}/>
                    </div>
                </NavLink>
            </div>
      </div>
    )
  }
}
