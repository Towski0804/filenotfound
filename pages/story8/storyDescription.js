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
  const st8 = {
    title: 'Group Photo',
    description:
      'Four children in the school were going to take a group photo and they have to line up from height to low before taking the photo.',
    story: [
      'Four children in the school were going to take a group photo. All the kids were very happy, couldn\'t wait to organize their clothes and stood up. The photographer said, "Please line up from height to low." The children didn\'t know who was the tallest, who was the shortest, so they had no ideas about how to queue. Elsa, one of the clever children, loudly proposed: "Adjacent children compare their height, shorter kid stand on the left, the taller one stand on the right, each comparison only move a child. That way we can line up quickly!"',
      'The kids thought it was a great way to queue, so they immediately lined up according to it. Elsa said cheerfully, "We only need to exchange six times to get the line up!" The photographer praised the clever Elsa, and the four children had a good day and got a nice group photo.',
    ],
    questions: [
      [
        'Single choice: How many times do these four children need to be exchanged to line up?',
        6,
        [6, 5, 4],
      ],
      [
        'Write your answer: If there are 3 children need to line up according to their height, how many times do they have to exchange?',
        3,
      ],
    ],
  };
  const {description, story, questions} = st8;
  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.page}>
        <View style={styles.titleHolder}>
          <Image source={require('../../images/8.png')} style={styles.image} />
        </View>
        {/* this place to put description */}
        <View style={styles.descriptionHolder}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{description}</Text>
        </View>
        <View style={styles.buttonHolder}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace(random('st8_main'))}>
            <Text style={styles.buttonText}>Pick Another</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => {
                navigation.navigate('st8_readingPage', {story, questions});
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
