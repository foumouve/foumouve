import * as React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

/*
  The home page is composed of a text field, 
  a button to send messages and chat.
*/
export default function HomeScreen(props) {
  const [value, onChangeText] = React.useState('');
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={{ margin:15, paddingBottom:530, borderColor: 'gray', borderWidth:1 }}>
            
          </View>
          <View style={{ flexDirection:"row", alignItems:"center", paddingHorizontal:15 }}>
            <TextInput
              style={{ borderColor: 'gray', borderWidth: 1, paddingVertical:5, flex:1, marginRight:10 }}
              onChangeText={props => onChangeText(props)}
              {...props}
              editable
              maxLength={255}
            />
            <Button title="Envoyer" color="#27B8AF" />
          </View>
        </ScrollView>
      </View>
    );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
});
