import { RouteProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useFormik } from "formik";
import moment from "moment";
import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTradeTextInput,
  AppButton,
  AuthHeader,
  DisableTradeTextInput,
  KeyboardAvoidScrollview,
  NotesTextInput,
} from "../../../../components/general";
import { colors } from "../../../../global/utilities";
import { API } from "../../../../services/apiServices";
import { openTradeValidationSchema } from "../../../../services/validationServices";
import { RootStackParamList } from "../../../../types";
import styles from "./styles";
import { CloseTradeHeader } from "../../../../components/feed";
type NextScreenProps = {
  route: RouteProp<{ params: { data: any } }, "params">;
};
type props = NativeStackNavigationProp<RootStackParamList, "CloseTrade">;
const CloseTrade: React.FC<NextScreenProps> = ({ route }) => {
  const navigation = useNavigation<props>();
  const dispatch = useDispatch();
  const { data } = route?.params;
  const tokens = useSelector(
    (store: any) => store?.state?.userReducer?.userToken
  );
  const portfolio = useSelector((store: any) => store?.state?.portfolioReducer);
  const [loading, setloading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [stockType, setStockType] = useState(1);
  const [currentItem, setcurrentItem] = useState<any>({
    name: String,
    price: String,
    id: String,
  });

  const initialValues = {
    commodutiesType: "stock",
    symbol: "",
    date: moment().format("MM/DD/YYYY"),
    price: "",
    quantity: "",
    deductions: "",
    selltype: "long",
    comment: "",
  };

  const { values, errors, touched, setFieldValue, setFieldTouched, isValid } =
    useFormik({
      initialValues: initialValues,
      validateOnBlur: true,
      validateOnChange: true,
      enableReinitialize: true,
      validationSchema: openTradeValidationSchema,
      onSubmit: () => onSubmit(),
    });

  const onSubmit = () => {
    setFieldTouched("symbol", true);
    if (isValid && Object.keys(touched).length > 0) {
      try {
        if (values?.symbol.length > 0) {
          // postTradeData();
        } else {
          setFieldTouched("symbol", true);
          setFieldTouched("quantity", true);
        }
      } catch (error) {}
    } else {
    }
  };

  const postTradeData = async () => {
    setloading(true);
    let portfolioId = portfolio?.currentPortfolio?.id;
    let obj = {
      portfolio_id: Number(portfolioId),
      trade_type:
        values.commodutiesType == "mutual_fund" ? "long" : values.selltype,
      transaction_price: Number(values.price),
      transaction_date: values.date,
      transaction_qty: Number(values.quantity),
      deduction: Number(values.deductions),
      asset_id: Number(currentItem?.id),
      asset_type: values.commodutiesType,
      comment: values.comment,
    };

    let res: any = await API.postData("trades", obj, tokens?.access);

    setloading(false);
  };

  //todo============================= store stock data into redux===============================
  //todo============================== get symbol type and symbol data as a parameter =========================
  const dispatchData = (type: string, data: any) => {
    dispatch({ type: type, payload: data });
  };

  //?====================== hide date picker  =======================
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  //?====================== set date picker value in state  =======================
  const handleConfirm = (date: Date) => {
    setFieldValue("date", moment(date).format("MM/DD/YYYY"));
    setFieldTouched("date", true);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader
        backgroundColor="white"
        onBackPress={() => navigation.goBack()}
        textColor="black"
        title="Close Trade"
        marginTop={0}
      />
      <KeyboardAvoidScrollview keyboardShouldPersistTaps="handled">
        <CloseTradeHeader item={{}} marginTop={1} />
        <DisableTradeTextInput
          onPress={() => {}}
          value={values.symbol}
          loading={dataLoading}
          error={touched.symbol && errors?.symbol ? errors.symbol : undefined}
          placeholder="ABL"
          label="Symbol"
          marginTop={2}
          isDropDown={false}
        />

        <DisableTradeTextInput
          onPress={() => setDatePickerVisibility(true)}
          value={values.date}
          loading={false}
          error={touched.date && errors?.date ? errors.date : undefined}
          placeholder="10/02/2023"
          label="Date"
          marginTop={1}
          isDropDown={false}
        />

        <AddTradeTextInput
          onChangeText={(str) => setFieldValue("price", str)}
          onBlur={() => setFieldTouched("price", true)}
          value={values.price}
          error={touched.price && errors?.price ? errors.price : undefined}
          placeholder="0"
          keyboardType="decimal-pad"
          label={
            stockType == 2
              ? "Nav Price"
              : stockType == 4
              ? "Price (Tola)"
              : "Price"
          }
          multiline={false}
          maxLength={100}
          numofline={1}
          editable={true}
          marginTop={1}
          isDropDown={false}
        />

        <AddTradeTextInput
          onChangeText={(str) => setFieldValue("quantity", str)}
          onBlur={() => setFieldTouched("quantity", true)}
          value={values.quantity}
          error={
            touched.quantity && errors?.quantity ? errors.quantity : undefined
          }
          placeholder="0"
          keyboardType="decimal-pad"
          label="Quantity"
          multiline={false}
          maxLength={100}
          numofline={1}
          editable={true}
          marginTop={1}
          isDropDown={false}
        />

        <AddTradeTextInput
          onChangeText={(str) => setFieldValue("deductions", str)}
          onBlur={() => setFieldTouched("deductions", true)}
          value={values.deductions}
          error={
            touched.deductions && errors?.deductions
              ? errors.deductions
              : undefined
          }
          placeholder="0"
          keyboardType="decimal-pad"
          label={stockType == 3 ? "Lot Size" : "Deductions"}
          multiline={false}
          maxLength={100}
          numofline={1}
          editable={true}
          marginTop={1}
          isDropDown={false}
        />

        <NotesTextInput
          onChangeText={(str) => setFieldValue("comment", str)}
          onBlur={() => setFieldTouched("comment", true)}
          value={values.comment}
          error={
            touched.comment && errors?.comment ? errors.comment : undefined
          }
          placeholder="Enter your notes"
          keyboardType="default"
          label="Notes"
          multiline={false}
          maxLength={100}
          numofline={1}
          editable={true}
          marginTop={2}
          isDropDown={false}
        />

        <View style={styles.buttonContainer}>
          <AppButton
            backgroundColor={colors.white}
            disabled={false}
            loading={false}
            loaderColor={colors.primaryBlueBrand}
            marginTop={0}
            onPress={() => navigation.goBack()}
            title="Cancel"
            width={30}
            hasBorder={true}
            borderColor={colors.primaryBlueBrand}
          />

          <AppButton
            backgroundColor={colors.primaryBlueBrand}
            disabled={loading}
            loading={loading}
            loaderColor={colors.white}
            marginTop={0}
            onPress={() => onSubmit()}
            title="Close Trade"
            width={60}
          />
        </View>
      </KeyboardAvoidScrollview>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date(moment().toDate())}
      />
    </SafeAreaView>
  );
};

export default CloseTrade;
