import React, {Component} from 'react';
import { Text, View, ScrollView, TouchableHighlight } from 'react-native';
import Card from './Card';

export default class Scroll extends Component {
  render() {
    return(
      <ScrollView>
          <View>
            { this.props.heroes.map(iten => (
              <TouchableHighlight
                key={iten.id}
                onPress={() => this.props.onPressed(iten)}
              >
              <Card key={iten.id}
               heroe={iten}
               img={iten.image.url}
               name={iten.name}
              />
              </TouchableHighlight>
             ))
            }
          </View>
      </ScrollView>
    );
  }
}
