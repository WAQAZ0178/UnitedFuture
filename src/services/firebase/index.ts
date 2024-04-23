import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const getFCMToken = async () => {
  //   const user = await firestore().collection('Users').doc(id).get();
  //   let fcmToken = user.data().fcmToken;
  //   return fcmToken;
};
const googleSignin = async () => {
  try {
    let obj = {};
    await googleSignout();
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    let res = await GoogleSignin.getCurrentUser();
    let data = await auth().signInWithCredential(googleCredential);
    obj = {
      email: data.user.email,
      given_name: res?.user?.givenName,
      family_name: res?.user.familyName,
      email_verified: data?.user.emailVerified,
    };
    return obj;
  } catch (error) {}
};

const googleSignout = async () => {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    console.log("error", error);
  }
};

export const firebaseServices = {
  googleSignin,
  googleSignout,
  getFCMToken,
};
