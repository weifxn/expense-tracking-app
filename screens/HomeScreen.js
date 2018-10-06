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
import Done from './initialPages/Done';
import Main from './homePages/Main'
import styles from '../styles/Styles'

import Moment from 'react-moment';

const cat = ['breakfast', 'lunch', 'dinner', 'other']

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    modalVisible: false,
    isSpent: true,

    date: null,
    maxDate: null,

    isStart: true,
    isFirst: false,

    amount: null,
    desc: '',

    data: [],

    todayData: [],

    monthAllow: null,
    
    leftDays: null,

    dayTotal: null,
    dayLeft: null,

    isMeal: '',
    defaultMealIndex: null
  }

  componentDidMount = () => {
    var now = new Date();
    var _date = now.getDate();
    var hour = now.getHours();
    var maxDays = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    var _leftDays = maxDays - _date
    

    var mealIndex = 2
    if(hour < 12) {
      mealIndex = 0
    }
    else if (hour < 16) {
      mealIndex = 1
    }

    this.setState({
      date: _date,
      leftDays: _leftDays,
      isMeal: cat[mealIndex],
      defaultMealIndex: mealIndex
    })

    AsyncStorage.getItem('isfifia').then(itemsJSON => {
      if (itemsJSON === null) {
        this.setState({
          isFirst: true,
          isStart: false
        })
      } else {
        this.setState({
          data: JSON.parse(itemsJSON),
          modalVisible: true
        })
      }
    })
  }

  save = item => {
    AsyncStorage.setItem('isfifi', JSON.stringify(item));
  };

  setIsFirst = () => {
    this.setState({
      isFirst: false,
      dayTotal: this.props.navigation.getParam('dayTotal'),
      dayLeft: this.props.navigation.getParam('dayTotal'),
      todayData: [90,90,90,90]
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

  

  changeAmount = (num) => {
    this.setState({
      amount: num
    })
  }

  changeDesc = text => {
    if(text !== '') {
      this.setState({
        desc: text
      })
    } else {
      this.setState({
        desc: this.state.isMeal
      })
    }
  }


  // initial part
  onDoneAllowance = () => {
    if(this.state.monthAllow !== null) {
      this.props.navigation.navigate('Two', {
        monthAllow: this.state.monthAllow,
        leftDays: this.state.leftDays,
        setIsFirst: this.setIsFirst
      });
    }
  }


  onChangeAllowance = num => {
    this.setState({
      monthAllow: num
    })
    const arr = [num]
    this.save(arr)
  }


  showDate = () => {
    var mealIndex = 0
    if(this.state.desc === "breakfast") {
      mealIndex = 0
    }
    else if (this.state.desc === "lunch") {
      mealIndex = 1
    }
    else if (this.state.desc === "dinner") {
      mealIndex = 2
    }
    else if (this.state.desc === "") {
      mealIndex = this.state.defaultMealIndex
    }
    else {
      mealIndex = 3
    }
  

    var amt = this.state.amount
    var left = this.state.dayLeft
    var total = this.state.dayTotal
    var perc = (amt/total) * 360
    const amtLeft = left - amt

    var now = new Date();
    var maxDate = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate()
    var date = now.getDate();

    const newTodayData = this.state.todayData
    newTodayData[mealIndex] = perc


    this.setState({
        date: date,
        todayData: newTodayData,
        dayLeft: amtLeft
    })
    var left = maxDate - date
    var spent = 1000 / left

    this.setModalVisible(false)
  }


  render() {
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return (
      <View style={styles.container}>
      {this.state.isStart ? (
        <Main 
          howMuch={this.state.dayLeft}
          onPressDone={()=>this.setModalVisible(true)}
          one={this.state.todayData[0]}
          two={this.state.todayData[1]}
          three={this.state.todayData[2]}
          four={this.state.todayData[3]}
        />
        ) : (

        <View>
          
          {this.state.isFirst ? (
            <View>
            <InitialRun 
              changeText={this.onChangeAllowance}
              onPressDone={()=>this.onDoneAllowance()}
            />
            </View>
            ) : (

            <Done
              one={this.state.todayData[0]}
              two={this.state.todayData[1]}
              three={this.state.todayData[2]}
              four={this.state.todayData[3]}
              monthLeft={this.props.navigation.getParam('monthLeft')}
              leftDays={this.state.leftDays} 
              dayTotal={this.props.navigation.getParam('dayTotal')}
              onPressDone={()=>this.setState({
                isStart: true,
                dayTotal: this.props.navigation.getParam('dayTotal'),
                dayLeft: this.props.navigation.getParam('dayTotal'),
                todayData: [0,0,0,0]
              })}
            />

          )}

        </View>

        )}
            

          <MainModal
            isVisible={this.state.modalVisible}
            onSwipe={() => this.setModalVisible(false)}
            onBackdropPress={() => this.setModalVisible(false)}
            isSpent={this.state.isSpent}
            setIsSpent={() => this.setState({ isSpent: !this.state.isSpent})}
            onPressCancel={() => this.setModalVisible(false)}
           
            onPressDone={()=>this.showDate()}


            descValue={this.state.isMeal}
            descOnChangeText={this.changeDesc}

            moneyValue={this.state.amount}
            moneyOnChangeText={this.changeAmount}

          />
      </View>
    );
  }
}


