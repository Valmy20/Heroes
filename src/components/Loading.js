import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Spinner from 'react-native-spinkit';

export default class Loading extends Component {
  render() {
    const isLoading = this.props.show
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {isLoading ? (<Spinner color={'#03DAC6'} size={100} type={this.props.type} />) : (null)}
        {isLoading ? (<Text style={{ color: '#03DAC6' }}>Aguarde...</Text>) : (null)}
      </View>
    );
  }
}
