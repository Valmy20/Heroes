import React, {Component} from 'react';
import {Text, View, ScrollView, TextInput, StyleSheet, Image} from 'react-native';
import CircleProgress from './CircleProgress';
import LinearGradient from 'react-native-linear-gradient';

import axios from 'axios';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { heroe: [] }
    this.isNumber = this.isNumber.bind(this);
  }

  static navigationOptions = {
    headerStyle: { backgroundColor: '#37474F' }
  }

  componentWillMount() {
    const heroe = this.props.navigation.getParam('heroe');
    this.setState({ heroe: heroe });
    console.log(heroe);
  }

  isNumber(value) {
    if (isNaN(value)) {
      return 0
    } else {
      return value / 100
    }
  }

  render() {
    const { heroe } = this.state;
    return (
      <LinearGradient colors={['#263238', '#546E7A', '#455A64']}>
        <View>
          <ScrollView>

            <View style={styles.viewImg}>
              <Image source={{uri: heroe.image.url }} style={styles.img} />
            </View>
            <View style={styles.viewNames}>
              <Text style={styles.name}>{heroe.name}</Text>
              <Text style={styles.full_name}>{heroe.biography.full_name}</Text>
            </View>

            <ScrollView horizontal={true}>
              <CircleProgress
                textCircle="Inteligência"
                progress={ this.isNumber(heroe.powerstats.intelligence) }
              />
              <CircleProgress
                textCircle="Força"
                progress={ this.isNumber(heroe.powerstats.strength) }
              />
              <CircleProgress
                textCircle="Velocidade"
                progress={ this.isNumber(heroe.powerstats.speed) }
              />
              <CircleProgress
                textCircle="Resistência"
                progress={this.isNumber(heroe.powerstats.durability) }
              />
              <CircleProgress
                textCircle="Poder"
                progress={ this.isNumber(heroe.powerstats.power) }
              />
              <CircleProgress
                textCircle="Combate"
                progress={ this.isNumber(heroe.powerstats.combat) }
              />
            </ScrollView>

            <View style={styles.viewAppearance}>
              <Text style={{ color: 'white', fontSize: 25}}>Características</Text>
              <View style={styles.viewInfo}>
                <Text style={styles.titleAppearance}>raça - </Text>
                <Text style={styles.infoAppearance}>{heroe.appearance.race}</Text>
              </View>
              <View style={styles.viewInfo}>
                <Text style={styles.titleAppearance}>altura - </Text>
                <Text style={styles.infoAppearance}>{heroe.appearance.height}</Text>
              </View>
              <View style={styles.viewInfo}>
                <Text style={styles.titleAppearance}>peso - </Text>
                <Text style={styles.infoAppearance}>{heroe.appearance.weight[1]}</Text>
              </View>
            </View>

            <View style={styles.viewConnections}>
              <View>
                <Text style={styles.titleConnections}>Afiliações</Text>
                <Text style={styles.infoConnections}>{heroe.connections.group_affiliation}</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  viewNames: {
    alignItems: 'center'
  },
  name: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#CFD8DC'
  },
  full_name: {
    color: '#CFD8DC'
  },
  viewImg: {
    alignItems: 'center'
  },
  img: {
    width: 230,
    height: 230,
    borderRadius: 10,
    margin: 10
  },
  textCircle: {
    position: 'absolute',
    top: 40,
    left: 33
  },
  viewAppearance: {
    backgroundColor: '#26C6DA',
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  viewInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  titleAppearance: {
    color: 'white',
    fontSize: 18
  },
  infoAppearance: {
    marginTop: 4,
    color: 'white',
    fontSize: 14
  },
  viewConnections: {
    backgroundColor: '#26C6DA',
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  titleConnections: {
    fontSize: 25,
    color: 'white'
  },
  infoConnections: {
    color: 'white'
  }
});
