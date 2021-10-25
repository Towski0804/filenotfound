import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Question({route, navigation}) {
  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.page}>
        <View style={styles.textHolder}>
          <Image
            source={require('../../images/goodNight.jpg')}
            style={{width: 300, height: 300}}></Image>
        </View>
        <View style={styles.buttonHolder}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Text style={styles.buttonText}>Back to home</Text>
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
    justifyContent: 'center',
    paddingTop: 45,
  },

  textHolder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '85%',
    borderRadius: 20,
  },

  text: {
    fontSize: 18,
    margin: 5,
    fontWeight: 'bold',
  },

  buttonHolder: {
    marginTop: '10%',
    width: '50%',
  },

  button: {
    justifyContent: 'center',
    backgroundColor: '#424dac',
    borderRadius: 10,
    marginVertical: 10,
    height: 40,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Question;
