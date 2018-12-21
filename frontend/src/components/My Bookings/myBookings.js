// import 'rc-progress/assets/index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Line, Circle } from 'rc-progress';
import './myBookings.scss';
import{NavLink} from 'react-router-dom';

export default class myBookings extends Component {
  constructor(props){
        super(props);
        this.state = {
            count : 0,
            color: '#3FC7FA',
            countSechage : 0,
    };
  }
componentDidMount(){
  this.startCounter()
  }

  startCounter = () => {
    this.counter = setInterval(() => {
      if (this.state.count < 100) {
        this.setState({count:this.state.count +1})
      } else {
        clearInterval(this.counter)
        this.state.count = 0;
      }
      }, 1000);
  }


  render() {
    const containerStyle = {
      width: 'auto',
    };
    const circleContainerStyle = {
      width: 'auto',
      height: 'auto',
      display: 'inline-block',
    };
    if(this.state.count >= 100){
      this.startCounter()
    }
    return (
      <div>
        <div className="myBookingHeader">
          <h1>MES RÉSERVATIONS</h1>
        </div>
        <div className="myBookingContainer">
          <div className="myBookingLavage">
            <div className="progressLavage">
              <div style={circleContainerStyle}>
              <Circle percent={this.state.count} strokeWidth="10" trailWidth="10" strokeColor={this.state.color} trailColor={"#0a2b33"} />
              </div>
              <p className="counterMin">{this.state.count}%</p>
            </div>
            <div className="LavageText">
              <h3 className="titresBooking">LAVAGE</h3>
              <p className="textBooking">1 lavage 10kg en cours</p>
              <div className="buttonLavage">
                <button>
                  DÉBLOQUER LE HUBLOT
                </button>
              </div>
            </div>          
          </div>
          <div className="myBookingSechage">
            <div className="SechageText">
              <h3 className="titresBooking">SÉCHAGE</h3>
              <p className="textBooking">Prochain séchage prévu dans {this.state.count} min</p>
            </div>
            <div className="progressSechage">
              <div style={circleContainerStyle}>
              <Circle percent={this.state.countSechage} strokeWidth="10" trailWidth="10" strokeColor={this.state.color} trailColor={"#0a2b33"}/>
              </div>
              <p className="counterMin">-</p>
            </div>
          </div>
          <div className="myBookingLockers">
            <div className="progressLockers">
              <div style={containerStyle}>
                <Line percent={this.state.count} strokeWidth="8" trailWidth="8" strokeColor={this.state.color} trailColor={"white"} />
              </div>
            </div>
            <div className="LockersText">
              <h3 className="titresBooking">DROP & PICK UP</h3>
              <p className="textBooking">Vous utilisez un casier C2 depuis {this.state.count} min</p>
            </div>            
          </div>
          <div className="buttonBooking">
            <NavLink to={{pathname:"/map"}}>
              <button>
                LOCALISER LES LAVERIES AUTOUR DE MOI
              </button>
            </NavLink>
          </div>
        
        </div>


        
        {/* <p>
          <button onClick={this.changeState}>Change State</button>
        </p> */}
      </div>
    );
  }
}