//import liraries
import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styles from "./styles";
import { Icon } from "react-native-elements";
import { responsiveFontSize } from "react-native-responsive-dimensions";
import { colors } from "../../../global/utilities";
import { useSelector } from "react-redux";
import BoldText from "../../../typography/boldText";

interface CProps {
  onBackPress: () => void;
  onPressLeftIcon: () => void;
  onPressRightIcon: () => void;
  onPressReload: () => void;
  onChange: (text: string) => void;
  backgroundColor: string;
  leftIconName: string;
  leftIconType: string;
  textColor: string;
  title: string;
  search: string;
  showRightIcon: boolean;
  showLeftIcon: boolean;
  showReload: boolean;
  showSearchBar: boolean;
}
const AppHeader: React.FC<CProps> = ({
  onBackPress,
  backgroundColor = colors.white,
  title,
  textColor = colors.black,
  showRightIcon,
  showLeftIcon,
  onPressLeftIcon,
  leftIconName = "menu",
  leftIconType = "feather",
  onPressRightIcon,
  onPressReload,
  showReload = false,
  showSearchBar = false,
  search,
  onChange,
}) => {
  //   const count = useSelector(state => state.state.notificationCount);
  return (
    <View>
      <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
        {showLeftIcon ? (
          <TouchableOpacity onPress={onPressLeftIcon} style={styles.emptyBox}>
            <Icon
              type={leftIconType}
              name={leftIconName}
              color={textColor}
              size={responsiveFontSize(3.2)}
            />
          </TouchableOpacity>
        ) : (
          <View style={styles.emptyBox}></View>
        )}

        <BoldText
          color={textColor}
          fontSize={2.5}
          label={title}
          numberOfLines={1}
          maxWidth={40}
        />

        {showRightIcon ? (
          <View style={styles.rightContainer}>
            {showReload ? (
              <TouchableOpacity
                style={styles.reloadButton}
                onPress={onPressReload}
              >
                <Icon
                  type="ionicon"
                  name="reload"
                  color={textColor}
                  size={responsiveFontSize(3.2)}
                />
              </TouchableOpacity>
            ) : null}
            <TouchableOpacity onPress={onPressRightIcon}>
              {/* {count > 0 ? (
                <View style={styles.badgeContainer}>
                
                       <BoldText
          color={textColor}
          fontSize={2.5}
          label={count}
          numberOfLines={1}
          style={styles.badgeText}
        />
                </View>
              ) : null} */}
              <Icon
                type="ionicon"
                name="notifications-outline"
                color={textColor}
                size={responsiveFontSize(3.2)}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.emptyBox}></View>
        )}
      </View>

      {showSearchBar ? (
        <View style={styles.searchInputContainer}>
          <TextInput
            allowFontScaling={false}
            placeholder="Search"
            placeholderTextColor={colors.gray500}
            style={styles.textInput}
            numberOfLines={1}
            value={search}
            onChange={({ nativeEvent: { eventCount, target, text } }) =>
              onChange(text)
            }
          />
          <TouchableOpacity>
            <Icon
              type="feather"
              name="search"
              color={colors.gray500}
              size={responsiveFontSize(2)}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
export default React.memo(AppHeader);
