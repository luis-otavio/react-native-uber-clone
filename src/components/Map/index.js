import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';
import Search from '../Search'
import Directions from '../Directions'

export default class Map extends Component {
    state = {
        region: null,
        destination: null,
    };

    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            async ({ coords: {latitude, longitude} }) => {
                this.setState({
                    location,
                    region: {
                    latitude,
                    longitude,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134
                    }
                });
            }, //sucesso
            () => {}, //erro
            {
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000,
            }
        );
    }
    handleLocationSelected = (data, { geometry }) => {
        const {location: {lat: latitude, lng: longitude}} = geometry;

        this.setState({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text,
            }
        })
    }

    render() {
        const { region, destination } = this.state;  

    return (
        <View style={{ flex: 1 }}> 
            <MapView
                style={{ flex: 1 }}
                region={region}
                showsUserLocation
                loadingEnable
            >
                { destination && (
                    <Directions 
                        origin={region}
                        destination={destination}
                        onReady={() => {
                            
                        }}   
                    />
                ) }
            </MapView>
            <Search onLocationSelected={this.handleLocationSelected }/>
        </View>
    );
  }
}
