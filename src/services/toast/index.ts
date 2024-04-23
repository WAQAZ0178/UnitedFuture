import NativeToast from "react-native-toast-message";
const showToast = (
  heading: string,
  message: string,
  ToastType: "success" | "error" | "info" = "success"
) => {
  NativeToast.show({
    type: ToastType,
    text1: heading,
    text2: message,
    position: "top",
    visibilityTime: 2000,
    autoHide: true,
  });
};
export const Toast = {
  showToast,
};
