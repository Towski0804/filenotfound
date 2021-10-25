import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native';

function Question({route, navigation}) {
  const {story2, questions} = route.params;
  var question1 = questions[0];
  var question2 = questions[1];
  const options = question1[2];
  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <View style={styles.page}>
        <View style={styles.textHolder}>
          <Text style={styles.text}>{question1[0]}</Text>
        </View>
        <View style={styles.buttonHolder}>
          {/* next chunk of code would generate options */}
          {options.map((item, key) => (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => {
                if (item == question1[1]) {
                  navigation.navigate('st8_rightAnswer', {story2, question2});
                } else if (typeof item === 'string') {
                  if (item.includes(question1[1])) {
                    navigation.navigate('st8_rightAnswer', {story2, question2});
                  } else {
                    navigation.navigate('st8_falseAnswer', {story2, question2});
                  }
                } else {
                  navigation.navigate('st8_falseAnswer', {story2, question2});
                }
              }}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate('st8_falseAnswer', {story2, question2});
            }}>
            <Text style={styles.buttonText}>Give up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '25%',
  },

  textHolder: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2.5%',
    width: '85%',
    borderRadius: 20,
  },

  text: {
    fontSize: 24,
    margin: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonHolder: {
    margin: '3%',
    marginBottom: '5%',
    flex: 4,
    justifyContent: 'space-evenly',
  },

  button: {
    justifyContent: 'center',
    backgroundColor: '#424dac',
    borderRadius: 10,
    minHeight: '5%',
    padding: '1%',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Question;
