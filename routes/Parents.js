import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

function Parents({navigation}) {
  return (
    <ImageBackground
      source={require('../images/parentsBG.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.page}>
        <ScrollView contentContainerStyle={styles.textHolder}>
          <Text style={styles.text}>
            The application is for motivating girls to know and learn
            programming technologies.{'\n'}It is very helpful if you can use
            this app as a interaction tool with your daughters.{'\n'}At first,
            you can choose a story as you wish or according to your daughters
            willing. Then, you can read the story for stories for your girls or
            you can choose the "Voice" function to read the stories instead
            since your daughters may have not enough knowledge to understand all
            words in the stories. {'\n'}At each part of the stories, there is a
            little game can be completed. You can help your daughters to play it
            to let them have a better understand about the story.{'\n'}We
            provide so many kinds of stories including logical stories,
            successful programming woman stories and fairy tales to make our
            story library abundant.{'\n'}Hope you have a great experience when
            using this application. Thanks for reading!
          </Text>
        </ScrollView>
        <View style={styles.buttonHolder}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.buttonText}>Back</Text>
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
    height: '100%',
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255, 0.5)',
    borderRadius: 10,
  },

  text: {
    fontSize: 20,
    margin: 5,
    fontWeight: 'bold',
    textAlign: 'center',
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

export default Parents;
