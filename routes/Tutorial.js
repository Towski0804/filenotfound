import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Alert,
} from 'react-native';
import GallerySwiper from 'react-native-gallery-swiper';

function Tutorial({navigation}) {
  Alert.alert('Tips', 'Swipe left or right to check tutorial');
  return (
    <ImageBackground
      source={require('../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.page}>
        <GallerySwiper
          images={[
            {
              source: require('../images/tutotial_image/t1.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t2.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t3.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t4.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t5.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t6.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t7.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t8.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t9.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t10.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t11.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t12.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t13.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t14.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t15.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t16.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t17.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
            {
              source: require('../images/tutotial_image/t18.jpg'),
              dimensions: {width: 1087, height: 2354},
            },
          ]}
          style={{backgroundColor: 'rgba(0, 0, 0, 0.25)'}}
          // Version *1.15.0 update
          // onEndReached={() => {
          //     // add more images when scroll reaches end
          // }}
        />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '7.5%',
    width: '85%',
    borderRadius: 20,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    textAlign: 'center',
  },
});

export default Tutorial;
