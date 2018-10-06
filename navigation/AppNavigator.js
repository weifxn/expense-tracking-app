
import React from 'react';
import main from '../screens/HomeScreen';
import two from '../screens/initialPages/PageTwo';
import three from '../screens/initialPages/PageThree';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Main: main,
    PageTwo: two,
    PageThree: three,
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