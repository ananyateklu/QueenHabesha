import React from 'react'
import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';


const containerStyle = {
  width: '300px',
  height: '300px'
};

const center = {
  lat: 44.790008,
  lng: -93.234089
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: window.env.API_URL
  })

  const onUnmount = React.useCallback(function callback(map) {
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
     <Marker position={center} ></Marker>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)