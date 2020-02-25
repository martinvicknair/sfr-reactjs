import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
require('dotenv').config();

console.log(require('dotenv').config());

const mapStyles = {
  width: '80%',
  height: '80%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
        style={mapStyles}
        initialCenter={{
         lat: 39.742043,
         lng: -104.991531
        }}
      />
    );
  }
}

// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_MAP_API_KEY
// })(MapContainer);
export default GoogleApiWrapper(
  (props) => ({
    apiKey: process.env.REACT_APP_MAP_API_KEY
  }
))(MapContainer);