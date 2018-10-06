import * as React from 'react';
import {
  Button,
  Modal,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import styles from '../../styles/Styles';
import CardButton from '../../components/CardButton';
import CardInput from '../../components/CardInput';
import { CheckBox } from 'react-native-elements';
import { Component } from 'react';



export default class Transfer extends React.Component {
  static navigationOptions = {
    title: "Transfer"
  };
  state = {
    checkedOne: true,
    checkedTwo: false,
    checkedThree: true,
    checkedFour: false,
    number: 1,
    textInputValue: '',
    modalVisible: false,
    paymentVisible: false,
    selectBanks: '',
    value: '',
    valuepayment: '',
  };
onAdd = () => {
    this.props.navigation.navigate('Amount');
  };

  changeChecked = () => {
    this.setState({
      checkedOne: !this.state.checkedOne,
      checkedTwo: !this.state.checkedTwo,
    });
  };

  changeChecked1 = () => {
    this.setState({
      checkedThree: !this.state.checkedThree,
      checkedFour: !this.state.checkedFour,
    });
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  onPressOtherBank = () => {
    this.setModalVisible(true);
    this.changeChecked();
  };
  setModalPaymentType(visible) {
    this.setState({ paymentVisible: visible });
  }
  onPressOtherPayment = () => {
    this.setModalPaymentType(true);
  };

  render() {
    return (
      <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      
        <View style={styles.container}>
          <View>
            <CardInput
            kt='numeric'
              style={styles.input}
              placeholder="Enter Account Number"
            />
            <View>
              <CheckBox
                title="within Hong Leong Bank"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={this.state.checkedOne}
                onPress={() => this.changeChecked()}
              />
              <CheckBox
                title="to Other Bank"
                checkedIcon="dot-circle-o"
                uncheckedIcon="circle-o"
                checked={this.state.checkedTwo}
                onPress={() => this.onPressOtherBank()}
              />
              <View style={{ marginTop: 22 }}>
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={this.state.modalVisible}
                  onRequestClose={() => {}}>
                  <View style={{ marginTop: 22 }}>
                    <View>
                      <TouchableHighlight
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                          this.setState({
                            value: 'CIMB',
                          });
                        }}>
                        <Text>CIMB</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                          this.setState({
                            value: 'Maybank',
                          });
                        }}>
                        <Text>Maybank</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                          this.setState({
                            value: 'RHB',
                          });
                        }}>
                        <Text>RHB</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
            <CardInput kt='numeric' style={styles.input} placeholder="Enter Amount" />
            <CheckBox
              title="Normal Transfer"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.state.checkedThree}
              onPress={() => this.changeChecked1()}
            />
            <CheckBox
              title="Instant Transfer"
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
              checked={this.state.checkedFour}
              onPress={() => this.changeChecked1()}
            />
            <TouchableHighlight onPress={() => this.onPressOtherPayment()}>
              <View style={[styles.card, styles.textfonts]}>
                <Text>Select Type Of Transfer:</Text>
              </View>
            </TouchableHighlight>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.paymentVisible}
              onRequestClose={() => {}}>
              <View style={{ marginTop: 22 }}>
                <View>
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalPaymentType(!this.state.paymentVisible);
                      this.setState({
                        valuepayment: 'Fund Transfer',
                      });
                    }}>
                    <Text>Fund Transfer</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalPaymentType(!this.state.paymentVisible);
                      this.setState({
                        valuepayment: 'Loan',
                      });
                    }}>
                    <Text>Loan</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            <View style={[styles.card, styles.textfonts]}>
              <Text>{this.state.valuepayment}</Text>
            </View>
          </View>
          <View style={styles.tabBar}>
            <CardButton 
              name="Cancel" 
              style={styles.cardButton} 
            />
            <View />
            <CardButton func = {this.onAdd}name="Confirm" style={styles.cardButton} />
            <View />
          </View>
        </View>
        
      </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}
