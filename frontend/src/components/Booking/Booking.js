import React, { Component } from 'react'
import './Booking.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
      <div>
        <div className="bookingTitle">
          <h1>RÉSERVER</h1>
        </div>
        <h3>De quelle taille de machine avez-vous besoin ?</h3>
        <div class="selectMachine">
          <div className="pictoMachine1">
            <button>
              <img src="https://via.placeholder.com/60"/>
            </button>
            <p> - 8kg</p>
          </div>
          <div className="pictoMachine1">
            <button>
              <img src="https://via.placeholder.com/70"/>
            </button>
            <p>10kg</p>
          </div><div className="pictoMachine1">
            <button>
              <img src="https://via.placeholder.com/80"/>
            </button>
            <p>15+kg</p>
          </div>
        </div>
        <h3>Sélectionnez vos services pour gagner du temps</h3>
        <div class="selectService">
          <div className="serviceMachine">
            <button>
              Réservation machine à laver
            </button>
          </div>
          <div className="serviceMachine">
            <button>
              Transfert machine à laver/séchoir
            </button>
          </div>
          <div className="serviceMachine">
            <button>
              Pliage
            </button>
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
        </div>
        <h3>Quand désirez-vous laver votre linge ?</h3>
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
        <div className="selectDate">
          <button>
            Confirmer
          </button>
        </div>



      </div>
    )
  }
}
