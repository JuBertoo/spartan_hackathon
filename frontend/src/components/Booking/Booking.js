import React, { Component } from 'react'
import './Booking.scss'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import{NavLink} from 'react-router-dom';


export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      selected1: false,
      selected2: false,
      selected3: false,
      button1: false,
      button2: false,
      button3: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  getSelected1(){
    this.setState({selected1:!this.state.selected1, selected2:false, selected3:false });
  }
  getSelected2(){
    this.setState({selected2:!this.state.selected2, selected1:false, selected3:false });
    
  }
  getSelected3(){
    this.setState({selected3:!this.state.selected3, selected1:false, selected2:false });
    
  }
  getButton1(){
    this.setState({button1:!this.state.button1});
  }
  getButton2(){
    this.setState({button2:!this.state.button2});
    
  }
  getButton3(){
    this.setState({button3:!this.state.button3});
    
  }

  render() {
    let selectedS = this.state.selected1 ? "selectedS" : "unselectedS"
    let selectedM = this.state.selected2 ? "selectedM" : "unselectedM"
    let selectedL = this.state.selected3 ? "selectedL" : "unselectedL"
    
    let button1 = this.state.button1 ? "button1O" : "button1F"
    let button2 = this.state.button2 ? "button2O" : "button2F"
    let button3 = this.state.button3 ? "button3O" : "button3F"

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
            <img className={selectedS} onClick={()=>this.getSelected1()} src={require("../../assets/img/washing-machine.png")}/>
            </button>
            <p> - 8kg</p>
          </div>
          <div className="pictoMachine">
            <button>
              <img className={selectedM} onClick={()=>this.getSelected2()} src={require("../../assets/img/washing-machine.png")}/>
            </button>
            <p>10kg</p>
          </div><div className="pictoMachine">
            <button>
            <img className={selectedL} onClick={()=>this.getSelected3()} src={require("../../assets/img/washing-machine.png")}/>
            </button>
            <p>15+kg</p>
          </div>
        </div>
        <h3 className="Title2">Sélectionnez vos services:</h3>
        <div class="selectService">
          <div className="serviceMachine">
            <button className="button1" onClick={()=>this.getButton1()}>
            <p>Réservation machine à laver</p>
            </button >
          </div>
          <div className="serviceMachine">
            <button className={button2} onClick={()=>this.getButton2()}>
            <img className="Plus" src={require("../../assets/img/plus.png")}/>
              <p>Transfert machine à laver/séchoir</p>
            </button>
          </div>
          <div className="serviceMachine">
            <button className={button3} onClick={()=>this.getButton3()}>
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
