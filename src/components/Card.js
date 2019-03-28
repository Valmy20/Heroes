import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import ProgressCircle from 'react-native-progress/Circle';

export default class Home extends Component {
  isNumber(value) {
    if (isNaN(value)) {
      return 0
    } else {
      return value / 100
    }
  }

  isNumber_(value) {
    if (isNaN(value)) {
      return "null"
    } else {
      return value + "%"
    }
  }

  render() {
    return (
      <View style={styles.viewCard}>
        <View style={styles.viewImg}>
          <Image source={{uri: this.props.img }} style={styles.img} />
        </View>
        <View style={styles.viewInfo}>
          <Text style={styles.name}>{this.props.name}</Text>
          <View style={styles.viewCircle}>

            <View>
              <View style={{ padding: 4, alignItems: 'center' }}>
              <Text style={styles.percentValue}>{this.isNumber_(this.props.heroe.powerstats.intelligence)}</Text>
                <ProgressCircle
                  progress={this.isNumber(this.props.heroe.powerstats.intelligence)}
                  color={'#18FFFF'}
                  borderColor={'#CFD8DC'}
                  borderWidth={1}
                />
                <Text style={styles.titleCircle}>Inteligência</Text>
              </View>


              <View style={{ padding: 4, alignItems: 'center' }}>
              <Text style={styles.percentValue}>{this.isNumber_(this.props.heroe.powerstats.power)}</Text>
                <ProgressCircle
                  progress={this.isNumber(this.props.heroe.powerstats.power)}
                  color={'#18FFFF'}
                  borderColor={'#CFD8DC'}
                  borderWidth={1}
                />
                <Text style={styles.titleCircle}>Poder</Text>
              </View>


            </View>

            <View>
              <View style={{ padding: 4, alignItems: 'center' }}>
              <Text style={styles.percentValue}>{this.isNumber_(this.props.heroe.powerstats.combat)}</Text>
                <ProgressCircle
                  progress={this.isNumber(this.props.heroe.powerstats.combat)}
                  color={'#18FFFF'}
                  borderColor={'#CFD8DC'}
                  borderWidth={1}
                />
                <Text style={styles.titleCircle}>Combate</Text>
              </View>

              <View style={{ padding: 4, alignItems: 'center' }}>
              <Text style={styles.percentValue}>{this.isNumber_(this.props.heroe.powerstats.strength)}</Text>
                <ProgressCircle
                  progress={this.isNumber(this.props.heroe.powerstats.strength)}
                  color={'#18FFFF'}
                  borderColor={'#CFD8DC'}
                  borderWidth={1}
                />
                <Text style={styles.titleCircle}>Força</Text>
              </View>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewCard: {
    flexDirection: 'row',
    borderRadius: 20,
    paddingHorizontal: 7,
    paddingVertical: 3,
    paddingBottom: 10,
  },

  viewImg: {
    alignItems: 'center'
  },
  img: {
    width: 210,
    height: 190,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: 'white',
    borderWidth: 1
  },
  viewInfo: {
    alignItems: 'flex-start',
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 3,
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: 'white',
    borderWidth: 1
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.8,
    color: '#37474F'
  },
  viewCircle: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleCircle: {
    fontSize: 10
  },
  percentValue: {
    position: 'absolute',
    fontSize: 11,
    alignItems: 'center',
    top: 16
  }
});
