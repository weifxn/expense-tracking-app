
import React from 'react';
import main from '../screens/HomeScreen';
import two from '../screens/initialPages/PageTwo';
import three from '../screens/initialPages/PageThree';
import history from '../screens/homePages/History'
import dhistory from '../screens/homePages/DetailHistory'
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Main: main,
    Two: two,
    Three: three,
    History: history,
    DHistory: dhistory
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