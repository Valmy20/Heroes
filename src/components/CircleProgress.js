import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';

export default class CircleProgress extends Component {
  render() {
    const progress = this.props.progress * 100
    return (
      <View style={styles.viewCircle}>
        <View style={styles.viewPercent}>
          <Text style={styles.percentValue}>{progress.toFixed()}%</Text>
          <Text style={styles.textCircle}>{this.props.textCircle}</Text>
        </View>
        <ProgressCircle
          progress={this.props.progress}
          size={100} thickness={8}
          color={'#18FFFF'}
          borderColor={'#CFD8DC'}
          borderWidth={1}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewPercent: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#37474F'
  },
  percentValue: {
    fontSize: 25,
    color: '#FFFF00'
  },
  textCircle: {
    fontSize: 12,
    color: 'white'
  }
});
