import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function DragGame({navigation, route}) {
  const {story2, question2} = route.params;
  const [data, setData] = useState([
    {name: 'Tom', order: 2, backgroundColor: '#6cdac7'},
    {name: 'Jennie', order: 1, backgroundColor: '#d96133'},
    {name: 'Lisa', order: 3, backgroundColor: '#e12963'},
  ]);

  const renderItem = ({item, drag, isActive}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[
          styles.rowItem,
          {backgroundColor: isActive ? 'yellow' : item.backgroundColor},
        ]}
        onPressIn={drag}>
        <Text style={{fontWeight: 'bold', fontSize: 15}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require('../../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.page}>
        <View style={styles.textHolder}>
          <Text style={styles.text}>
            Please place the three kids to their corresponding places
          </Text>
        </View>

        <View style={styles.dragSection}>
          <View style={styles.index}>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text}>1</Text>
            <Text style={styles.text}>2</Text>
          </View>
          {/* Draggable Flatlist is a third party library from GitHub, next section of code has adapted that
          resource from  https://github.com/computerjazz/react-native-draggable-flatlist*/}
          <DraggableFlatList
            containerStyle={styles.container}
            horizontal={true}
            data={data}
            onDragEnd={({data}) => setData(data)}
            keyExtractor={item => item.order}
            renderItem={renderItem}
          />
        </View>

        <View style={styles.buttonHolder}>
          <TouchableOpacity
            onPress={() => {
              if (
                data[0].order == 1 &&
                data[1].order == 2 &&
                data[2].order == 3
              ) {
                navigation.navigate('st6_rightAnswer2', {story2, question2});
              } else {
                navigation.navigate('st6_falseAnswer2', {story2, question2});
              }
            }}
            style={styles.button}>
            <Text style={{color: '#fff', fontSize: 30}}>Finish</Text>
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
    paddingTop: 45,
  },

  index: {
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '85%',
  },

  dragSection: {
    paddingTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 40,
  },

  rowItem: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 15,
  },

  textHolder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '2.5%',
    width: '85%',
    borderRadius: 20,
    marginBottom: '10%',
  },
  text: {
    fontSize: 20,
    margin: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonHolder: {
    marginBottom: '5%',
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    backgroundColor: '#424dac',
    borderRadius: 10,
    minHeight: '5%',
    padding: '2%',
  },
});
