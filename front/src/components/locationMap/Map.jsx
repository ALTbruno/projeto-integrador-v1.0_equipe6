import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import api from '../../services';
import React from 'react';



  


const Map = ({product}) => {

  const [produtos, setProdutos] = useState(product);

  useEffect(() => {
    setProdutos(product)
  }, [product])

  const containerStyle = {
    width: '1139px',
    height: '570px'
  };

  const center = {
  lat: produtos.latitude,
  lng: produtos.longitude
  }; 
  console.log(produtos.longitude, produtos.latitude) 

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBxcF7o95twhjLU1tPwFeyTn6OeIvh33CM"
      })
    
      return (
        <div>
          {isLoaded ? (
            <GoogleMap mapContainerClassName='rounded-3' mapContainerStyle={containerStyle} center={center} zoom={15}>
              <Marker position={center}/>
            </GoogleMap>
          ) : <></>}
      </div>
      )
}

export default Map;