import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react';


const containerStyle = {
    width: '100%',
    height: '100vh'
};
  
const center = {
    lat: -23.548780, 
    lng: -46.665172
};

const Map = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBxcF7o95twhjLU1tPwFeyTn6OeIvh33CM"
      })
    
      return (
        <div className='' style={{width: '100%', heigth: '100vh'}}>
          {isLoaded ? (
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
              <Marker position={center}/>
            </GoogleMap>
          ) : <></>}
      </div>
      )
}

export default Map;