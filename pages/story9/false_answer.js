import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function FalseAnswer({route, navigation}) {
  const {story2, question2} = route.params;
  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.page}>
        <View style={styles.textHolder}>
          <Text style={styles.text}>
            That's not quite right.{'\n'}Do you want to try again?
          </Text>
        </View>
        <View style={styles.buttonHolder}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.buttonText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('st9_readingPage2', {story2, question2});
            }}>
            <Text style={styles.buttonText}>No</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 45,
  },

  textHolder: {
    flex: 2,
    alignItems: 'center',
    // marginTop: "7.5%",
    width: '85%',
    borderRadius: 20,
    borderColor: 'red',
    justifyContent: 'space-evenly',
  },

  text: {
    fontSize: 25,
    margin: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonHolder: {
    flex: 1,
    justifyContent: 'space-evenly',
    width: '50%',
  },

  button: {
    justifyContent: 'center',
    backgroundColor: '#424dac',
    height: '20%',
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FalseAnswer;
