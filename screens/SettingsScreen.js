import React from 'react';
import { Header, Icon, ListItem } from 'react-native-elements'
import { View, StyleSheet, ScrollView } from 'react-native'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: '設定',
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
         
          centerComponent={{ text: '設定', style: { fontSize:20,color: '#fff' } }}
        
        />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View>
          {
            list.map((item, i) => (
              <ListItem
                containerStyle={style={height:60,alignItems:'center',justifyContent:'center'}}
                key={i}
                title={item.title}
                titleStyle={style={color:'#1E4B7C',fontSize:18}}
                leftIcon={{ name: item.icon, type: item.type}}
              />
            ))
          }
        </View>
        </ScrollView>

        
      </View>
    );
  }
}

const list = [
  {
    title: '提醒設定',
    icon: 'ios-alarm',
    type: 'ionicon'
  },
  {
    title: '使用說明',
    icon: 'ios-book',
    type: 'ionicon'
  },
  {
    title: '問題回報',
    icon: 'ios-text',
    type: 'ionicon'
  },
  {
    title: '關於',
    icon: 'ios-information-circle',
    type: 'ionicon',
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});