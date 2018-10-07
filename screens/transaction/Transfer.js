import * as React from 'react';
import {
  Button,
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
import Modal from 'react-native-modal';


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
    this.props.navigation.navigate('UserMain1');
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
    this.setState({
      checkedOne: false,
      checkedTwo: true,
    });
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
              keyboardType='numeric'
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
              <Text style={styles.input}>{this.state.value}</Text>
              <View style={{ marginTop: 5 }}>
                <Modal
                onBackdropPress={()=> this.setModalVisible(false)}

                  isVisible={this.state.modalVisible}>
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <View style={styles.card}>
                      <TouchableHighlight
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                          this.setState({
                            value: 'CIMB',
                          });
                        }}>
                        <Text style={{fontSize: 30}}>CIMB</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                          this.setState({
                            value: 'Maybank',
                          });
                        }}>
                        <Text style={{fontSize: 30}}>Maybank</Text>
                      </TouchableHighlight>
                      <TouchableHighlight
                        onPress={() => {
                          this.setModalVisible(!this.state.modalVisible);
                          this.setState({
                            value: 'RHB',
                          });
                        }}>
                        <Text style={{fontSize: 30}}>RHB</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
            <CardInput keyboardType='numeric' style={styles.input} placeholder="Enter Amount" />
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
              onBackdropPress={()=>this.setModalPaymentType(false)}
              isVisible={this.state.paymentVisible}>
                  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <View style={styles.card}>
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalPaymentType(!this.state.paymentVisible);
                      this.setState({
                        valuepayment: 'Fund Transfer',
                      });
                    }}>
                    <Text style={{fontSize: 30}}>Fund Transfer</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => {
                      this.setModalPaymentType(!this.state.paymentVisible);
                      this.setState({
                        valuepayment: 'Loan',
                      });
                    }}>
                    <Text style={{fontSize: 30}}>Loan</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </Modal>
            <View style={[styles.card, styles.textfonts]}>
              <Text>{this.state.valuepayment}</Text>
            </View>
          </View>
          <View style={styles.tabBar}>
<View style={{ flexDirection: 'row'}}>
<CardButton 
              name="Cancel" 
              style={styles.cardButtonSmallDelete} 
              onPress = {()=> this.props.navigation.navigate('Main')}
            />
                  <CardButton onPress = {this.onAdd}name="Confirm" style={styles.cardButtonSmall} />

            
            </View>
            <View />
            <View />
          </View>
        </View>
        
      </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}
