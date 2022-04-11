import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import api from '../../services';
import React from 'react';



  


const Map = () => {

  const [produtos, setProdutos] = useState([{
    "id": null,
    "name": "",
    "description": "",
    "category": {
        "id": null,
        "title": "",
        "description": "",
        "imageUrl": "",
        "totalProducts": null
    },
    "city": {
        "id": null,
        "name": "",
        "country": ""
    },
    "images": [
        {
            "id": null,
            "title": "",
            "url": ""
        }
    ],
    "characteristics": [
        {
            "id": null,
            "name": "icon",
            "icon": ""
        }
    ],
    "latitude": null,
    "longitude": null
  }]);


  useEffect(() => {
      api.get(`/products/`).then(response => {
          setProdutos(response.data);
      })
  }, []);

  const containerStyle = {
    width: '1139px',
    height: '570px'
  };

  const center = {
  lat: produtos.latitude,
  lng: produtos.longitude
  };  

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