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
  baseText: {
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});