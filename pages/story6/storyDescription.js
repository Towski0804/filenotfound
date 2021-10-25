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
  const st6 = {
    title: 'Good Morning',
    description: "Rose's family had a wonderful and harmonious morning.",
    story: [
      'It was a wonderful morning, Rose got up early. She first made her bed, and then she went to the bathroom to brush her teeth and wash her face. After finishing these things, Rose walked out of the room and saw his mother and father making the bed, brushing their teeth and washing their faces in their room. Rose thought it was interesting that mom and dad took the same steps after getting up. Rose then said to her mom and dad, "Good morning!" Rose\'s mom and dad also smiled and said, "Good morning!" Next, they came to the dining room for breakfast. Rose said happily: "I found that all the steps we took when we got up are: make the bed, brush our teeth, wash our faces, say good morning, and have breakfast." "Mom and Dad boasted that Rose was a good boy who was good at finding out and had good habits.\nAs they were about to start breakfast, Rose noticed that her grandparents were walking from their room to the dining room, ready to have breakfast, Rose excitedly said to her grandparents: "I guess your next step now is to say good morning and then have breakfast with us!"',
      'Rose’s grandparents smiled and replied, "Yes, we got up and made the bed, brushed our teeth and washed our faces, now we should say good morning and finally have breakfast." Rose said, "It turns out everyone in our family does the same thing every morning! "The family laughed happily, and the whole family\'s good day began with this beautiful morning.',
    ],
    questions: [
      ['Single choice: Is Rose right?', 'Right', ['Right', 'Wrong']],
      ['Sort the Order', ['Jennie', 'Tom', 'Lisa'], ['Lisa', 'Tom', 'Jennie']],
    ],
  };
  const {description, story, questions} = st6;

  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.page}>
        <View style={styles.titleHolder}>
          <Image source={require('../../images/6.png')} style={styles.image} />
        </View>
        {/* this place to put description */}
        <View style={styles.descriptionHolder}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{description}</Text>
        </View>
        <View style={styles.buttonHolder}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => navigation.replace(random('st6_main'))}>
              Pick Another
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => {
                navigation.navigate('st6_readingPage', {story, questions});
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
