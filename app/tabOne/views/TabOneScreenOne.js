'use strict'
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';

export default class TabOneScreenOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
    };
  }
  _onRefresh() {
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({isRefreshing: false});
    },100);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      visible: false,
      title:'首頁',
      headerTitleStyle:{
        alignSelf: 'center',
        marginLeft: -20,
      },
      headerLeft: (
        <Ionicons.Button name="ios-menu" color="#185ffe" style={{marginLeft:13}}backgroundColor="#eeeef2" onPress={() => navigation.navigate('DrawerOpen')}>
        </Ionicons.Button>
      ),
      drawerLabel: '首頁',
      drawerIcon: ({ tintColor }) => (
        <Ionicons
          name={'md-home'}
          size={Platform == 'ios' ? 26 : 20}
          style={{ color: tintColor }}
        />
      ),
    }
  };
  componentDidMount() {
    FCM.on(FCMEvent.Notification, async (notif) => {
      alert('I receive a message!@!');
    });
  }
  render() {
    return(
      <View
        style={{
          flex:1,
          backgroundColor:'white',
          alignItems:'center',
          justifyContent:'center',
          marginTop:24,
        }}>
        <ScrollView       
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this._onRefresh.bind(this)}
              tintColor="#ff0000"
              title="Loading..."
              titleColor="#00ff00"
              colors={['#ff0000', '#00ff00', '#0000ff']}
              progressBackgroundColor="#ffff00"
            />
          }
        >
          <Text style={styles.text}>{ '首頁' }</Text>
          
          <TouchableOpacity
            onPress={ () => this.props.navigation.navigate('TabOneDrawerTwo') }
            style={{
              padding:20,
              borderRadius:20,
              backgroundColor:'yellow',
              marginTop:20
            }}>
            <Text>{'Go to next screen this tab'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={ () => {
              FCM.getFCMToken().then(token => {
              alert(token);
              });
            }}
            style={{
              padding:20,
              borderRadius:20,
              backgroundColor:'white',
              marginTop:20
            }}>
            <Text>{'dispatch Action Go to next screen this tab'}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});