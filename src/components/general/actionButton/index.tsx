// //import liraries
// import React, { useState } from "react";
// import { Text, TouchableOpacity, View } from "react-native";
// import styles from "./styles";
import { Icon } from "react-native-elements";

// import {
//   responsiveFontSize,
//   responsiveHeight,
//   responsiveWidth,
// } from "react-native-responsive-dimensions";
import { colors, fontFamily } from "../../../global/utilities";
// import { Portal, FAB, Provider } from "react-native-paper";
interface CProps {
  onPress: () => void;
  onPressAddPortfolio: () => void;
  onPressAddTrade: () => void;
  disabled: boolean;
  backgroundColor: string;
  marginBottom: number;
  marginRight: number;
}
// const ActionButton: React.FC<CProps> = ({
//   disabled,
//   backgroundColor = colors.primaryGreenBrand,
//   marginBottom = 0,
//   marginRight = 0,
//   onPress,
//   onPressAddPortfolio,
//   onPressAddTrade,
// }) => {
//   const [state, setState] = React.useState({ open: false });

//   const onStateChange = () => {
//     setState({ open: !open });
//   };

//   const { open } = state;

//   const toggleOptions = () => {
//     setState({ open: !state.open });
//   };

//   return (
//     <Portal.Host>
//       <FAB.Group
//         open={state.open}
//         visible={true}
//         icon={open ? "close" : "plus"}
//         backdropColor="transparent"
//         style={{
//           paddingBottom: responsiveHeight(marginBottom),
//         }}
//         actions={[
//           {
//             icon: "briefcase-outline",
//             label: "Add Portfolio",
//             onPress: () => {
//               toggleOptions(); // Toggle the open state
//               onPressAddPortfolio();
//             },
//             color: colors.white,
//             style: {
//               backgroundColor: colors.primaryBlueBrand,
//             },
//             labelTextColor: colors.primaryBlueBrand,
//           },

//           {
//             icon: "plus",
//             label: "Add Trade",
//             onPress: () => {
//               toggleOptions(); // Toggle the open state
//               // if (onPress) onPress();
//               onPressAddTrade();
//             },
//             color: colors.white,
//             style: {
//               backgroundColor: colors.primaryBlueBrand,
//             },
//             labelTextColor: colors.primaryBlueBrand,
//           },
//         ]}
//         fabStyle={{
//           backgroundColor: colors.primaryBlueBrand,
//         }}
//         color="white"
//         onStateChange={() => {
//           // console.log("ekjhfkjkjf");
//         }}
//         onLongPress={() => {
//           // console.log("long press");
//         }}
//         onPress={() => {
//           if (open) {
//             setState({ open: false });
//             // do something if the speed dial is open
//           } else {
//             setState({ open: true });
//           }
//         }}
//       />
//     </Portal.Host>
//   );
// };

// export default React.memo(ActionButton);

import {
  Image,
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import Animated, {
  Easing,
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { appIcons } from "../../../global/utilities";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { TouchableOpacity } from "react-native-gesture-handler";

const ActionButton: React.FC<CProps> = ({
  disabled,
  backgroundColor = colors.primaryGreenBrand,
  marginBottom = 0,
  marginRight = 0,
  onPress,
  onPressAddPortfolio,
  onPressAddTrade,
}) => {
  const firstValue = useSharedValue(30);
  const secondValue = useSharedValue(30);
  const thirdValue = useSharedValue(30);
  const firstWidth = useSharedValue(60);
  const secondWidth = useSharedValue(60);
  const thirdWidth = useSharedValue(60);
  const isOpen = useSharedValue(false);
  const opacity = useSharedValue(0);
  const progress = useDerivedValue(() =>
    isOpen.value ? withTiming(1) : withTiming(0)
  );

  const handlePress = () => {
    const config = {
      easing: Easing.bezier(0.68, -0.6, 0.32, 1.6),
      duration: 500,
    };
    if (isOpen.value) {
      firstWidth.value = withTiming(60, { duration: 100 }, (finish) => {
        if (finish) {
          firstValue.value = withTiming(30, config);
        }
      });
      secondWidth.value = withTiming(60, { duration: 100 }, (finish) => {
        if (finish) {
          secondValue.value = withDelay(50, withTiming(30, config));
        }
      });
      thirdWidth.value = withTiming(60, { duration: 100 }, (finish) => {
        if (finish) {
          thirdValue.value = withDelay(100, withTiming(30, config));
        }
      });
      opacity.value = withTiming(0, { duration: 100 });
    } else {
      firstValue.value = withDelay(200, withSpring(130));
      secondValue.value = withDelay(100, withSpring(210));
      thirdValue.value = withSpring(290);
      firstWidth.value = withDelay(1200, withSpring(200));
      secondWidth.value = withDelay(1100, withSpring(200));
      thirdWidth.value = withDelay(1000, withSpring(200));
      opacity.value = withDelay(1200, withSpring(1));
    }
    isOpen.value = !isOpen.value;
  };

  const opacityText = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const firstWidthStyle = useAnimatedStyle(() => {
    return {
      width: firstWidth.value,
    };
  });
  const secondWidthStyle = useAnimatedStyle(() => {
    return {
      width: secondWidth.value,
    };
  });
  const thirdWidthStyle = useAnimatedStyle(() => {
    return {
      width: thirdWidth.value,
    };
  });

  const firstIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      firstValue.value,
      [30, 130],
      [0, 1],
      Extrapolate.CLAMP
    );

    return {
      bottom: firstValue.value,
      transform: [{ scale: scale }],
    };
  });

  const secondIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      secondValue.value,
      [30, 210],
      [0, 1],
      Extrapolate.CLAMP
    );

    return {
      bottom: secondValue.value,
      transform: [{ scale: scale }],
    };
  });

  const thirdIcon = useAnimatedStyle(() => {
    const scale = interpolate(
      thirdValue.value,
      [30, 290],
      [0, 1],
      Extrapolate.CLAMP
    );

    return {
      bottom: thirdValue.value,
      transform: [{ scale: scale }],
    };
  });

  const plusIcon = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${progress.value * 45}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.contentContainer, thirdIcon, thirdWidthStyle]}
      >
        <TouchableOpacity onPress={onPressAddPortfolio}>
          <Animated.Text selectable={false} style={[styles.text, opacityText]}>
            Add Portfolio
          </Animated.Text>
        </TouchableOpacity>

        <View style={styles.iconContainer}>
          <Icon
            name={"briefcase-outline"}
            type="ionicon"
            color={colors.white}
            size={responsiveFontSize(3)}
          />
        </View>
      </Animated.View>

      <Animated.View
        style={[styles.contentContainer, secondIcon, secondWidthStyle]}
      >
        <TouchableOpacity onPress={onPressAddTrade}>
          <Animated.Text style={[styles.text, opacityText]}>
            Add Trade
          </Animated.Text>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <Icon
            name={"plus"}
            type="entypo"
            color={colors.white}
            size={responsiveFontSize(3)}
          />
        </View>
      </Animated.View>
      {/* <Animated.View
        style={[styles.contentContainer, firstIcon, firstWidthStyle]}
      >
        <View style={styles.iconContainer}>
          <Image source={appIcons.apple} style={styles.icon} />
        </View>
        <Animated.Text style={[styles.text, opacityText]}>
          New Folder
        </Animated.Text>
      </Animated.View> */}
      <Pressable
        style={styles.contentContainer}
        onPress={() => {
          handlePress();
        }}
      >
        <Animated.View style={[styles.iconContainer, plusIcon]}>
          <Icon
            name={isOpen.value ? "close" : "plus"}
            type={isOpen.value ? "ionicon" : "entypo"}
            color={colors.white}
            size={responsiveFontSize(3)}
          />
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: colors.primaryBlueBrand,
    position: "absolute",
    bottom: responsiveHeight(11),
    right: responsiveWidth(3),
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  iconContainer: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    color: colors.white,
    fontSize: responsiveFontSize(2),
    fontFamily: fontFamily.appTextSemiBold,
  },
});
