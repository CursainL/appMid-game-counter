import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements'
import { Reminder } from '../components/ListCard'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: '提醒',
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<Icon name='plus' type='feather' color='#fff' />}
          centerComponent={{ text: '提醒', style: { fontSize:20,color: '#fff' } }}
          rightComponent={<Icon name='trash' type='foundation' color='#fff' />}
        />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Reminder 
          eventName='通過活動關卡' 
          gameName='每日，共六關'
          imgSource={require('../assets/images/gf.png')}
          />
          <Reminder 
          eventName='排名戰' 
          gameName='每日獎勵'
          imgSource={require('../assets/images/sdorica.jpg')}
          />
        </ScrollView>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
