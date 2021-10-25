import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function ReadingPage({route, navigation}) {
  const {story, questions} = route.params;
  var story2 = story[1];
  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.page}>
        <ScrollView style={styles.storyHolder}>
          {/* this place to put story content */}
          <Text style={styles.text}>{story[0]}</Text>
        </ScrollView>
        <View style={styles.buttonHolder}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (questions[0][0].includes('choice')) {
                navigation.navigate('st7_choiceQuestion', {story2, questions});
              } else if (questions[0][0].includes('Write')) {
                navigation.navigate('st7_fillQuestion', {story2, questions});
              }
              // 额外的if判断：fill（填空）、drag（第一题的游戏）
            }}>
            <Text style={styles.buttonText}>Play Game</Text>
          </TouchableOpacity>
          {/* <Button
          title="Test for route and parameters"
          onPress={() => {
            navigation.push("JENNIE’S BIRTHDAY PARTY", {
              storyContent: "This is changed!",
            });
          }}
        ></Button> */}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 45,
  },

  storyHolder: {
    height: '65%',
    width: '85%',
    borderRadius: 20,
  },

  text: {
    fontSize: 18,
    margin: 5,
    fontWeight: 'bold',
  },

  buttonHolder: {
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

export default ReadingPage;
