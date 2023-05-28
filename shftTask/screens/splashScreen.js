import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Animated,
  Easing,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {useDispatch, useSelector} from 'react-redux';

const Splash = ({navigation}) => {
  const {info} = useSelector(state => state.info);
  console.log('infoStatus:', info);
  setTimeout(() => {
    info ? navigation.navigate('InfoScreen') : navigation.navigate('Home');
  }, 5000);
  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        style={styles.lottieStyle}
        source={require('../assets/splash.json')}
        autoPlay
        loop
      />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 0.8,
  },
  lottieStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
