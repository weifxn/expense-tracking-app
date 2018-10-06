import React, { Component } from 'react';
import { TextInput, Text, View,
  TouchableWithoutFeedback,
  Keyboard, FlatList } from 'react-native';
import styles from '../../styles/Styles'
import CardInput from '../../components/CardInput';
import CardButton from '../../components/CardButton';
import ProgressBar from '../../components/ProgressBar';

export default class DetailHistory extends React.Component {
  static navigationOptions = {
    title: "Detail"
  };
  state ={
    listData: this.props.navigation.getParam('listData'),
    newListData: []
  }

  convert = (indexMain, index) => {
    var total = this.state.listData[indexMain][index]
    total = (total/360)*37
    return total
  }

  componentDidMount() {
    const indexMain = this.props.navigation.getParam('index')
    this.setState({
      newListData: [
        this.convert(indexMain, 0),
        this.convert(indexMain, 1),
        this.convert(indexMain, 2),
        this.convert(indexMain, 3)
      ]
    })
  }
  render() {
    var index = this.props.navigation.getParam('index')
    var one = this.state.newListData[0]
    var two = this.state.newListData[1]
    var three = this.state.newListData[2]
    var four = this.state.newListData[3]

    one = parseFloat(one).toFixed(2)
    two = parseFloat(two).toFixed(2)
    three = parseFloat(three).toFixed(2)
    four = parseFloat(four).toFixed(2)
    return (
    
    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <View style={{ padding: 10 }} />

      <Text style={{fontSize: 40, fontWeight: 'bold'}}> Sept {this.state.listData[index][4]}</Text>
                  <View style={{ padding: 10 }} />

      <ProgressBar
            one={this.state.listData[index][0]}
            two={this.state.listData[index][1]}
            three={this.state.listData[index][2]}
            four={this.state.listData[index][3]}
          />

              <Text style={{fontSize: 40, fontWeight: 'bold'}}> Breakfast:RM{one}</Text>
              <Text style={{fontSize: 40, fontWeight: 'bold'}}> Lunch: RM{two}</Text>
              <Text style={{fontSize: 40, fontWeight: 'bold'}}> Dinner: RM{three}</Text>
              <Text style={{fontSize: 40, fontWeight: 'bold'}}> Others: RM{four}</Text>

      <View style={{ flexDirection: 'row'}}>
      

      
      </View>

      </View>
    );
  }
}