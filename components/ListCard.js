import React from 'react';
import { Image, Text, View, StyleSheet, DeviceEventEmitter } from 'react-native';
import { Icon, CheckBox } from 'react-native-elements';

export class ListCard extends React.Component {
  
  state = {
    add: 0
  };

  componentDidMount() {
    this.deEmitter = DeviceEventEmitter.addListener('press', (i) => {
        if(!i) this.setState({add: this.state.add + 7})
        else this.setState({add: this.state.add - 7})
    });
  }

  componentWillUnmount() {
    this.deEmitter.remove();
  }

    render(){
      return(
        <View style={styles.listCard}>
          <View style={styles.gameIcon}><Image source={this.props.imgSource} style={{width: 80,height: 80}} /></View>
          <View style={styles.leftContents}>
            <Text style={styles.eventName}>{this.props.eventName}</Text>
            <Text style={styles.gameName}>{this.props.gameName}</Text>
          </View>
          <View style={styles.rightContents}>
            <Text style={styles.remainDays}>剩餘{ this.props.remainDays }天</Text>
            <Text style={styles.progress}>完成 { this.props.progress + this.state.add} ％</Text>
          </View>
          <View style={styles.contentCenter}>
            <Icon
              name='ios-arrow-dropright'
              type='ionicon'
              size={26}
              color='#1E4B7C'
            />
            </View>
        </View>
      );
    }
  };

  export class ListCard2 extends React.Component {
  
      render(){
        return(
          <View style={styles.listCard}>
            <View style={styles.gameIcon}><Image source={this.props.imgSource} style={{width: 80,height: 80}} /></View>
            <View style={styles.leftContents}>
              <Text style={styles.eventName}>{this.props.eventName}</Text>
              <Text style={styles.gameName}>{this.props.gameName}</Text>
            </View>
            <View style={styles.rightContents}>
              <Text style={styles.remainDays}>剩餘{ this.props.remainDays }天</Text>
              <Text style={styles.progress}>完成 { this.props.progress} ％</Text>
            </View>
            <View style={styles.contentCenter}>
              <Icon
                name='ios-arrow-dropright'
                type='ionicon'
                size={26}
                color='#1E4B7C'
              />
              </View>
          </View>
        );
      }
    };

  export class Reminder extends React.Component {
    state = {
      checked: false,
    };


    render(){
      return(
        <View style={styles.listCard}>
          <View style={styles.gameIcon}><Image source={this.props.imgSource} style={{width: 80,height: 80}} /></View>
          <View style={styles.leftContents}>
            <Text style={styles.eventName}>{this.props.eventName}</Text>
            <Text style={styles.gameName}>{this.props.gameName}</Text>
          </View>
          <View style={styles.contentCenter}>
            <CheckBox
              iconRight
              right
              title='完成'
              containerStyle={style={backgroundColor:'#fff'}}
              size={24}
              checked={this.state.checked}
              onPress={() => {this.setState({ checked: !this.state.checked }) ; DeviceEventEmitter.emit('press', this.state.checked); } }
              
            />
          </View>
        </View>
      );
    }
  };

  const styles = StyleSheet.create({
    contentContainer: {
      paddingTop: 0,
    },
    listCard: {
      flex: 1,
      height: 100,
      backgroundColor: '#fff',
      flexDirection: 'row',
      borderBottomColor: '#ddd',
      borderBottomWidth: 1,
    },
    gameIcon: {
      width: 80,
      height: 80,
      margin: 10,
      backgroundColor: '#ccc',
      borderRadius: 10,
      overflow: 'hidden',
    },
    eventName: {
      color: '#1E4B7C',
      marginTop: 25,
      fontSize: 18,
    },
    gameName: {
      color: '#666',
      fontSize: 15,
      marginTop: 5,
    },
    leftContents: {
      flex: 1,
    },
    rightContents: {
      flex: 0.5,
    },
    contentCenter: {
      alignItems:'center',
      justifyContent: 'center',
      margin: 10,
      marginRight: 20,
    },
    remainDays: {
      color:'#DD6884',
      fontSize: 15,
      marginTop: 25,
    },
    progress: {
      color:'#DD6884',
      fontSize: 15,
      marginTop: 5,
      },
  });
  