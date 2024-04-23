//import liraries
import React from 'react';
import {TouchableOpacity} from 'react-native';

import styles from './styles';
import {ActivityIndicator} from 'react-native-paper';
import {appIcons, colors} from '../../../global/utilities';
import FastImage from 'react-native-fast-image';
interface CProps {
  onPress: () => void;

  loading: boolean;
  disabled: boolean;
}
const FingerPrintButton: React.FC<CProps> = ({loading, disabled, onPress}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.container}>
      {loading ? (
        <ActivityIndicator color={colors.primaryBlueBrand} size={'small'} />
      ) : (
        <FastImage
          resizeMode="contain"
          source={appIcons.fingerPrint}
          style={styles.fingerIcon}
        />
      )}
    </TouchableOpacity>
  );
};

export default FingerPrintButton;
