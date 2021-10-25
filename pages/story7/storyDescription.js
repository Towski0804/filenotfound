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
  const st7 = {
    title: 'The Key to Open The Door',
    description:
      "Ally found a key but she didn't know it can open which door. So she played a game to find the correct door.",
    story: [
      'Ally found a key without any marks, so she didn’t know which door this key can open. Ally thought for a moment and she decided to hand the key to the floor attendant Milla. Milla said with a smile: "Thank you, Ally. We can play a little game, guess which room this key belongs to". \nAlly said: "Can I guess one at random?", "There are four rooms with room numbers 201, 2 02,203,204,"said Milla. “Once you guess, I\'ll prompt you to guess whether the room number is big or small." Ally said, "I guess it\'s room 202." Milla said, "No, the answer should be bigger than it."',
      'Ally guessed for the second time: "204!" Milla said, " Your guess is bigger than the answer." Ally said happily: "Then I know the answer must be 203!" Milla nodded with relief and said, "You guessed it! It\'s easy to guess the right answer from the middle room like this!"',
    ],
    questions: [
      [
        "Single choice: What's the number Ally should guess in the next time?",
        204,
        [201, 202, 204],
      ],
      [
        'Write your answer: If there are 10 rooms, room numbers from 201 to 210, which room number should Ally guess for the first time?',
        205,
      ],
    ],
  };
  const {description, story, questions} = st7;
  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.page}>
        <View style={styles.titleHolder}>
          <Image source={require('../../images/7.png')} style={styles.image} />
        </View>
        {/* this place to put description */}
        <View style={styles.descriptionHolder}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{description}</Text>
        </View>
        <View style={styles.buttonHolder}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace(random('st7_main'))}>
            <Text style={styles.buttonText}>Pick Another</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => {
                navigation.navigate('st7_readingPage', {story, questions});
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
