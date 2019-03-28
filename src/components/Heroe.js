import React, {Component} from 'react';
import {
   Text,
   View,
   Button,
   TouchableHighlight,
   TextInput,
   StyleSheet,
   ImageBackground
 } from 'react-native';

import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loading from './Loading';
import Scroll from './Scroll';

const img = require('../imgs/heroes.jpg');

export default class HeroeCard extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', heroes: [], isLoading: false }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPressed = this.onPressed.bind(this);
  }

  static navigationOptions = {
       header: null
  }

  handleSearch(value) {
    this.setState({ name: value });
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    axios.get(`https://superheroapi.com/api/2229712050679855/search/batman`)
    .then(res => {
      var heroes = res.data;
      var jsonObj = heroes["results"];
      var lista = [];

      for(var i = 0; i < jsonObj.length; i++) {
        var stringified = JSON.stringify(jsonObj[i]);
        stringified = stringified.replace("full-name", "full_name");
        stringified = stringified.replace("group-affiliation", "group_affiliation");
        lista.push(JSON.parse(stringified));
      }

      this.setState({ heroes: lista });
      this.setState({ isLoading: false })
    })
    .catch(error => { this.setState({ isLoading: false }) });
  }

  handleSubmit() {
    this.setState({ isLoading: true })
    axios.get(`https://superheroapi.com/api/2229712050679855/search/${this.state.name}`)
    .then(res => {
      var heroes = res.data;
      var jsonObj = heroes["results"];
      var lista = [];

      for(var i = 0; i < jsonObj.length; i++) {
        var stringified = JSON.stringify(jsonObj[i]);
        stringified = stringified.replace("full-name", "full_name");
        stringified = stringified.replace("group-affiliation", "group_affiliation");
        lista.push(JSON.parse(stringified));
      }

      this.setState({ heroes: lista });
      this.setState({ isLoading: false })
    })
    .catch(error => { this.setState({ isLoading: false }) });
  }

  onPressed(heroe) {
    this.props.navigation.navigate('Profile', {heroe: heroe});
  }

  render() {
    return (
      <LinearGradient colors={['#20011f', '#61045f']} style={styles.view}>
        <View style={{ flex: 1 }}>
          <View style={styles.viewInput}>
            <TextInput
              value={this.state.name}
              onChangeText={(value) => this.handleSearch(value)}
              style={styles.input}
            />
            <TouchableHighlight
              onPress={this.handleSubmit}
              style={styles.buttonSearch}
            >
              <Icon name="search" size={22} color="white"/>
            </TouchableHighlight>
          </View>


          <Loading show={this.state.isLoading} type={"Wave"}/>

          { this.state.isLoading ? (null) : (<Scroll heroes={this.state.heroes} onPressed={this.onPressed} />) }

        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1
  },
  viewInput: {
    padding: 10,
    flexDirection: 'row',
    width: '100%'
  },
  buttonSearch: {
    backgroundColor: '#03DAC6',
    padding: 5,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginLeft: 10
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingLeft: 10,
    paddingHorizontal: 1,
    flex: 1,
    height: 40
  }
});
