import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';



export default class App extends React.Component {
  render(){
  return (
    <Appcontainer/>
  );
 }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory:WriteStoryScreen,
  ReadSTory:ReadStoryScreen,
})

defaultNavigationOptions:({navigation})=>({
tabBarIcon:()=>{
  const rootName = navigation.state.rootName;
  if(rootName === "WriteStory"){
    return(
    <Image
    source={require('./assets/write.png')}
    style={{width:40,height:40}}/>
    )
  }else if(rootName === 'ReadStory'){
    return(
      <Image
      source={require('./assets/read.png')}
      style={{width:40,height:40}}/>
      )
  }
}
})

const Appcontainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'coral',
    alignItems:'center',
    justifyContent:'center',
  }
})