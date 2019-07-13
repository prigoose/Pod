import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import RecordScreen from '../screens/RecordScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name='ios-home'
    />
  ),
  tabBarOptions: {
    showLabel: false, // this should probably be somewhere else but it works for now; hacky
  }
};

HomeStack.path = '';

const SearchStack = createStackNavigator(
  {
    Links: SearchScreen,
  },
  config
);

SearchStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='ios-search' />
  ),
};

SearchStack.path = '';

const NotificationsStack = createStackNavigator(
  {
    Settings: NotificationsScreen,
  },
  config
);

NotificationsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='ios-notifications' />
  ),
};

NotificationsStack.path = '';

const RecordStack = createStackNavigator(
  {
    Settings: RecordScreen,
  },
  {...config, cardStyle: { backgroundColor: 'teal' } },
);

RecordStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name='ios-microphone' />
  ),
};

RecordStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SearchStack,
  NotificationsStack,
  RecordStack,
});

tabNavigator.path = '';

export default tabNavigator;
