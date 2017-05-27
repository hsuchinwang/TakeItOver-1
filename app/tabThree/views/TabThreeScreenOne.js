'use strict'
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';
import { reset } from '../../actions/tabThreeAction';
import Ionicons from 'react-native-vector-icons/Ionicons';
{/*<Icon.Button name="qrcode" color="#000" backgroundColor="#eeeef2" onPress={() => navigation.navigate('TabThreeScreenTwo', {titleName: titleName})}>
</Icon.Button>*/}

export default class TabThreeScreenOne extends React.Component {
  static navigationOptions = ({ navigation }) => {
    console.log(navigation);
    const titleName = '尋寶獵人';
    return {
      title: titleName,
      headerTitleStyle:{
        alignSelf: 'center',
        marginRight: -20,
      },
      headerRight: (
        <Icon.Button 
          name="qrcode" 
          color="#000"
          style={{alignItems:'center', justifyContent:'center' }}
          backgroundColor="#eeeef2" 
          onPress={() => 
            navigation.navigate('TabThreeScreenFour') //QR code Page
          }
        />
      ),
      headerLeft: null,
    };
  };
  componentWillMount() {
    if (this.props.navigation.state.params) {
      alert(this.props.navigation.state.params.data);
    }
  }
  render() {
    return(
      <View style={{
        flex:1,
        backgroundColor:'aqua',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Icon.Button 
          name="qrcode" 
          color="#000"
          style={{alignItems:'center', justifyContent:'center' }}
          backgroundColor="#eeeef2" 
          onPress={() => 
            this.props.navigation.navigate('TabThreeScreenFour') //QR code Page
          }
        >

        <Text>{'掃寶物'}</Text>
        </Icon.Button>
        <Text>{ 'Tab Three Screen One' }</Text>

        <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('TabThreeScreenTwo',{titleName: '尋寶獵人'}) }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'yellow'
          }}>
          <Text>{'Go to next screen this tab'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={
            () => this.props.navigation.dispatch({ type:'JUMP_TO_TAB', payload:{ index:0 } })
          }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'deeppink',
            marginTop:20
          }}>
          <Text>{'jump to tab one'}</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },

  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },

  buttonTouchable: {
    padding: 16,
  },
});