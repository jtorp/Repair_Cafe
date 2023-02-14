import React from 'react'
import GoogleMapReact from 'google-map-react';

function Map() {
    const center = { lat:0, lng:0}
  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: "xyz" }}
      defaultCenter={center}
      center={center}
      defaultZoom={13}
    >
      <div
        lat={59.955413}
        lng={30.337844}
        text="My Marker"
      ></div>
    </GoogleMapReact>
  </div>
  )
}

export default Map