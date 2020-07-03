import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

/*
  The profile page is composed of the user's information
*/
export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={{flexDirection:"row", alignItems:"center"}}>
        <Image
          style={{marginHorizontal:15, width:55, height:55}}
          source={require('../assets/images/profile.png')}
        />
        <Text style={{ fontSize:20, alignItems:"center" }}>Nom d'utilisateur</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
});