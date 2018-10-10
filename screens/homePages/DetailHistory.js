import React, { Component } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  ScrollView
} from "react-native";
import styles from "../../styles/Styles";
import CardInput from "../../components/CardInput";
import CardButton from "../../components/CardButton";
import ProgressBar from "../../components/ProgressBar";

export default class DetailHistory extends React.Component {
  static navigationOptions = {
    title: "Detail"
  };
  state = {
    listData: this.props.navigation.getParam("listData"),
    newListData: []
  };

  convert = (indexMain, index) => {
    var total = this.state.listData[indexMain][index];
    var dayAllowanceTotal = this.state.listData[indexMain][6];
    total = (total / 360) * dayAllowanceTotal;
    return total;
  };

  componentDidMount() {
    const indexMain = this.props.navigation.getParam("index");
    this.setState({
      newListData: [
        this.convert(indexMain, 0),
        this.convert(indexMain, 1),
        this.convert(indexMain, 2),
        this.convert(indexMain, 3)
      ]
    });
  }
  render() {
    var index = this.props.navigation.getParam("index");
    var one = this.state.newListData[0];
    var two = this.state.newListData[1];
    var three = this.state.newListData[2];
    var four = this.state.newListData[3];

    one = parseFloat(one).toFixed(2);
    two = parseFloat(two).toFixed(2);
    three = parseFloat(three).toFixed(2);
    four = parseFloat(four).toFixed(2);
    return (
      <ScrollView>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <View style={{ padding: 10 }} />

          <Text style={{ fontSize: 40, fontWeight: "bold" }}>
            {" "}
            {this.state.listData[index][5]}/{this.state.listData[index][4]}
          </Text>
          <View style={{ padding: 10 }} />

          <View style={{ padding: 30 }} />
          <ProgressBar
            one={this.state.listData[index][0]}
            two={this.state.listData[index][1]}
            three={this.state.listData[index][2]}
            four={this.state.listData[index][3]}
          />

          <View style={{ padding: 25 }} />

          <Text
            style={{
              padding: 10,
              fontSize: 40,
              fontWeight: "bold",
              color: "#f9bc2e"
            }}
          >
            {" "}
            Breakfast
          </Text>
          <Text style={{ paddingBottom: 15, fontSize: 30, fontWeight: "bold" }}>
            RM
            {one}
          </Text>
          <Text
            style={{
              padding: 10,
              fontSize: 40,
              fontWeight: "bold",
              color: "#4da6bb"
            }}
          >
            {" "}
            Lunch
          </Text>
          <Text style={{ paddingBottom: 15, fontSize: 30, fontWeight: "bold" }}>
            RM
            {two}
          </Text>
          <Text
            style={{
              padding: 10,
              fontSize: 40,
              fontWeight: "bold",
              color: "#bae67e"
            }}
          >
            {" "}
            Dinner{" "}
          </Text>
          <Text style={{ paddingBottom: 15, fontSize: 30, fontWeight: "bold" }}>
            {" "}
            RM
            {three}
          </Text>
          <Text
            style={{
              padding: 10,
              fontSize: 40,
              fontWeight: "bold",
              color: "#f44259"
            }}
          >
            {" "}
            Others
          </Text>
          <Text style={{ paddingBottom: 15, fontSize: 30, fontWeight: "bold" }}>
            RM
            {four}
          </Text>

          <View style={{ flexDirection: "row" }} />
        </View>
      </ScrollView>
    );
  }
}
