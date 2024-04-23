import React, {ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {responsiveHeight} from 'react-native-responsive-dimensions';

interface cType {
  children: ReactNode;
  // contentContainerStyle: ViewStyle;
  keyboardShouldPersistTaps:
    | 'never'
    | 'always'
    | 'handled'
    | boolean
    | undefined;
}
const KeyboardAvoidScrollview: React.FC<cType> = ({
  children,
  // contentContainerStyle,
  keyboardShouldPersistTaps,
}) => {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      contentContainerStyle={{paddingBottom: responsiveHeight(5)}}
      // contentContainerStyle={[contentContainerStyle]}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};
export default KeyboardAvoidScrollview;
