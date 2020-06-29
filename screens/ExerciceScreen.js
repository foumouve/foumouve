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
      <Text style={{marginTop:15}}>Combien de temps voulez vous courir ? (en minutes)</Text>
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

      <Button title="Commencer" onPress={() => navigation.navigate('Exercice')} />

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

function CyclingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>Exercices</Text>
      <Button
        title="Couse à pied"
        onPress={() => navigation.push('Cycling')}
      />
      <Button title="Retour aux exercices" onPress={() => navigation.navigate('Exercice')} />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

function GainageScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>Exercices</Text>
      <Button
        title="Gainage"
        onPress={() => navigation.push('Gainage')}
      />
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
