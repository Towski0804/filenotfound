import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Button} from 'react-native-elements';

const Styles = StyleSheet.create({
  container: {
    width: '40%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  itemStyle: {
    width: 'auto',
    height: 100,
  },
  textStyle: {
    color: 'purple',
    flexShrink: 1,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    // marginTop: 20,
  },
});

export const HorizontalItem = ({imageUrl, text, onPress}) => {
  return (
    <View style={Styles.container}>
      <Pressable onPress={onPress}>
        <Image source={imageUrl} style={Styles.itemStyle} />
        <Text style={Styles.textStyle}>{text}</Text>
      </Pressable>
    </View>
  );
};
