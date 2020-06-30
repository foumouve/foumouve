import * as React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Image, TextInput, Picker } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

function ExerciceScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Button
        title="Course à pied"
        style={{marginBottom : 10}}
        color="#27B8AF"
        onPress={() => 
          navigation.navigate('Run')
        }
      />

      <Image
        style={{marginBottom:15}}
        source={require('../assets/images/cours_a_pied.png')}
      />

      <Button
        title="Vélo"
        color="#27B8AF"
        onPress={() =>
          navigation.navigate('Cycling')
        }
      />

      <Image
        style={{marginBottom:15}}
        source={require('../assets/images/vélo.png')}
      />

      <Button
        title="Gainage"
        color="#27B8AF"
        onPress={() =>
          navigation.navigate('Gainage')
        }
      />

      <Image
        style={{marginBottom:15}}
        source={require('../assets/images/gainage.png')}
      />
    </ScrollView>
  );
} 

function RunScreen({ navigation }) {
  const [value, onChangeText] = React.useState('');
  const [selectedValue, setSelectedValue] = useState("10");
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{marginTop:15, marginRight:5, marginLeft:5, textAlign:"center", fontWeight:"bold"}}>La course à pied est un exercice qui se déroule sur le temps avec un chrono.</Text>
      <Text style={{marginTop:15}}>Combien de temps voulez vous courir ?</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 82, borderColor: 'gray', borderWidth: 1}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
          <Picker.Item label='05' value='05 min'/>
          <Picker.Item label='10' value='10 min'/>
          <Picker.Item label='15' value='15 min'/>
          <Picker.Item label='20' value='20 min'/>
          <Picker.Item label='25' value='25 min'/>
          <Picker.Item label='30' value='30 min'/>
          <Picker.Item label='35' value='35 min'/>
          <Picker.Item label='40' value='40 min'/>
          <Picker.Item label='45' value='45 min'/>
          <Picker.Item label='50' value='50 min'/>
          <Picker.Item label='55' value='55 min'/>
          <Picker.Item label='60' value='60 min'/>
      </Picker>

      <Button title="Commencer" onPress={() => navigation.navigate('Timer')} />

      <Text style={{marginTop:15}}>Combien de distance voulez-nous parcourir ?</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingVertical:3, paddingHorizontal:25, margin:15 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Button title="Retour aux exercices" onPress={() => navigation.navigate('Exercice')} />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

function TimerScreen({ navigation }) {
  <View>
    <Button title="Retour aux exercices" onPress={() => navigation.navigate('Exercice')} />
    <Button title="Retour" onPress={() => navigation.goBack()} />
  </View>
}

function CyclingScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("10");
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{marginTop:15, marginRight:5, marginLeft:5, textAlign:"center", fontWeight:"bold"}}>Le vélo est un exercice qui se déroule avec un chrono.</Text>
      <Text style={{marginTop:15}}>Combien de temps voulez vous faire du vélo ? (en minutes)</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 82, borderColor: 'gray', borderWidth: 1}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
          <Picker.Item label='05' value='05 min'/>
          <Picker.Item label='10' value='10 min'/>
          <Picker.Item label='15' value='15 min'/>
          <Picker.Item label='20' value='20 min'/>
          <Picker.Item label='25' value='25 min'/>
          <Picker.Item label='30' value='30 min'/>
          <Picker.Item label='35' value='35 min'/>
          <Picker.Item label='40' value='40 min'/>
          <Picker.Item label='45' value='45 min'/>
          <Picker.Item label='50' value='50 min'/>
          <Picker.Item label='55' value='55 min'/>
          <Picker.Item label='60' value='60 min'/>
      </Picker>
      <Button title="Commencer" onPress={() => navigation.navigate('Timer')} />
      <Button title="Retour aux exercices" onPress={() => navigation.navigate('Exercice')} />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

function GainageScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("10");
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{marginTop:15, marginRight:5, marginLeft:5, textAlign:"center", fontWeight:"bold"}}>Les exercics de gainages se passent en période, dans chaque période vous aurez 4 exercices différents.</Text>
      <Text style={{marginTop:15, marginRight:5, marginLeft:5, textAlign:"center"}}>Combien de session voulez-vous faire ?</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 82, borderColor: 'gray', borderWidth: 1}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
          <Picker.Item label='1' value='1'/>
          <Picker.Item label='2' value='2'/>
          <Picker.Item label='3' value='3'/>
          <Picker.Item label='4' value='4'/>
          <Picker.Item label='5' value='5'/>
          
      </Picker>

      <Text style={{marginTop:15}}>Combien de temps par exercices ? (en secondes) </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 82, borderColor: 'gray', borderWidth: 1}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
          <Picker.Item label='30' value='30'/>
          <Picker.Item label='35' value='35'/>
          <Picker.Item label='40' value='40'/>
          <Picker.Item label='45' value='45'/>
          <Picker.Item label='50' value='50'/>
          <Picker.Item label='55' value='55'/>
          <Picker.Item label='60' value='60'/>
          
      </Picker>

      <Text style={{marginTop:15}}>Combien de temps de pause ? (en secondes) </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 82, borderColor: 'gray', borderWidth: 1}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
          <Picker.Item label='10' value='10'/>
          <Picker.Item label='15' value='15'/>
          <Picker.Item label='20' value='20'/>
          <Picker.Item label='25' value='25'/>
          <Picker.Item label='30' value='30'/>
          
      </Picker>
      <Button title="Commencer" onPress={() => navigation.navigate('Timer')} />
      <Button title="Retour aux exercices" onPress={() => navigation.navigate('Exercice')} />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="Exercice">
        <Stack.Screen name="Exercice" component={ExerciceScreen} />
        <Stack.Screen name="Run" component={RunScreen} />
        <Stack.Screen name="Cycling" component={CyclingScreen} />
        <Stack.Screen name="Gainage" component={GainageScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
      </Stack.Navigator>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
