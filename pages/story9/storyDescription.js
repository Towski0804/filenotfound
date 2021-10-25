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
  const st9 = {
    title: 'Art Class',
    description:
      'Lily took her five beloved crayons of different colors and lengths to attend the art class, but the crayons fell to the ground when she was on the way. Let us help her arrange the crayons out of order.',
    story: [
      'Lily took her five beloved crayons of different colors and lengths to the art room in the school. However, while Lily was drawing carefully, all the crayons suddenly fell to the ground. Lily cried sadly, "I need to rearrange my crayons, but I don\'t know what order to arrange them." The art teacher saw Lily crying and comforted her, said: “You take a closer look at the length of these crayons. The crayon you like to use most is the shortest and least commonly used crayon is the longest, so we can sort them by length!” Lily nodded, thought for a moment and asked: "But how do I sort these five brushes by length?"',
      'The teacher smiled and said: "Let me tell you a good way: you can pick up two crayons randomly, put the shorter crayon on the left, the longer one on the right, and then take out a crayon and compare it with those two one by one. Again, if this crayon is shorter, put it on the left-hand size of the crayon being compared. The contrary, put it on the right-hand size. until this crayon does not need to move. Repeat the above step, and soon you\'ll get an orderly set of crayons!" Lily immediately sorted the crayons according to this method, so she happily continued to draw her paintings. ',
    ],
    questions: [
      [
        'Write your answer: Do you have any good way to help Lily sort these crayons?',
        null,
      ],
      [
        "Single choice: Where should the yellow crayons be placed by the method from Lily's teacher?",
        'Between',
        [
          'On the left side of the red crayon',
          'Between the red crayon and the green crayon',
          'On the right side of the green crayon',
        ],
      ],
    ],
  };
  const {description, story, questions} = st9;
  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.page}>
        <View style={styles.titleHolder}>
          <Image source={require('../../images/9.png')} style={styles.image} />
        </View>
        {/* this place to put description */}
        <View style={styles.descriptionHolder}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>{description}</Text>
        </View>
        <View style={styles.buttonHolder}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.replace(random('st9_main'))}>
            <Text style={styles.buttonText}>Pick Another</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => {
                navigation.navigate('st9_readingPage', {story, questions});
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
    borderRadius: 10,
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
