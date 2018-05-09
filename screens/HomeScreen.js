import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Header, Icon, Card} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { ListCard, ListCard2, Reminder } from '../components/ListCard'


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '活動',
    header: null
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<Icon name='plus' type='feather' color='#fff' />}
          centerComponent={{ text: '活動', style: { fontSize:20,color: '#fff' } }}
          rightComponent={<Icon name='trash' type='foundation' color='#fff' />}
        />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <ListCard
          eventName='榮耀日' 
          gameName='少女前線' 
          remainDays={17}
          progress={30}
          imgSource={require('../assets/images/gf.png')}
          />
          <ListCard2 
          eventName='幻境試煉' 
          gameName='Sdorica'
          remainDays={5}
          progress={0}
          imgSource={require('../assets/images/sdorica.jpg')}
          />
          <ListCard2 
          eventName='戰力擴充計畫' 
          gameName='刀劍亂舞' 
          remainDays={31}
          progress={56}
          imgSource={require('../assets/images/touken.png')}/>
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
  contentContainer: {
    paddingTop: 0,
  },
});
