'use strict'

import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
// Screens
import TabOneScreenOne from './views/TabOneScreenOne';
import TabOneScreenTwo from './views/TabOneScreenTwo';
import TabOneScreenThree from './views/TabOneScreenThree';
import TabOneScreenFour from './views/TabOneScreenFour';

const SideDrawer = (props) => {
  return (
    <View style={{flex:1}}>
      <View style={{width:300,height:300,backgroundColor:'red'}}>

      </View>
      <DrawerItems {...props} />
    </View>
  )
};


const styles = StyleSheet.create({
    container: {
      flex:1
    },
    drawerHeader: {
      flex:1
    }
});
const stackNavigatorConfiguration = {
  headerMode: 'none',
}
const tabOneDrawerOne = StackNavigator({
  TabOneScreenOne: { screen: TabOneScreenOne },
  },
  stackNavigatorConfiguration
);

const tabOneDrawerTwo = StackNavigator({
  TabOneScreenTwo: { screen: TabOneScreenTwo },
  },
  stackNavigatorConfiguration
);

const tabOneDrawerThree = StackNavigator({
  TabOneScreenThree: { screen: TabOneScreenThree },
  },
  stackNavigatorConfiguration
);

const tabOneDrawerFour = StackNavigator({
  TabOneScreenFour: { screen: TabOneScreenFour },
  },
  stackNavigatorConfiguration
);

const routeConfiguration = {
  TabOneDrawerOne: { screen: tabOneDrawerOne },
  TabOneDrawerTwo: { screen: tabOneDrawerTwo },
  TabOneDrawerThree: { screen: tabOneDrawerThree },
  TabOneDrawerFour: { screen: tabOneDrawerFour },
}
// going to disable the header for now
const DrawerNavigatorConfiguration = {
  initialRouteName: 'TabOneDrawerOne',
  contentComponent: SideDrawer,
}
export const NavigatorTabOne = DrawerNavigator(routeConfiguration, DrawerNavigatorConfiguration);