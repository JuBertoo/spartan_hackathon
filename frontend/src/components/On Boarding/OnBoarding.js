import React, { Component } from 'react'
import './OnBoarding.scss'
import{NavLink} from 'react-router-dom';


export default class OnBoarding extends Component {
  render() {
    return (
      <div className="onBoardingContainer">
          <div className="onBoardingTitle">
            <h1>ONBOARDING</h1>
					</div>
					<div className="onBoardingLogo">
						<img className="logoBoarding" src={require("../../assets/img/WiHub-05.png")}/>
						<img className="catchPhraseBoarding" src={require("../../assets/img/WiHub-07.png")}/>				
					</div>
					<div className="onBoardingDescription">
						<p>Donne la possibilité à tous ceux qui ont besoin de laver ou sécher du linge hors domicile de <span class="descriptionImportant">minimiser les temps d'attente</span>, de <span class="descriptionImportant">fluidifier les étapes</span> et de <span class="descriptionImportant">sécuriser son linge</span> en se connectant aux équipements</p>
					</div>
					<div className="onBoardingPictos">
						<div className="FirstPicto">
							<img className="picto" src={require("../../assets/img/WiHub-08.png")}/>				
							<p>Lavage</p>				
						</div>
						<div className="SecondPicto">
							<img className="picto" src={require("../../assets/img/WiHub-09.png")}/>				
							<p>Séchage</p>				
						</div>
						<div className="ThirdPicto">
							<img className="picto" src={require("../../assets/img/WiHub-10.png")}/>				
							<p>Drop & Pick up</p>				
						</div>
					</div>
					<div className="iconFleche">
						<NavLink to={{pathname:"/map"}}>
							<img src={require('../../assets/img/WiHub_fleche-18.png')} className="onBoardingFleche"/>
						</NavLink>       
					</div> 
      </div>
    )
  }
}
