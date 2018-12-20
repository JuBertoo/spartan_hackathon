
import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import laverieDatas from './laverieDatas.json'
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";

import './LaverieMap.scss'

const setIcon = (integer, color) => {
  return (
    divIcon({
      html: renderToStaticMarkup(
        <div style={{position: "relative", width: 60, height: 60}}>
          <i style={{color: color}} className="fa fa-map-marker-alt fa-3x"/>
          <span style={{color: 'white', fontSize: '2em', position: "absolute", left: 7}} >{integer}</span>
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
    level:null
    

  }

  // componentDidMount(){
  //   this.state.iconColor;
  // }

  getMachine=()=>{
    // if(this.state.currentFilter.level > 0){
    this.setState({iconColor: "red", currentFilter: 'nbMachine'}) 
    // }
  }
  getSechoir=()=>{
    // if(this.state.currentFilter.level > 0){
    this.setState({iconColor: "green", currentFilter: 'nbSechoir'}) 
    // }
  }
  getLocker=()=>{
    // if(this.state.currentFilter.level > 0){
    this.setState({iconColor: "yellow", currentFilter: 'nbCasier'}) 
    // }
  }

  render() {
    console.log(this.state);
    const position = [this.state.initialMap.lat, this.state.initialMap.lng];
    let visibility = this.state.visible ? "visible" : "hidden";

    return (
    
      
      <div className="laverieMapContainer">
        <div className="mapContainer">
       
          <Map center={position} zoom={this.state.initialMap.zoom} onClick={() => this.setState({visible: false})}>
          <div className="buttonType">
            <button onClick={()=>this.getMachine()}> machine </button>
            <button onClick={()=>this.getSechoir()}> Seche-linge </button>
            <button onClick={()=>this.getLocker()}> Locker </button>
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
                onClick={() => this.setState({currentSelected: laverie , visible: !this.state.visible})}>
                  
                </Marker>
                  )
                })
              }
          </Map>
        </div>
      
        <div className={visibility}>
              <div className="adresseContainer">
                <img src={this.state.currentSelected.image}/>
                <div className="adresse">
                  <h3>{this.state.currentSelected.title}</h3>
                  <p>{this.state.currentSelected.adresse}</p>
                  <p>{this.state.currentSelected.horraire}</p>

                </div>
                <div className="adresseImage">

                </div>
              </div>
              <div className="modeImage">
                <button>Laver</button>
                <button>Secher</button>
                <button>Deposer</button>
              </div>
        </div>
      </div>    

    )
  }
}
