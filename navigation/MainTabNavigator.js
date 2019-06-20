import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import TextMessageScreen from '../screens/TextMessageScreen';
import VideoCallScreen from '../screens/VideoCallScreen';


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-home'
          : 'md-home'
      }
    />
  ),
};

const VideoCallStack = createStackNavigator({
  VideoCall: VideoCallScreen,
});

VideoCallStack.navigationOptions = {
  tabBarLabel: 'Video Call',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-videocam' : 'md-videocam'}
    />
  ),
};

const TextMessageStack = createStackNavigator({
  TextMessage: TextMessageScreen,
});

TextMessageStack.navigationOptions = {
  tabBarLabel: 'Text Message',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-text' : 'md-text'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  VideoCallStack,
  TextMessageStack,
});
