import {Alert, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CommonActions} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {ACTIONS} from '../../store/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from 'react';

const show = (title: string, message: string) => {
  Alert.alert(title, message, [
    {
      text: 'OK',
      style: 'destructive',
    },
  ]);
};

const deleteAlert = () => {
  return new Promise((resolve, reject) => {
    Alert.alert('Delete', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          resolve();
        },
      },
    ]);
  });
};

const confirm = (
  message: string,
  okText: string,
  cancelText: string,
  title: string,
) => {
  return new Promise((resolve, reject) => {
    Alert.alert(
      title ? title : null,
      message,
      [
        {
          text: cancelText || 'Cancel',
          onPress: () => {
            reject();
          },
          style: 'cancel',
        },
        {text: okText || 'OK', onPress: () => resolve(true)},
      ],
      {cancelable: false},
    );
  });
};

const logoutAlert = (props: any, dispatch: any) => {
  Alert.alert(
    'Logout',
    'Do You Want To Logout ',
    [
      {
        text: 'Cancel',
        onPress: () => {
          return 'cancel';
        },
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          logout(props, dispatch);
        },
      },
    ],

    {
      textStyle: {
        allowFontScaling: false,
      },
    },
  );
};

const logout = async (props: any, dispatch: any) => {
  dispatch(ACTIONS.resetAllData(''));
  props.navigation.replace('Auth', {screen: 'Welcome'});
};

export const alertServices = {
  show,
  deleteAlert,
  confirm,
  logoutAlert,
};
