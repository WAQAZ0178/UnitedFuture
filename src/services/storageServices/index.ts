import AsyncStorage from '@react-native-async-storage/async-storage';
const getKey = async (key:string) => {
  let res = await AsyncStorage.getItem(key);
  return res;
};
const setKey = async (name:string, value:string) => {
  await AsyncStorage.setItem(name, value);
};
const deleteKey = async (key:string) => {
  await AsyncStorage.removeItem(key);
};

const storeObject = async (key:string, value:object) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {}
};

const getObject = async (key:string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    if (jsonValue !== null) {
      const value = JSON.parse(jsonValue);
      return value;
    }
  } catch (error) {}
};

export  {
  getKey,
  setKey,
  deleteKey,
  getObject,
  storeObject,
};
