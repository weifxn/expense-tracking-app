import React from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Modal from 'react-native-modal';
import CardButton from './CardButton'

import styles from '../styles/Styles'

export default class MainModal extends React.Component {

  render() {
    return (
      <Modal
        isVisible={this.props.isVisible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={this.props.onBackdropPress}
        onSwipe={this.props.onSwipe}
        swipeDirection="left"
        >
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <View style={styles.card}> 
            <Text style={styles.mainModalFont}>
              I have
            </Text>

            <View style={{ flexDirection: 'row'}}>

              <TouchableOpacity onPress={this.props.setIsSpent}>
              <Text style={styles.mainModalFont}>
                {this.props.isSpent ? 'spent' : 'received'} RM
              </Text>
              </TouchableOpacity>

              <TextInput
                style={styles.mainModalFontInput}
                placeholder="0.00"
                autoFocus={true}
                keyboardType='decimal-pad'
                value={this.props.moneyValue}
                onChangeText={this.props.moneyOnChangeText}
              />
            </View>

            <View style={{ flexDirection: 'row'}}>

              <Text style={styles.mainModalFont}>
                on{" "}
              </Text>

              <TextInput
                style={styles.mainModalFontInput}
                value={this.props.descValue}
                clearTextOnFocus={true}
                autoCapitalize = 'none'
                onChangeText={this.props.descOnChangeText}
              />

            </View>


          </View>
          <View style={{ flexDirection: 'row' }}>

          <CardButton
            name="Cancel"
            style={styles.cardButtonSmallDelete}
            onPress={this.props.onPressCancel}
          />
          <CardButton
            name="Done"
            style={styles.cardButtonSmall}
            onPress={this.props.onPressDone}
          />
          </View>

          
        </View>

        <KeyboardAvoidingView behavior="padding" />
      </Modal>
    );
  }
}
