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
    "latitude": "",
    "longitude": ""
  }]);


  useEffect(() => {
      api.get(`/products/`).then(response => {
          setProdutos(response.data);
      })
  }, []);

  const containerStyle = {
    width: '100%',
    height: '100vh'
  };

  const center = {
  lat: -23.553540,
  lng: -46.681952
  };  

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