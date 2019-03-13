import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections 
        destination={ destination }
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyCkC1D5PfvI2OOVS6oVGn9a6gNjdTsKwDU"
        strokeWidth={3}
        strokeColor="#222"

    />
);

export default Directions;
