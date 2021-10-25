import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useContext} from 'react';
import {
  View,
  Text,
  ImageBackground,
  AsyncStorage,
  ActivityIndicator,
  StyleSheet,
  Pressable,
} from 'react-native';
import {Button} from 'react-native-elements';
import {TitleBar} from '../components/TitleBar';
import {useState} from 'react';
import {AuthContext} from '../Providers/AuthProvider';
import {MyCustomButton} from '../components/MyCustomBtn';
import SignUpRoute from './SignUp';
import {LoginRoute} from './Login';
import {HomePageRoute} from './HomePage';
import {LibraryPageRoute} from './Library';

import St1_main from '../pages/story1/main';
import St1_story from '../pages/story1/story';
import St1_game from '../pages/story1/game';
import St1_anser_right from '../pages/story1/anser_right';
import St1_anser_failed from '../pages/story1/anser_failed';
import St1_end from '../pages/story1/end';
import St1_tips from '../pages/story1/tips';
import St1_abandon from '../pages/story1/abandon';
// st2
import St2_main from '../pages/story2/main';
import St2_story from '../pages/story2/story';
import St2_game from '../pages/story2/game';
import St2_anser_right from '../pages/story2/anser_right';
import St2_anser_failed from '../pages/story2/anser_failed';
import St2_end from '../pages/story2/end';
import St2_tips from '../pages/story2/tips';
import St2_abandon from '../pages/story2/abandon';
// st3
import St3_main from '../pages/story3/main';
import St3_story from '../pages/story3/story';
import St3_game from '../pages/story3/game';
import St3_anser_right from '../pages/story3/anser_right';
import St3_anser_failed from '../pages/story3/anser_failed';
import St3_end from '../pages/story3/end';
import St3_tips from '../pages/story3/tips';
import St3_abandon from '../pages/story3/abandon';
// st4
import St4_main from '../pages/story4/main';
import St4_story from '../pages/story4/story';
import St4_game from '../pages/story4/game';
import St4_anser_right from '../pages/story4/anser_right';
import St4_anser_failed from '../pages/story4/anser_failed';
import St4_end from '../pages/story4/end';
import St4_tips from '../pages/story4/tips';
import St4_abandon from '../pages/story4/abandon';
// st5
import St5_main from '../pages/story5/main';
import St5_story from '../pages/story5/story';
import St5_game from '../pages/story5/game';
import St5_anser_right from '../pages/story5/anser_right';
import St5_anser_failed from '../pages/story5/anser_failed';
import St5_end from '../pages/story5/end';
import St5_tips from '../pages/story5/tips';
import St5_abandon from '../pages/story5/abandon';
import Home from '../components/Home';
import {EmptyPageRoute} from './EmptyPage';
import {ProfilePageRoute} from './Profile';

// st6
import TutorialPage from './Tutorial';
import ParentsPage from './Parents';
import St6_description from '../pages/story6/storyDescription';
import St6_readingPage from '../pages/story6/reading_page';
import St6_readingPage2 from '../pages/story6/reading_page2';
import St6_rightAnswer from '../pages/story6/right_answer';
import St6_rightAnswer2 from '../pages/story6/right_answer2';
import St6_falseAnswer from '../pages/story6/false_answer';
import St6_falseAnswer2 from '../pages/story6/false_answer2';
import St6_end from '../pages/story6/end';
import St6_choiceQuestion from '../pages/story6/choice_question';
import St6_dragGame from '../pages/story6/drag_game';

// st7
import St7_description from '../pages/story7/storyDescription';
import St7_readingPage from '../pages/story7/reading_page';
import St7_readingPage2 from '../pages/story7/reading_page2';
import St7_rightAnswer from '../pages/story7/right_answer';
import St7_rightAnswer2 from '../pages/story7/right_answer2';
import St7_falseAnswer from '../pages/story7/false_answer';
import St7_falseAnswer2 from '../pages/story7/false_answer2';
import St7_end from '../pages/story7/end';
import St7_choiceQuestion from '../pages/story7/choice_question';
import St7_fillQuestion from '../pages/story7/fill_question2';

// st8
import St8_description from '../pages/story8/storyDescription';
import St8_readingPage from '../pages/story8/reading_page';
import St8_readingPage2 from '../pages/story8/reading_page2';
import St8_rightAnswer from '../pages/story8/right_answer';
import St8_rightAnswer2 from '../pages/story8/right_answer2';
import St8_falseAnswer from '../pages/story8/false_answer';
import St8_falseAnswer2 from '../pages/story8/false_answer2';
import St8_end from '../pages/story8/end';
import St8_choiceQuestion from '../pages/story8/choice_question';
import St8_fillQuestion from '../pages/story8/fill_question2';

// st9
import St9_description from '../pages/story9/storyDescription';
import St9_hint from '../pages/story9/hint';
import St9_readingPage from '../pages/story9/reading_page';
import St9_readingPage2 from '../pages/story9/reading_page2';
import St9_rightAnswer from '../pages/story9/right_answer';
import St9_rightAnswer2 from '../pages/story9/right_answer2';
import St9_falseAnswer from '../pages/story9/false_answer';
import St9_falseAnswer2 from '../pages/story9/false_answer2';
import St9_end from '../pages/story9/end';
import St9_fillQuestion from '../pages/story9/fill_question';
import St9_choiceQuestion from '../pages/story9/choice_question2';

// st10
import St10_description from '../pages/story10/storyDescription';
import St10_hint from '../pages/story10/hint';
import St10_readingPage from '../pages/story10/reading_page';
import St10_readingPage2 from '../pages/story10/reading_page2';
import St10_rightAnswer from '../pages/story10/right_answer';
import St10_rightAnswer2 from '../pages/story10/right_answer2';
import St10_falseAnswer from '../pages/story10/false_answer';
import St10_falseAnswer2 from '../pages/story10/false_answer2';
import St10_end from '../pages/story10/end';
import St10_choiceQuestion from '../pages/story10/choice_question';
import St10_choiceQuestion2 from '../pages/story10/choice_question2';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function Login() {
  return (
    <ImageBackground
      source={require('../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView>
        <TitleBar />
        <LoginRoute />
      </SafeAreaView>
    </ImageBackground>
  );
}

function Register() {
  return (
    <ImageBackground
      source={require('../images/bg.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <TitleBar />
        <SignUpRoute />
      </SafeAreaView>
    </ImageBackground>
  );
}

function Welcome() {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Login');
      }}>
      <ImageBackground
        source={require('../images/welcome.jpg')}
        resizeMode="stretch"
        style={{width: '100%', height: '100%'}}></ImageBackground>
    </Pressable>
  );
}

const restHeaderOptions = {
  headerTransparent: true,
  headerShadowVisible: false,
  headerTintColor: '#7e25db',
  headerTitleAlign: 'center',
  headerRight: () => <Home />,
};

export const Routes = () => {
  const [loading, setLoading] = useState(true);
  const {user, login, logout} = useContext(AuthContext);

  useEffect(() => {
    AsyncStorage.getItem('user').then(userString => {
      // login();
      if (userString) {
        // decode and login
        // logout();
        // console.log(userString);
      }
      setLoading(false);
    });
    return () => {};
  }, []);

  if (loading) {
    return <ActivityIndicator size="large"></ActivityIndicator>;
  }

  return (
    <NavigationContainer>
      {
        <Stack.Navigator initialRouteName={'Welcome'}>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="Home"
            component={HomePageRoute}
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="Library"
            component={LibraryPageRoute}
            options={{
              title: 'Library',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}></Stack.Screen>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}></Stack.Screen>

          <Stack.Screen
            name={'Profile'}
            component={ProfilePageRoute}
            options={{
              title: 'Profile',
              ...restHeaderOptions,
            }}></Stack.Screen>

          <Stack.Screen
            component={EmptyPageRoute}
            name="Empty"
            options={{
              title: 'EMPTY',
              ...restHeaderOptions,
            }}></Stack.Screen>

          {/* story_1 */}
          <Stack.Screen
            name="st1_main"
            component={St1_main}
            options={{
              title: 'GOOD MORNING',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st1_story"
            component={St1_story}
            options={{
              title: 'GOOD MORNING',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st1_game"
            component={St1_game}
            options={{
              title: 'GOOD MORNING',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st1_anser_right"
            component={St1_anser_right}
            options={{
              title: 'Congrats',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st1_anser_failed"
            component={St1_anser_failed}
            options={{
              title: 'Boom!',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st1_end"
            component={St1_end}
            options={{
              title: 'The End',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st1_tips"
            component={St1_tips}
            options={{
              title: 'Tips',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st1_abandon"
            component={St1_abandon}
            options={{
              title: 'Give up',
              ...restHeaderOptions,
            }}></Stack.Screen>
          {/* story_2 */}
          <Stack.Screen
            name="st2_main"
            component={St2_main}
            options={{
              title: 'Little Red Riding Hood',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st2_story"
            component={St2_story}
            options={{
              title: 'Little Red Riding Hood',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st2_game"
            component={St2_game}
            options={{
              title: 'Little Red Riding Hood',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st2_anser_right"
            component={St2_anser_right}
            options={{
              title: 'Congrats',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st2_anser_failed"
            component={St2_anser_failed}
            options={{
              title: 'Boom!',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st2_end"
            component={St2_end}
            options={{
              title: 'The End',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st2_tips"
            component={St2_tips}
            options={{
              title: 'Tips',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st2_abandon"
            component={St2_abandon}
            options={{
              title: 'Give up',
              ...restHeaderOptions,
            }}></Stack.Screen>
          {/* story_3 */}
          <Stack.Screen
            name="st3_main"
            component={St3_main}
            options={{
              title: 'Who’s her?',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st3_story"
            component={St3_story}
            options={{
              title: 'Who’s her?',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st3_game"
            component={St3_game}
            options={{
              title: 'Who’s her?',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st3_anser_right"
            component={St3_anser_right}
            options={{
              title: 'Congrats',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st3_anser_failed"
            component={St3_anser_failed}
            options={{
              title: 'Boom!',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}></Stack.Screen>
          <Stack.Screen
            name="st3_end"
            component={St3_end}
            options={{
              title: 'The End',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st3_tips"
            component={St3_tips}
            options={{
              title: 'Tips',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st3_abandon"
            component={St3_abandon}
            options={{
              title: 'Give up',
              ...restHeaderOptions,
            }}></Stack.Screen>
          {/* story_4 */}
          <Stack.Screen
            name="st4_main"
            component={St4_main}
            options={{
              title: 'The first programmer',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st4_story"
            component={St4_story}
            options={{
              title: 'The first programmer',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st4_game"
            component={St4_game}
            options={{
              title: 'The first programmer',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st4_anser_right"
            component={St4_anser_right}
            options={{
              title: 'Congrats',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st4_anser_failed"
            component={St4_anser_failed}
            options={{
              title: 'Boom!',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st4_end"
            component={St4_end}
            options={{
              title: 'The End',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st4_tips"
            component={St4_tips}
            options={{
              title: 'Tips',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st4_abandon"
            component={St4_abandon}
            options={{
              title: 'Give up',
              ...restHeaderOptions,
            }}></Stack.Screen>
          {/* story_5 */}
          <Stack.Screen
            name="st5_main"
            component={St5_main}
            options={{
              title: 'The first computer “Bug”',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st5_story"
            component={St5_story}
            options={{
              title: 'The first computer “Bug”',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st5_game"
            component={St5_game}
            options={{
              title: 'The first computer “Bug”',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st5_anser_right"
            component={St5_anser_right}
            options={{
              title: 'Congrats',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st5_anser_failed"
            component={St5_anser_failed}
            options={{
              title: 'Boom!',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st5_end"
            component={St5_end}
            options={{
              title: 'The End',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st5_tips"
            component={St5_tips}
            options={{
              title: 'Tips',
              ...restHeaderOptions,
            }}></Stack.Screen>
          <Stack.Screen
            name="st5_abandon"
            component={St5_abandon}
            options={{
              title: 'Give up',
              ...restHeaderOptions,
            }}></Stack.Screen>

          {/* tutorial */}
          <Stack.Screen
            name="tutorialPage"
            component={TutorialPage}
            options={{
              title: 'Tutorial',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="parentsPage"
            component={ParentsPage}
            options={{
              title: 'For Mom and Dad',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          {/* st6 */}
          <Stack.Screen
            name="st6_main"
            component={St6_description}
            options={{
              title: "Jennie's Birthday",
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st6_readingPage"
            component={St6_readingPage}
            options={{
              title: "Jennie's Birthday",
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st6_readingPage2"
            component={St6_readingPage2}
            options={{
              title: "Jennie's Birthday",
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st6_rightAnswer"
            component={St6_rightAnswer}
            options={{
              title: 'Congrats',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st6_rightAnswer2"
            component={St6_rightAnswer2}
            options={{
              title: 'Congrats',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st6_falseAnswer"
            component={St6_falseAnswer}
            options={{
              title: 'Not right',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st6_falseAnswer2"
            component={St6_falseAnswer2}
            options={{
              title: 'Not right',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st6_end"
            component={St6_end}
            options={{
              title: 'Good night',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st6_choiceQuestion"
            component={St6_choiceQuestion}
            options={{
              title: "Jennie's Birthday's Party",
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st6_dragGame"
            component={St6_dragGame}
            options={{
              title: "Jennie's Birthday's Party",
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          {/* st7 */}
          <Stack.Screen
            name="st7_main"
            component={St7_description}
            options={{
              title: 'The key to open the door',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st7_readingPage"
            component={St7_readingPage}
            options={{
              title: 'The key to open the door',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st7_readingPage2"
            component={St7_readingPage2}
            options={{
              title: 'The key to open the door',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st7_rightAnswer"
            component={St7_rightAnswer}
            options={{
              title: 'Congrats',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st7_rightAnswer2"
            component={St7_rightAnswer2}
            options={{
              title: 'Congrats',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st7_falseAnswer"
            component={St7_falseAnswer}
            options={{
              title: 'Not right',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st7_falseAnswer2"
            component={St7_falseAnswer2}
            options={{
              title: 'Not right',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st7_end"
            component={St7_end}
            options={{
              title: 'Good night',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st7_choiceQuestion"
            component={St7_choiceQuestion}
            options={{
              title: 'Group photo',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st7_fillQuestion"
            component={St7_fillQuestion}
            options={{
              title: 'Group photo',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          {/* st8 */}
          <Stack.Screen
            name="st8_main"
            component={St8_description}
            options={{
              title: 'Group photo',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st8_readingPage"
            component={St8_readingPage}
            options={{
              title: 'Group photo',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st8_readingPage2"
            component={St8_readingPage2}
            options={{
              title: 'Group photo',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st8_rightAnswer"
            component={St8_rightAnswer}
            options={{
              title: 'Congrats',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st8_rightAnswer2"
            component={St8_rightAnswer2}
            options={{
              title: 'Congrats',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st8_falseAnswer"
            component={St8_falseAnswer}
            options={{
              title: 'Not right',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st8_falseAnswer2"
            component={St8_falseAnswer2}
            options={{
              title: 'Not right',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st8_end"
            component={St8_end}
            options={{
              title: 'Good night',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st8_choiceQuestion"
            component={St8_choiceQuestion}
            options={{
              title: 'Group photo',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st8_fillQuestion"
            component={St8_fillQuestion}
            options={{
              title: 'Group photo',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          {/* st9 */}
          <Stack.Screen
            name="st9_main"
            component={St9_description}
            options={{
              title: 'Art class',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st9_hint"
            component={St9_hint}
            options={{
              title: 'Tips',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st9_readingPage"
            component={St9_readingPage}
            options={{
              title: 'Art class',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st9_readingPage2"
            component={St9_readingPage2}
            options={{
              title: 'Art class',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st9_rightAnswer"
            component={St9_rightAnswer}
            options={{
              title: 'Congrats',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st9_rightAnswer2"
            component={St9_rightAnswer2}
            options={{
              title: 'Congrats',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st9_falseAnswer"
            component={St9_falseAnswer}
            options={{
              title: 'Not right',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st9_falseAnswer2"
            component={St9_falseAnswer2}
            options={{
              title: 'Not right',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st9_end"
            component={St9_end}
            options={{
              title: 'Good night',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st9_fillQuestion"
            component={St9_fillQuestion}
            options={{
              title: 'Art class',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st9_choiceQuestion"
            component={St9_choiceQuestion}
            options={{
              title: 'Art class',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          {/* st10 */}
          <Stack.Screen
            name="st10_main"
            component={St10_description}
            options={{
              title: 'Take a break',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st10_hint"
            component={St10_hint}
            options={{
              title: 'Tips',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st10_readingPage"
            component={St10_readingPage}
            options={{
              title: 'Take a break',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st10_readingPage2"
            component={St10_readingPage2}
            options={{
              title: 'Take a break',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st10_rightAnswer"
            component={St10_rightAnswer}
            options={{
              title: 'Congrats',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st10_rightAnswer2"
            component={St10_rightAnswer2}
            options={{
              title: 'Congrats',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st10_falseAnswer"
            component={St10_falseAnswer}
            options={{
              title: 'Not right',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st10_falseAnswer2"
            component={St10_falseAnswer2}
            options={{
              title: 'Not right',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st10_end"
            component={St10_end}
            options={{
              title: 'Good night',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st10_choiceQuestion"
            component={St10_choiceQuestion}
            options={{
              title: 'Take a break',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
          <Stack.Screen
            name="st10_choiceQuestion2"
            component={St10_choiceQuestion2}
            options={{
              title: 'Take a break',
              headerTransparent: true,
              headerShadowVisible: false,
              headerTintColor: '#7e25db',
              headerTitleAlign: 'center',
              headerRight: () => <Home />,
            }}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};
