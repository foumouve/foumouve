import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

function AdviceScreen({ navigation }) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Button
        title="Conseil sportif"
        style={{marginBottom : 10}}
        color="#27B8AF"
        onPress={() => 
          navigation.navigate('Sport')
        }
      />

      <Image
        style={{marginBottom:15}}
        source={require('../assets/images/sport.png')}
      />

      <Button
        title="Conseil nutritionnel"
        style={{marginBottom : 10}}
        color="#27B8AF"
        onPress={() => 
          navigation.navigate('Nutrition')
        }
      />

      <Image
        style={{marginBottom:15}}
        source={require('../assets/images/nutrition.png')}
      />
    </ScrollView>
  );
}

function SportAdviceScreen({ navigation }) {
  return(
    <View>
      <Button title="Retour aux conseils" color="#27B8AF" onPress={() => navigation.navigate('Advice')} />
      <Button title="Retour" color="#27B8AF" onPress={() => navigation.goBack()} />
    </View>
  )
}

function NutritionAdviceScreen({ navigation }) {
  return(
    <View>
      <Button title="Retour aux conseils" color="#27B8AF" onPress={() => navigation.navigate('Advice')} />
      <Button title="Retour" color="#27B8AF" onPress={() => navigation.goBack()} />
    </View>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator initialRouteName="Advice">
        <Stack.Screen name="Advice" component={AdviceScreen} />
        <Stack.Screen name="Sport" component={SportAdviceScreen} />
        <Stack.Screen name="Nutrition" component={NutritionAdviceScreen} />
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