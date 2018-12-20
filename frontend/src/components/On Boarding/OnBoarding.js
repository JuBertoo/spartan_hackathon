import React, { Component } from 'react'
import './OnBoarding.scss'
import{NavLink} from 'react-router-dom';


export default class OnBoarding extends Component {
  render() {
    return (
      <div>
          <div className="onBoardingTitle">
            <h1>ONBOARDING</h1>
					</div>
					<div className="onBoardingLogo">
						<img src="https://via.placeholder.com/200"/>				
					</div>
					<div className="onBoardingDescription">
						<p>Donne la possibilité à tous ceux qui ont besoin de laver ou sécher du linge hors domicile de minimiser les temps d'attente, de fluidifier les étapes et de sécuriser son linge en se connectant aux équipements</p>
					</div>
					<div className="onBoardingPictos">
						<div className="FirstPicto">
							<img src="https://via.placeholder.com/80"/>
							<p>Lavage</p>				
						</div>
						<div className="SecondPicto">
							<img src="https://via.placeholder.com/80"/>
							<p>Séchage</p>				
						</div>
						<div className="ThirdPicto">
							<img src="https://via.placeholder.com/80"/>
							<p>Drop & Pick up</p>				
						</div>
					</div>
					<NavLink to={{pathname:"/map"}}>
						<div className="onBoardingFleche">
							<img src={require('./arrow.png')}/>
						</div>
					</NavLink>
        
      </div>
    )
  }
}
