
import React from 'react';
import main from '../screens/HomeScreen';
import two from '../screens/initialPages/PageTwo';
import three from '../screens/initialPages/PageThree';
import history from '../screens/homePages/History'
import dhistory from '../screens/homePages/DetailHistory'

import withdraw from '../screens/transaction/Withdraw';
import transfer from '../screens/transaction/Transfer';
import userMain from '../screens/transaction/Successmonkey1';
import userMain1 from '../screens/transaction/Successmonkey1.1';
import edit from '../screens/transaction/Successmonkey2';
import add from '../screens/transaction/Successmonkey3';
import sendTAC from '../screens/transaction/sendTAC';
import add1 from '../screens/transaction/TransSuccess';
import add2 from '../screens/transaction/WithdrawSuccess';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Main: main,
    Two: two,
    Three: three,
    History: history,
    DHistory: dhistory,

    Withdraw: withdraw,
    Transfer: transfer,
    UserMain: userMain,
    UserMain1: userMain1,
    Edit:edit,
    Add: add,
    Add1: add1,
    Add2: add2,
    sendTAC: sendTAC

  },
  {
    initialRouteName: 'Main',
  }
);



export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}