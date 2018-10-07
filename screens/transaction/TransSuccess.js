import React, { Component } from 'react';
import { AppRegistry, View, Image,Text } from 'react-native';
import styles from '../../styles/Styles';
import CardButton from '../../components/CardButton';

export default class DisplayAnImage extends Component {
  static navigationOptions = {
    header: null,
  };
  onAdd = () => {this.props.navigation.navigate('Main');}
  render() {
    return (
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
       <View style={{ padding: 50 }} />
        <Image
          style={{ width: 40, height: 50,paddingTop:350,paddingLeft:350}}
          source={{
            uri: 'https://png.pngtree.com/svg/20161227/a_completed_1323890.png',
          }}
        />
        <Text style={{fontSize: 30, textAlign: 'center'}}>Transaction Success!</Text>
        <CardButton
              name="Okay"
              style={[styles.withdrawalOK,styles.cardButton]}
              onPress={this.onAdd}
            />
      </View>
    );
  }
}

