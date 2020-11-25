import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "100%",
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [
        { latitude: 55.860916, longitude: -4.251433 },
        { latitude: 52.520008, longitude: 13.404954 },
        { latitude: 48.137154, longitude: 11.576124 },
      ],
    };
  }

  displayMarkers = () => {
    return this.state.locations.map((location, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: location.latitude,
            lng: location.longitude,
          }}
        />
      );
    });
  };
  render() {
    return (
        <Map
          google={this.props.google}
          zoom={3}
          style={mapStyles}
          initialCenter={{ lat: 50.482814028946706, lng: 9.953247916895117 }}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_API_TOKEN,
})(MapContainer);
