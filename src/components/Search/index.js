import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class Search extends Component {
  render() {
    return <GooglePlacesAutocomplete 
        placeHolder='Para onde vamos?'
        placeHolderTextColor="#333"
        onPress={() => {}}
        query={{
            key: 'AIzaSyCkC1D5PfvI2OOVS6oVGn9a6gNjdTsKwDU',
            language: 'pt'
        }}
        textInputProps={{
            autoCapitalize: "none",
            autoCorrect: false
        }}
        fetchDetails
        enablePoweredByContainer={false}
    />;
  }
}
