//import liraries
import React from 'react';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {appIcons, colors} from '../../../global/utilities';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import RegularText from '../../../typography/regularText';
import SemiBoldText from '../../../typography/semiBoldText';
interface CProps {
  title: string;
  linkText: string;
  appleLoading: boolean;
  googleLoading: boolean;
  fbLoading: boolean;
  disabled: boolean;
  loaderColor: string;
  marginTop: number;
  // marginBottom: number;
  onPressApple: () => void;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
  onPressLink: () => void;
}
const SocialButton: React.FC<CProps> = ({
  onPressApple,
  onPressFacebook,
  onPressGoogle,
  onPressLink,
  title,
  linkText,
  appleLoading,
  googleLoading,
  fbLoading,
  disabled,
  loaderColor = 'white',
  marginTop = 0,
  // marginBottom = 0,
}) => {
  return (
    <View style={styles.container(marginTop)}>
      <View style={styles.orContainer}>
        <View style={styles.orInnerContainer}>
          <RegularText
            fontSize={2}
            numberOfLines={1}
            label={'OR'}
            color={colors.primaryBlueBrand}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onPressGoogle} style={styles.button}>
          {googleLoading ? (
            <ActivityIndicator color={loaderColor} size={'small'} />
          ) : (
            <FastImage
              resizeMode="contain"
              source={appIcons.google}
              style={styles.iconStyle as any}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressFacebook} style={styles.button}>
          {fbLoading ? (
            <ActivityIndicator color={loaderColor} size={'small'} />
          ) : (
            <FastImage
              resizeMode="contain"
              source={appIcons.facebook}
              style={styles.iconStyle as any}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressApple} style={styles.button}>
          {appleLoading ? (
            <ActivityIndicator color={loaderColor} size={'small'} />
          ) : (
            <FastImage
              resizeMode="contain"
              source={appIcons.apple}
              style={styles.iconStyle as any}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <RegularText
          fontSize={2}
          numberOfLines={1}
          label={title}
          color={loaderColor}
        />
        <TouchableOpacity onPress={onPressLink}>
          <SemiBoldText
            fontSize={2.2}
            numberOfLines={1}
            label={' ' + linkText}
            color={loaderColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SocialButton;
