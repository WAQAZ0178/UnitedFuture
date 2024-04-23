import React, { useEffect } from "react";
import { TouchableOpacity, SafeAreaView, View } from "react-native";
import styles from "./styles";
import { appImages, colors } from "../../../global/utilities";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../../../types";
import { useNavigation } from "@react-navigation/native";
import OnboardingSwiper, { DotProps } from "react-native-onboarding-swiper";
import FastImage from "react-native-fast-image";
import SemiBoldText from "../../../typography/semiBoldText";
import { Icon } from "react-native-elements";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import moment from "moment";
import { setKey } from "../../../services/storageServices";
type props = NativeStackNavigationProp<AuthStackParamList, "Onboarding">;

const Onboarding: React.FC<{}> = () => {
  const navigation = useNavigation<props>();
  useEffect(() => {
    updateData();
  }, []);

  const updateData = async () => {
    await setKey("isFirstTime", moment().format("YYYMMDDhhmmss"));
  };
  const skip = ({ ...props }) => (
    <TouchableOpacity
      {...props}
      onPress={() => navigation.replace("Login")}
      style={styles.skipButton}
    >
      <SemiBoldText
        label={"Skip"}
        fontSize={2}
        color={colors.primaryBlueBrand}
        numberOfLines={1}
      />
    </TouchableOpacity>
  );

  const done = ({ ...props }) => (
    <TouchableOpacity
      {...props}
      onPress={() => navigation.replace("Login")}
      style={styles.getStartedButton}
    >
      <SemiBoldText
        label={"Get Started"}
        fontSize={2}
        color={colors.primaryBlueBrand}
        numberOfLines={1}
      />
    </TouchableOpacity>
  );

  const nextButton = ({ ...props }) => (
    <TouchableOpacity {...props} style={styles.nextButton}>
      <Icon
        name={"keyboard-arrow-right"}
        type={"materialicon"}
        color={colors.primaryBlueBrand}
        size={responsiveFontSize(2.5)}
      />
    </TouchableOpacity>
  );

  const CustomDot = (selected: boolean) => {
    return (
      <TouchableOpacity
        // onPress={() => setCurrentIndex(dotIndex)}
        style={styles.dotContainer}
      >
        <View style={selected ? styles.activeDot : styles.dot} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <OnboardingSwiper
        showDone={true}
        showNext={true}
        showSkip={true}
        showPagination={true}
        bottomBarColor={colors.white}
        subTitleStyles={styles.subTitle}
        titleStyles={styles.titleText}
        SkipButtonComponent={skip}
        DoneButtonComponent={done}
        NextButtonComponent={nextButton}
        DotComponent={({ selected }) => CustomDot(selected)}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        transitionAnimationDuration={500}
        pages={[
          {
            backgroundColor: colors.white,
            image: (
              <FastImage
                source={appImages.onboardOne}
                style={styles.sliderImage as any}
                resizeMode="contain"
              />
            ),
            title: "Unlock Your Potential",
            subtitle:
              "Your all-in-one investment solution. Manage and grow your investments effortlessly",
          },
          {
            backgroundColor: colors.white,
            image: (
              <FastImage
                source={appImages.onboardTwo}
                resizeMode="contain"
                style={styles.sliderImage as any}
              />
            ),

            title: "Customize Portfolios",
            subtitle:
              "Create portfolios for different goals. Tailor your investments with ease. ",
          },
          {
            backgroundColor: colors.white,
            image: (
              <FastImage
                source={appImages.onboardThree}
                resizeMode="contain"
                style={styles.sliderImage as any}
              />
            ),

            title: "Diversify Your Holdings",
            subtitle:
              "Create multiple portfolios for varied goals. Stay organized, in control.",
          },
        ]}
      />
    </SafeAreaView>
  );
};

export default Onboarding;
