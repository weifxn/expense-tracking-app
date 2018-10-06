import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  Alert,
  AsyncStorage
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import MainModal from '../components/MainModal';
import ProgressBar from '../components/ProgressBar';
import InitialRun from './initialPages/InitialRun';
import styles from '../styles/Styles'

import Moment from 'react-moment';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    modalVisible: false,
    isSpent: true,

    date: null,
    maxDate: null,

    isFirst: false,
    amount: null,

    data: [],

    todayData: {
      breakfast: null,
      lunch: null,
      dinner: null,
      other: null
    }
  }

  componentDidMount = () => {
    var now = new Date();
    var _date = now.getDate();
    var _maxDate = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();

    this.setState({
      date: _date,
      maxData: _maxDate
    })

    AsyncStorage.getItem('isFirst').then(itemsJSON => {
      if (itemsJSON === null) {
        this.setState({
          isFirst: true
        })
      } else {
        this.setState({
          data: JSON.parse(itemsJSON),
          modalVisible: true
        })
      }
    })


  }

  setModalVisible(visible) {
    if(!visible) {
      Keyboard.dismiss()
    }
    setTimeout(()=> {
      this.setState({modalVisible: visible})
    })
  }

  showDate = () => {
    var now = new Date();
    
    var maxDate = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate()
    var date = now.getDate();
    this.setState({
      date: date
    })
    var left = maxDate - date
    var spent = 1000 / left
    
    Alert.alert(spent + '.' + this.state.amount)
  }

  changeAmount = (num) => {
    this.setState({
      amount: num
    })
  }


  render() {
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return (
      <View style={styles.container}>
      <View>
          
          {this.state.isFirst ? (
            <View>
            <InitialRun />
            </View>
            ) : (
            <View>
            <Text> HEllo old </Text>
            <ProgressBar 
              one={this.state.todayData.breakfast}
              two={this.state.todayData.lunch}
              three={this.state.todayData.dinner}
              four={this.state.todayData.other}
            />

            </View>

          )}

        </View>
            
            
          

          

          <MainModal
            isVisible={this.state.modalVisible}
            onSwipe={() => this.setModalVisible(false)}
            onBackdropPress={() => this.setModalVisible(false)}
            isSpent={this.state.isSpent}
            setIsSpent={() => this.setState({ isSpent: !this.state.isSpent})}
            onPressCancel={() => this.setModalVisible(false)}
            moneyOnChangeText={this.changeAmount}
            onPressDone={()=>this.showDate()}
            descValue="dinner"
            moneyValue={this.state.amount}

          />
      </View>
    );
  }
}


