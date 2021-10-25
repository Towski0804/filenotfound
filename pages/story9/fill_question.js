import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function Question({route, navigation}) {
  const {story2, questions} = route.params;
  var question1 = questions[0];
  var question2 = questions[1];
  const [text, onChangeText] = React.useState('');
  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.page}>
        <View style={styles.textHolder}>
          <Text style={styles.text}>{question1[0]}</Text>
        </View>
        <View style={styles.buttonHolder}>
          <View style={{borderBottomWidth: 1}}>
            <Button
              title="I am a hint💡"
              onPress={() => {
                navigation.navigate('st9_hint');
              }}></Button>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Your answer"
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (question1[1] != null) {
                // whether answer and given right answer is same type
                if (typeof text != typeof question1[1]) {
                  navigation.navigate('st9_falseAnswer', {story2, question2});
                } else {
                  // answer is string
                  if (typeof question1[1] == 'string') {
                    if (text.toUpperCase() == question1[1].toUpperCase()) {
                      navigation.navigate('st9_rightAnswer', {
                        story2,
                        question2,
                      });
                    } else {
                      navigation.navigate('st9_falseAnswer', {
                        story2,
                        question2,
                      });
                    }
                  } else if (typeof question1[1] == 'number') {
                    // answer is number
                    if (text == question1[1]) {
                      navigation.navigate('st9_rightAnswer', {
                        story2,
                        question2,
                      });
                    } else {
                      navigation.navigate('st9_falseAnswer', {
                        story2,
                        question2,
                      });
                    }
                  }
                }
              } else {
                navigation.navigate('st9_rightAnswer', {story2, question2});
              }
            }}>
            <Text style={styles.buttonText}>Check Answer</Text>
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
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: "7.5%",
    width: '85%',
    borderRadius: 20,
  },

  text: {
    fontSize: 18,
    margin: 5,
    fontWeight: 'bold',
  },

  buttonHolder: {
    flex: 2,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '50%',
  },

  button: {
    justifyContent: 'center',
    backgroundColor: '#424dac',
    width: '80%',
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

  input: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default Question;
