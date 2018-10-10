import React from "react";
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
} from "react-native";
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";
import MainModal from "../components/MainModal";
import ProgressBar from "../components/ProgressBar";
import InitialRun from "./initialPages/InitialRun";
import Done from "./initialPages/Done";
import Main from "./homePages/Main";
import styles from "../styles/Styles";

import Moment from "react-moment";

const cat = ["breakfast", "lunch", "dinner", "other"];
var mealIndex = 2;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    modalVisible: false,
    isSpent: true,

    date: null,
    maxDate: null,

    isStart: true,
    isFirst: false,

    amount: null,
    desc: "",

    data: [],

    todayData: [],

    monthAllow: null,

    leftDays: null,

    dayAllowanceTotal: null,
    dayAllowanceLeft: null,

    isMeal: "",
    defaultMealIndex: null
  };

  componentDidMount = () => {
    var now = new Date();
    var _date = now.getDate();
    var hour = now.getHours();
    var maxDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    var _leftDays = maxDays - _date;

    if (hour < 11) {
      mealIndex = 0;
    } else if (hour < 16) {
      mealIndex = 1;
    }

    this.setState({
      date: _date,
      leftDays: _leftDays,
      isMeal: cat[mealIndex],
      defaultMealIndex: mealIndex
    });



    AsyncStorage.getItem("donut").then(itemsJSON => {
      if (itemsJSON === null) {
        this.setState({
          isFirst: true,
          isStart: false
        });
      } else {
        var storage = JSON.parse(itemsJSON);
        console.log(_leftDays);
        console.log(storage[0].leftDays);
        if (_leftDays !== storage[0].leftDays) {
          this.setState({
            todayData: [0, 0, 0, 0],
            dayAllowanceTotal: storage[0].dayAllowanceTotal,
            dayAllowanceLeft: storage[0].dayAllowanceTotal,

            monthAllow: storage[0].totalAllowance,
            monthLeft: storage[0].totalAllowanceLeft,

            modalVisible: true,

            data: storage,
          });
        } else {
          this.setState({
            data: storage,
            modalVisible: true,
            monthAllow: storage[0].totalAllowance,
            monthLeft: storage[0].totalAllowanceLeft,
            leftDays: storage[0].leftDays,
            dayAllowanceTotal: storage[0].dayAllowanceTotal,
            dayAllowanceLeft: storage[0].dayAllowanceLeft,

            todayData: storage[0].todayData
          });
        }
      }
    });
  };

  // for saving
  save = item => {
    AsyncStorage.setItem("donut", JSON.stringify(item));
  };

  // sort [todayData, dayAllowanceLeft, dayTotal,dayofmonth,allowance]
  appendSave = item => {
    const arr = [item, ...this.state.data];
    this.save(arr);
  };

  setIsFirst = () => {
    this.setState({
      isFirst: false,
      todayData: [90, 90, 90, 90]
    });
  };

  setModalVisible(visible) {
    if (!visible) {
      Keyboard.dismiss();
    }
    setTimeout(() => {
      this.setState({ modalVisible: visible });
    });
  }

  changeAmount = num => {
    this.setState({
      amount: num
    });
  };

  changeDesc = text => {
    if (text !== "") {
      this.setState({
        desc: text
      });
    } else {
      this.setState({
        desc: this.state.isMeal
      });
    }
  };

  // initial part
  onDoneAllowance = () => {
    if (this.state.monthAllow !== null) {
      this.props.navigation.navigate("Two", {
        monthAllow: this.state.monthAllow,
        leftDays: this.state.leftDays,
        setIsFirst: this.setIsFirst
      });
    }
  };

  onPressHistory = () => {
    this.props.navigation.navigate("History");
  };

  onPressTransfer = () => {
    this.props.navigation.navigate("Transfer");
    this.setModalVisible(false);
  };
  onPressWithdraw = () => {
    this.props.navigation.navigate("Withdraw");
    this.setModalVisible(false);
  };

  onChangeAllowance = num => {
    this.setState({
      monthAllow: num
    });
    const arr = [num];
    this.save(arr);
  };

  showDate = () => {
    if (this.state.desc === "breakfast") {
      mealIndex = 0;
    } else if (this.state.desc === "lunch") {
      mealIndex = 1;
    } else if (this.state.desc === "dinner") {
      mealIndex = 2;
    } else if (this.state.desc === "") {
      mealIndex = this.state.defaultMealIndex;
    } else {
      mealIndex = 3;
    }

    var amt = this.state.amount;
    var left = this.state.dayAllowanceLeft;
    var total = this.state.dayAllowanceTotal;
    var perc = (amt / total) * 360;

    var amtLeft = parseFloat(left - amt).toFixed(2);

    var now = new Date();
    var maxDate = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    var date = now.getDate();

    var newTodayData = this.state.todayData;
    if (mealIndex === 3) {
      newTodayData[mealIndex] = perc + newTodayData[mealIndex];
    } else {
      newTodayData[mealIndex] = perc;
    }

    var monthLeft = this.state.monthAllow - this.state.dayAllowanceTotal;

    var dleft = maxDate - date;

    this.setState({
      date: date,
      leftDays: dleft,
      todayData: newTodayData,
      dayAllowanceLeft: amtLeft,
      amount: null
    });

    this.appendSave(this.state.todayData);

    var forStorage = {
      totalAllowance: this.state.monthAllow,
      totalAllowanceLeft: monthLeft,
      leftDays: dleft,
      dayAllowanceTotal: total,
      dayAllowanceLeft: amtLeft,
      todayData: this.state.todayData
    };

    console.log(JSON.stringify(forStorage));

    var spent = 1000 / left;

    this.appendSave(forStorage);

    this.setModalVisible(false);
  };

  render() {
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return (
      <View style={styles.container}>
        {this.state.isStart ? (
          <Main
            howMuch={parseFloat(this.state.dayAllowanceLeft).toFixed(2)}
            onPressDone={() => this.setModalVisible(true)}
            one={this.state.todayData[0]}
            two={this.state.todayData[1]}
            three={this.state.todayData[2]}
            four={this.state.todayData[3]}
            onPress={() => this.onPressHistory()}
            days={this.state.leftDays}
            multiplyNew={parseFloat(
              this.state.leftDays * this.state.dayAllowanceLeft
            ).toFixed(2)}
            multiply={parseFloat(
              (this.state.leftDays - 10) * this.state.dayAllowanceLeft
            ).toFixed(2)}
          />
        ) : (
          <View>
            {this.state.isFirst ? (
              <View>
                <InitialRun
                  changeText={this.onChangeAllowance}
                  onPressDone={() => this.onDoneAllowance()}
                />
              </View>
            ) : (
              <Done
                one={this.state.todayData[0]}
                two={this.state.todayData[1]}
                three={this.state.todayData[2]}
                four={this.state.todayData[3]}
                monthLeft={this.props.navigation.getParam("monthLeft")}
                leftDays={this.state.leftDays}
                dayTotal={this.props.navigation.getParam("dayTotal")}
                onPressDone={() => {
                  this.setState({
                    isStart: true,
                    dayAllowanceTotal: this.props.navigation.getParam(
                      "dayTotal"
                    ),
                    dayAllowanceLeft: this.props.navigation.getParam(
                      "dayTotal"
                    ),
                    todayData: [0, 0, 0, 0]
                  });
                }}
              />
            )}
          </View>
        )}

        <MainModal
          isVisible={this.state.modalVisible}
          onSwipe={() => this.setModalVisible(false)}
          onBackdropPress={() => this.setModalVisible(false)}
          isSpent={this.state.isSpent}
          setIsSpent={() => this.setState({ isSpent: !this.state.isSpent })}
          onPressCancel={() => this.setModalVisible(false)}
          onPressDone={() => this.showDate()}
          descValue={this.state.isMeal}
          descOnChangeText={this.changeDesc}
          moneyValue={this.state.amount}
          moneyOnChangeText={this.changeAmount}
          onPressTransfer={() => this.onPressTransfer()}
          onPressWithdraw={() => this.onPressWithdraw()}
        />
      </View>
    );
  }
}
