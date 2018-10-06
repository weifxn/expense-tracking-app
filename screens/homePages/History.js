import React, { Component } from 'react';
import { TextInput, Text, View,
  TouchableOpacity,
  Keyboard, FlatList } from 'react-native';
import styles from '../../styles/Styles'
import CardInput from '../../components/CardInput';
import CardButton from '../../components/CardButton';
import ProgressBar from '../../components/ProgressBar';

export default class History extends React.Component {
  static navigationOptions = {
    title: "History"
  };
  state ={
    listData: [
    [20,70,80,80,'24'],
    [40,60,70,40,'23'],
    [30,70,90,100,'22'],
    [50,60,100,130,'21'],
    [50,70,80,80,'20'],
    [40,70,70,40,'19'],
    [50,60,70,90,'18'],
    [30,60,80,100,'17'],
    [40,50,80,50,'16'],
    [50,60,90,30,'15'],
    [10,50,70,50,'14'],
    [40,50,100,50,'13'],
    [40,70,110,90,'12'],
    [50,60,90,110,'11'],
    [40,70,60,70,'10'],
    [50,60,70,80,'9'],
    [10,90,80,150,'8'],

    ]
  }

  onPressBar = (index) => {
    this.props.navigation.navigate('DHistory', {
      index: index,
      listData: this.state.listData
    })
  }


  _keyExtractor = (listData, index) => listData[4];

  renderList = ({ item, index }) => (
    <View style={{paddingTop: 20}}>
    <Text style={{fontSize: 20, padding: 2}}>September {item[4]}</Text>
    <TouchableOpacity
      onPress={()=>this.onPressBar(index)}
    >
      <ProgressBar
            one={item[0]}
            two={item[1]}
            three={item[2]}
            four={item[3]}
            onPress={()=>this.onPressBar(index)}
          />
      </TouchableOpacity>
    </View>

  )
  render() {
    return (
    
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
      <FlatList
          extraData={this.state}
          data={this.state.listData}
          renderItem={this.renderList}
          keyExtractor={this._keyExtractor}
        />
      <View style={{ flexDirection: 'row'}}>
      

      
      </View>

      </View>
    );
  }
}