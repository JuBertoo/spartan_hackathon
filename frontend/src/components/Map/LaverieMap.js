
import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import laverieDatas from './laverieDatas.json'
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import{NavLink} from 'react-router-dom';
import './LaverieMap.scss'

const setIcon = (integer, color) => {
  return (
    divIcon({
      html: renderToStaticMarkup(
        <div style={{position: "relative", width: 60, height: 60}}>
          <i style={{color: color}} className="fa fa-map-marker-alt fa-3x"/>
          <span style={{color: 'white', fontSize: '2em', position: 'absolute', right:'7.8vw', bottom: '9vw',border: `2px solid ${color}`, borderRadius: '20px', width: '1.3em',
    height: '1em', textAlign: 'center', paddingBottom: '9px', backgroundColor:color }} >{integer}</span>
        </div>
      )
    })
  )
}

// setMarkerColor() {
//   if (color === 'red') return MyMarker
//   else if (color === 'blue') return MyMarker
//   else return MyMarker
// }

// return (
//   divIcon({
//     html: renderToStaticMarkup(
//       <div style={{position: "relative", width: 60, height: 60}}>
//         <img src={setMarkerColor()} style={{width: 60, height: 60}} />
//         <span style={{color: 'white', fontSize: '2em', position: "absolute", left: 7}} >{integer}</span>
//       </div>
//     )
//   })
// )
// }

export default class LaverieMap extends Component{
  state = {
    initialMap: {
      lat: 43.3008396, 
      lng: 5.367089399999941, 
      zoom: 15,
    },
    iconColor: "grey",
    currentFilter: 'nbMachine',
    currentSelected: {},
    visible: false,
    reservation:true, 
    level:null,
    showMessage: true
    

  }

  componentDidMount(){
    this.getMachine();
  }

  getMachine=()=>{
   
    this.setState({iconColor: "#00a5d2", currentFilter: 'nbMachine'}) 
    
  }
  getSechoir=()=>{
    // if(this.state.currentFilter.level > 0){
    this.setState({iconColor: "#056882", currentFilter: 'nbSechoir'}) 
    // }
  }
  getLocker=()=>{
    // if(this.state.currentFilter.level > 0){
    this.setState({iconColor: "#0a2b33", currentFilter: 'nbCasier'}) 
    // }
  }

  render() {
    console.log(this.state);
    const position = [this.state.initialMap.lat, this.state.initialMap.lng];
    let visibility = this.state.visible ? "visible" : "hidden";
    let reservation = this.state.showMessage ? "reservation" : "reservationHidden";

    return (
    
      
      <div className="laverieMapContainer">
        <div className="laverieMapHeader">
          <NavLink to={{pathname:"/onboarding"}} className="NavLinkIcon">
            <img className="arrow" src={require("../../assets/img/WiHub-11.png")}/>
          </NavLink>
          <h1>LAVERIES AUTOUR DE MOI</h1>
          <NavLink to={{pathname:"/reservations"}} className="NavLinkIcon">
            <img className="user" src={require("../../assets/img/WiHub-12.png")}/>
          </NavLink>
        </div>
        <div className="mapContainer">
       
          <Map center={position} zoom={this.state.initialMap.zoom} onClick={() => this.setState({visible: false, showMessage: true})}>
          <div className="buttonType">
            <img className="laveLinge" onClick={()=>this.getMachine()} src={require("../../assets/img/WiHub-14.png")}/>
            <img className="secheLinge"  onClick={()=>this.getSechoir()} src={require("../../assets/img/WiHub-15.png")}/>
            <img className="casier" onClick={()=>this.getLocker()} src={require("../../assets/img/WiHub-16.png")}/>

            {/* <button onClick={()=>this.getMachine()}> machine </button>
            <button onClick={()=>this.getSechoir()}> Seche-linge </button>
            <button onClick={()=>this.getLocker()}> Locker </button> */}
          </div>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
            laverieDatas.map((laverie) => {
              const icon = laverie.level > 0 ? setIcon( `${laverie[this.state.currentFilter]}`, `${this.state.iconColor}` ) : setIcon( `${laverie[this.state.currentFilter]}`, 'grey' )
              return(

                <Marker position={laverie.position} icon={icon}  
                onClick={() => this.setState({currentSelected: laverie , visible: true,reservation: !this.state.reservation, showMessage: false })}>
                  
                </Marker>
                  )
                })
              }
          </Map>
        </div>


        <div className={reservation}>
            <img className="click"  src={require("../../assets/img/click.png")}/>
            <h3>
              Cliquez sur un icone pour réserver <br/> dans la laverie de votre choix
            </h3>
          </div>

      
        <div className={visibility}>
              <div className="adresseContainer">
                <img src={this.state.currentSelected.image}/>
                <div className="adresse">
                  <h3>{this.state.currentSelected.title}</h3>
                  <p>{this.state.currentSelected.adresse}</p>
                  <p>{this.state.currentSelected.horraire}</p>
                </div> 
              </div>
              <div className="modeImage">
                <NavLink to={{pathname:"/onboarding"}} className="NavLinkIcon">
                  <button>Laver</button>
                </NavLink>
                <button>Secher</button>
                <button>Deposer</button>
              </div>
        </div>
      </div>    

    )
  }
}
