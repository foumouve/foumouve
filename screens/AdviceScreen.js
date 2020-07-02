import * as React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

/*
  The advice page is composed of a section on nutritional advice and sports advice.
*/
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
        style={styles.image}
        source={require('../assets/images/conseil-sportif.jpg')}
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
        style={styles.image}
        source={require('../assets/images/conseil-nutritionnel.jpg')}
      />
    </ScrollView>
  );
}

function SportAdviceScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center' }}>
      
      <View style={{ margin:15, padding:5, borderColor: 'gray', borderWidth:1, alignItems: 'center' }}>
        <Text style={ styles.title }>Hydratation</Text>
        <Text style={{ textAlign:'center' }}>
          Boire est le meilleur moyen de s'hydrater. Cette action doit être faite avant, pendant et après le sport.
          Les accidents musculaire, les troubles digestifs et la réduction des performances sont des examples des conséquences que peut produire une déshydratation.
          L'eau est la boisson la plus conseillée lorsqu'on pratique du sport cependant pour les efforts de plus de 1h les boissons protéiné peuvent apporter un vrai coup de pouce.
        </Text>
      </View>

      <View style={{ margin:15, padding:5, borderColor: 'gray', borderWidth:1, alignItems: 'center' }}>
        <Text style={ styles.title }>La récupération</Text>
        <Text style={{ textAlign:'center' }}>
          Les sportifs ont tendance à oublier de récupérer, pourtant le corps à besoin de retrouver son équilibre après des efforts.
        </Text>
      </View>

      <Button title="Retour aux conseils" color="#27B8AF" onPress={() => navigation.navigate('Advice')} />
      <Button title="Retour" color="#27B8AF" onPress={() => navigation.goBack()} />
    </View>
  )
}

function NutritionAdviceScreen({ navigation }) {
  return(
    <View style={{ flex: 1, alignItems: 'center'  }}>
      
      <View style={{ margin:15, padding:5, borderColor: 'gray', borderWidth:1, alignItems: 'center' }}>
        <Text style={ styles.title }>Les fruits et les légumes</Text>
        <Text style={{ textAlign:'center' }}>
          Ils sont de faibles apports caloriques mais ils couvrent les apports nutritionnels en vitamines et 
          minéraux qui auront un impact direct sur la bonne assimilation des nutriments. 
          Ils sont également riches en fibres et facilitent ainsi le transit intestinal.
        </Text>
      </View>
      
      <View style={{ margin:15, padding:5, borderColor: 'gray', borderWidth:1, alignItems: 'center' }}>
        <Text style={ styles.title }>L'alcool</Text>
        <Text style={{ textAlign:'center' }}>
          L’alcool n’est pas recommandé chez les sportifs. 
          Les calories apportées par ce dernier ne sont pas utilisables pour l’effort musculaire. 
          L’alcool réduit les capacités physiques et va augmenter les toxines que l’organisme devra éliminer. 
          De plus il accélère la déshydratation et modifie les capacités de régulation de la transpiration.
        </Text>
      </View>
      
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
  //Resize images on the page
  image:{
    marginBottom:15, 
    height:200, 
    width:-100
  },
  title:{
    marginTop:5, 
    marginHorizontal:5, 
    fontWeight:"bold", 
    fontSize:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
});