import React, { Component } from 'react'
import './Booking.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import{NavLink} from 'react-router-dom';


export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return (
      <div className="BookingContainer">
        <div className="BookingHeader">
          <NavLink to={{pathname:"/map"}} className="iconNavLink">
            <img className="arrow" src={require("../../assets/img/WiHub-11.png")}/>
          </NavLink>
          <h1>RÉSERVER</h1>
          <NavLink to={{pathname:"/reservations"}} className="iconNavLink">
            <img className="user" src={require("../../assets/img/WiHub-12.png")}/>
          </NavLink>
        </div>
        <h3 className="Title1">Selectionner la taille de votre lave-linge :</h3>
        <div class="selectMachine">
          <div className="pictoMachine">
            <button>
            <img className="laveLingeS" src={require("../../assets/img/washing-machine.png")}/>
            </button>
            <p> - 8kg</p>
          </div>
          <div className="pictoMachine">
            <button>
              <img className="laveLingeM" src={require("../../assets/img/washing-machine.png")}/>
            </button>
            <p>10kg</p>
          </div><div className="pictoMachine">
            <button>
            <img className="laveLingeL" src={require("../../assets/img/washing-machine.png")}/>
            </button>
            <p>15+kg</p>
          </div>
        </div>
        <h3 className="Title2">Sélectionnez vos services:</h3>
        <div class="selectService">
          <div className="serviceMachine">
            <button>
            <p>Réservation machine à laver</p>
            </button>
          </div>
          <div className="serviceMachine">
            <button>
            <img className="Plus" src={require("../../assets/img/plus.png")}/>
              <p>Transfert machine à laver/séchoir</p>
            </button>
          </div>
          <div className="serviceMachine">
            <button>
            <img className="Plus" src={require("../../assets/img/plus.png")}/>
              <p>Pliage et rangement dans casier</p>
            </button>
          </div>
        </div>
          <div className="form-fields demo">
            <input 
              type="checkbox"
              name="requestDemo"
              id="requestDemo" 
              // value={this.state.requestDemo}
              className="checkbox"
              // onClick={(e) => this.handleChange(e)}
            ></input>
            <label 
              htmlFor="requestDemo">
            Séchage inclus
            </label>
            </div>
        
        <h3 className="Title3">Quand désirez-vous laver votre linge ?</h3>
        <div className="calendarPicker">
            <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            showTimeSelect
            inline
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            timeCaption="time"
            />
        </div>
        <NavLink to={{pathname:"/personaldata"}}>
          <div className="selectDate">
            <button>
              Confirmer
            </button>
          </div>
        </NavLink>



      </div>
    )
  }
}
