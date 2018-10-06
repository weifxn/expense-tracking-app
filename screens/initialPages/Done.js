import React, { Component } from 'react';
import {
  TextInput,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import styles from '../../styles/Styles';
import CardInput from '../../components/CardInput';
import CardButton from '../../components/CardButton';
import ProgressBar from '../../components/ProgressBar';

export default class Done extends React.Component {
  render() {
    return (
      <View style={{ flex: 1,flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
        <View style={{ padding: 20 }} />
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
        <Text style={{ fontSize: 60, fontWeight: 'bold' }}>
          RM{this.props.monthLeft}
        </Text>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>÷</Text>
        <Text style={{ fontSize: 60, fontWeight: 'bold' }}>
          {this.props.leftDays} days
        </Text>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>↓</Text>
        <Text style={{ fontSize: 70, fontWeight: 'bold' }}>
          RM{this.props.dayTotal}
        </Text>
        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
          to spend in a day
        </Text>
        <View style={{ padding: 20 }} />
        
        <ProgressBar
          one={this.props.one}
          two={this.props.two}
          three={this.props.three}
          four={this.props.four}
        />
        <View style={{ flexDirection: 'row'}}>
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#f9bc2e' }}>
            Breakfast {'   '}
          </Text>
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#4da6bb' }}>
            Lunch {'    '}
          </Text>
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#bae67e' }}>
            Dinner {'    '}
          </Text>
          <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#f44259' }}>
            Others{' '}
          </Text>
        </View>
        </View>

        <View>
        <CardButton
          name="Let's get started"
          style={styles.cardButton}
          onPress={this.props.onPressDone}
        />
        <View style={{ padding: 20 }} />
        </View>
      </View>
    );
  }
}
