import * as React from 'react';
import { useState } from "react";
import { StyleSheet, Text, View, Button, Image, Picker, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

function ExerciceScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={{alignItems:"center"}}></View>
      <Button
        title="Course à pied"
        style={{marginBottom : 10}}
        color="#27B8AF"
        onPress={() => 
          navigation.navigate('Run')
        }
      />

      <Image
        style={styles.image}
        source={require('../assets/images/course-a-pied.jpg')}
      />

      <Button
        title="Vélo"
        color="#27B8AF"
        onPress={() =>
          navigation.navigate('Cycling')
        }
      />

      <Image
        style={styles.image}
        source={require('../assets/images/cycliste-1.jpg')}
      />

      <Button
        title="Gainage"
        color="#27B8AF"
        onPress={() =>
          navigation.navigate('Gainage')
        }
      />
      
      <Image
          style={styles.image}
          source={require('../assets/images/gainage.jpg')}
        />
      
    </ScrollView>
  );
} 

function RunScreen({ navigation }) {
  const [value, onChangeText] = React.useState('');
  const [selectedValue, setSelectedValue] = useState("05");
  return (
    <View style={{ flex: 0.43, alignItems: 'center', justifyContent:"space-between"}}>
      <Text style={{marginTop:15, marginRight:5, marginLeft:5, textAlign:"center", fontWeight:"bold"}}>La course à pied est un exercice qui se déroule sur le temps avec un chrono.</Text>
      <Text>Combien de temps voulez vous courir ?</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 82, borderColor: 'black', borderWidth: 3}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
          <Picker.Item label='05' value='300000'/>
          <Picker.Item label='10' value='600000'/>
          <Picker.Item label='15' value='900000'/>
          <Picker.Item label='20' value='1200000'/>
          <Picker.Item label='25' value='1500000'/>
          <Picker.Item label='30' value='1800000'/>
          <Picker.Item label='35' value='2100000'/>
          <Picker.Item label='40' value='2400000'/>
          <Picker.Item label='45' value='2700000'/>
          <Picker.Item label='50' value='3000000'/>
          <Picker.Item label='55' value='3300000'/>
          <Picker.Item label='60' value='3600000'/>
      </Picker>

      <Button title="Commencer" onPress={() => navigation.navigate('RunTimer')} />

      {/* <Text style={{marginTop:15}}>Combien de distance voulez-nous parcourir ?</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingVertical:3, paddingHorizontal:25, margin:15 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      /> */}
      <Button title="Retour aux exercices" onPress={() => navigation.navigate('Exercice')} />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

function CyclingScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("05");
  return (
    <View style={{ flex: 0.43, alignItems: 'center', justifyContent:"space-between" }}>
      <Text style={{marginTop:15, marginRight:5, marginLeft:5, textAlign:"center", fontWeight:"bold"}}>Le vélo est un exercice qui se déroule avec un chrono.</Text>
      <Text style={{marginTop:15}}>Combien de temps voulez vous faire du vélo ? (en minutes)</Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 82, borderColor: 'gray', borderWidth: 1}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
          <Picker.Item label='01' value='60000'/>
          <Picker.Item label='02' value='120000'/>
          <Picker.Item label='05' value='300000'/>
          <Picker.Item label='10' value='600000'/>
          <Picker.Item label='15' value='900000'/>
          <Picker.Item label='20' value='1200000'/>
          <Picker.Item label='25' value='1500000'/>
          <Picker.Item label='30' value='1800000'/>
          <Picker.Item label='35' value='2100000'/>
          <Picker.Item label='40' value='2400000'/>
          <Picker.Item label='45' value='2700000'/>
          <Picker.Item label='50' value='3000000'/>
          <Picker.Item label='55' value='3300000'/>
          <Picker.Item label='60' value='3600000'/>
      </Picker>
      <Button title="Commencer" onPress={() => navigation.navigate('CyclingTimer')} />
      <Button title="Retour aux exercices" onPress={() => navigation.navigate('Exercice')} />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

function GainageScreen({ navigation }) {
  const [selectedValue, setSelectedValue] = useState("1");
  return (
    <View style={{ flex: 0.73, alignItems: 'center', justifyContent:"space-between" }}>
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

      <Text>Combien de temps par exercices ? (en secondes) </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 82, borderColor: 'gray', borderWidth: 1}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
          <Picker.Item label='30' value='30000'/>
          <Picker.Item label='35' value='35000'/>
          <Picker.Item label='40' value='40000'/>
          <Picker.Item label='45' value='45000'/>
          <Picker.Item label='50' value='50000'/>
          <Picker.Item label='55' value='55000'/>
          <Picker.Item label='60' value='60000'/>
      </Picker>

      <Text>Combien de temps de pause ? (en secondes) </Text>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 82, borderColor: 'gray', borderWidth: 1}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
          <Picker.Item label='10' value='10000'/>
          <Picker.Item label='15' value='15000'/>
          <Picker.Item label='20' value='20000'/>
          <Picker.Item label='25' value='25000'/>
          <Picker.Item label='30' value='30000'/>
          
      </Picker>
      <Button title="Commencer" onPress={() => navigation.navigate('GainageTimer')} />
      <Button title="Retour aux exercices" onPress={() => navigation.navigate('Exercice')} />
      <Button title="Retour" onPress={() => navigation.goBack()} />
    </View>
  );
}

function RunTimerScreen({ navigation }) {
  setTimeout(() => {
    Alert.alert('Fin exercice');
  }, 10000);
  return(
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{marginTop:15, marginBottom:15}}>L'exercice s'arrete dans : </Text>
      <Button title="Retour aux exercices" color="#27B8AF" onPress={() => navigation.navigate('Exercice')} />
      <Button title="Retour" color="#27B8AF" onPress={() => navigation.goBack()} />
    </View>
  );
}

function CyclingTimerScreen({ navigation }) {
  setTimeout(() => {
    Alert.alert('Fin exercice');
  }, 10000);
  return(
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{marginTop:15, marginBottom:15}}>L'exercice s'arrete dans : </Text>
      <Button title="Retour aux exercices" color="#27B8AF" onPress={() => navigation.navigate('Exercice')} />
      <Button title="Retour" color="#27B8AF" onPress={() => navigation.goBack()} />
    </View>
  );
}

function GainageTimerScreen({ navigation }) {
  setTimeout(() => {
    Alert.alert('Fin exercice');
  }, 10000);
  return(
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{marginTop:15, marginBottom:15}}>L'exercice s'arrete dans : </Text>
      <Button title="Retour aux exercices" color="#27B8AF" onPress={() => navigation.navigate('Exercice')} />
      <Button title="Retour" color="#27B8AF" onPress={() => navigation.goBack()} />
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
        <Stack.Screen name="RunTimer" component={RunTimerScreen} />
        <Stack.Screen name="CyclingTimer" component={CyclingTimerScreen} />
        <Stack.Screen name="GainageTimer" component={GainageTimerScreen} />
      </Stack.Navigator>
  );
}

export default App;


const styles = StyleSheet.create({
  image:{
    marginBottom:15, 
    height:200, 
    width:-100
  },
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
