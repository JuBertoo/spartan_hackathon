import React, { Component } from 'react'
import './Recap.scss'
import{NavLink} from 'react-router-dom';

export default class Recap extends Component {
  render() {
    return (
        <div className="recapContainer">

            <div className="recapTitle">
                <NavLink to={{pathname:"/personaldata"}} className="iconNavLink">
                    <img className="arrow" src={require("../../assets/img/WiHub-11.png")}/>
                </NavLink>
                <h1>RÉCAPITULATIF COMMANDE</h1>
            </div>
        

            <div className="recapInfos">
                <p className="recapTarif">16.00 €</p>
                <p className="recapDate">January 27, 2019 - 3:45 PM</p>
                <p className="recapCompany">WIHUB</p>
            </div>
            <div className="recapImage">
            <img className="arrowreverse" src={require("../../assets/img/map.png")}/>
            </div>
            <div className="recapMessage">
                <p className="Merci">Merci !</p>
                <p>Rendez-vous au 1 rue place Francis Chirat, 13002 Marseille</p>
            </div>
            <div className="recapNext">
                <h3>Accéder à mes réservations</h3>
                <NavLink to={{pathname:"/reservations"}}>
                    <div className="nextButton">
                    <img className="arrowreverse" src={require("../../assets/img/WiHub_fleche-18.png")}/>
                    </div>
                </NavLink>
            </div>
      </div>
    )
  }
}
