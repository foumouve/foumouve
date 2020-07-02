import * as React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

/*
  The login page consists of a text field for the username, 
  a text field for the password and a button to send the information.
*/
export default function LoginScreen() {
  const [value, onChangeText] = React.useState('');
  return (
    <View style={styles.container}> {/* Create the main layout */}
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={{borderColor: 'gray', borderWidth: 1, padding:5, margin:2}}>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Image
              style={{marginHorizontal:15, width:55, height:55}}
              source={require('../assets/images/profile.png')}
            />
            <TextInput
              style={{borderColor: 'gray', borderWidth: 1, paddingVertical:5, paddingHorizontal:125, margin:15 }}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
          </View>
          <View style={{flexDirection:"row", alignItems:"center"}}>
            <Image
              style={{marginHorizontal:15, width:55, height:55}}
              source={require('../assets/images/key.png')}
            />
            <TextInput
              style={{borderColor: 'gray', borderWidth: 1, paddingVertical:5, paddingHorizontal:125, margin:15 }}
              onChangeText={text => onChangeText(text)}
              value={value}
            />
          </View>
          <Button title="Envoyer" color="#27B8AF" />
        </View>
      </ScrollView>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});