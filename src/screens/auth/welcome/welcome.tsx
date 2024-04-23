//import liraries
import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './styles';
import {LogoHeader, AppHeader, AuthHeader} from '../../../components/general';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../../types';
import {useNavigation} from '@react-navigation/native';
import SocialButton from '../../../components/general/socialButton';
import {colors} from '../../../global/utilities';
type props = NativeStackNavigationProp<AuthStackParamList, 'Welcome'>;
const Welcome: React.FC<{}> = () => {
  const navigation = useNavigation<props>();
  return (
    <SafeAreaView style={styles.container}>
      <LogoHeader
        showBackButton={false}
        marginTop={2}
        heading="Welcome to Sarmaaya!"
        subHeading="Your investment world just got simpler. We are here to help!"
      />
      <SocialButton
        onPressLink={() => {}}
        onPressApple={() => {}}
        onPressFacebook={() => {}}
        onPressGoogle={() => {}}
        loaderColor={colors.primaryBlueBrand}
        title="Don’t have an account?"
        linkText=" Signup"
        disabled={false}
        appleLoading={false}
        googleLoading={false}
        fbLoading={false}
        marginTop={4}
      />
    </SafeAreaView>
  );
};

export default Welcome;
