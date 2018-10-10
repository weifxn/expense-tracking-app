import React, { Component } from "react";
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Keyboard,
  FlatList,
  ScrollView
} from "react-native";
import styles from "../../styles/Styles";
import CardInput from "../../components/CardInput";
import CardButton from "../../components/CardButton";
import ProgressBar from "../../components/ProgressBar";

export default class History extends React.Component {
  static navigationOptions = {
    title: "History"
  };
  state = {
    listData: this.props.navigation.getParam("listData")
  };

  onPressBar = index => {
    this.props.navigation.navigate("DHistory", {
      index: index,
      listData: this.state.listData
    });
  };

  _keyExtractor = (listData, index) => listData[4];

  renderList = ({ item, index }) => (
    <View style={{ paddingTop: 20 }}>
      <Text style={{ fontSize: 20, padding: 2 }}>
        {item[5]}/{item[4]}
      </Text>
      <TouchableOpacity onPress={() => this.onPressBar(index)}>
        <ProgressBar
          one={item[0]}
          two={item[1]}
          three={item[2]}
          four={item[3]}
          onPress={() => this.onPressBar(index)}
        />
      </TouchableOpacity>
    </View>
  );
  render() {
    return (
      <ScrollView>
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <FlatList
            extraData={this.state}
            data={this.state.listData}
            renderItem={this.renderList}
            keyExtractor={this._keyExtractor}
          />
          <View style={{ flexDirection: "row" }} />
        </View>
      </ScrollView>
    );
  }
}
