import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import random from '../../utils/randomSt';

function StoryDescription({navigation, route}) {
  const st10 = {
    title: 'Take a Break',
    description:
      'Anna fell in love with chatting with friends on the computer, but she found that looking at the computer screen for a long time was a little painful in the eyes. How can she can do to avoid eye pain?',
    story: [
      "Recently, Anna fell in love with chatting with friends on the computer, and she often stared at the computer screen waiting for the messages from her friends for a long time. A few days passed, Anna found that looking at the computer screen for a long time was a little painful in the eyes, seeing things in the distance was also a little unclear. So, Anna's mother took her to the hospital to check her eyesight. Doctor found that Anna's eyes were aching because she had been using them for a long time. ",
      'So, the doctor advised: "Please don\'t look at the computer for a long time from now on. When your eyes are a little tired, you can look at the distant scenery, let the eyes take a break. When your eyes are well rested, you can continue. “Anna’s mother agreed, saying: “Sometimes interruption may happen when the computer executes program, not to mention a human being. So, when our eyes are tired, we should also properly "break" ". Anna remembered what the doctor and her mom said firmly. From then on, she no longer felt pain in the eyes and her eyes got a good break. ',
    ],
    questions: [
      [
        'Single choice: What do you think Anna can do to avoid eye pain?',
        'break',
        ['Take a break', 'Keep talking to her friends'],
      ],
      [
        'Single choice: Which of the following options is an "interruption" in everyday life?',
        'recess',
        ['Class - Class recess – Class', 'After class - go home'],
      ],
    ],
  };
  const {description, story, questions} = st10;
  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.page}>
        <View style={styles.titleHolder}>
          <Image source={require('../../images/10.png')} style={styles.image} />
        </View>
        {/* this place to put description */}
        <View style={styles.descriptionHolder}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{description}</Text>
        </View>
        <View style={styles.buttonHolder}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace(random('st10_main'))}>
            <Text style={styles.buttonText}>Pick Another</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => {
                navigation.navigate('st10_readingPage', {story, questions});
              }}>
              Read
            </Text>
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
    justifyContent: 'flex-start',
    paddingTop: '25%',
  },

  titleHolder: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7.5%',
    width: '85%',
    borderRadius: 20,
  },

  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 20,
  },

  descriptionHolder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '3%',
    width: '85%',
    // backgroundColor: "orange",
  },

  buttonHolder: {
    // display: "none",
    flex: 3,
    justifyContent: 'space-evenly',
    width: '50%',
    // backgroundColor: "blue",
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

export default StoryDescription;
