import React, { useEffect, useState } from "react";
import { View, SafeAreaView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../types";
import {
  AddTradeTextInput,
  AppButton,
  AssetsSelector,
  AuthHeader,
  DisableTradeTextInput,
  KeyboardAvoidScrollview,
  NotesTextInput,
} from "../../../../components/general";
import { useFormik } from "formik";
import { colors } from "../../../../global/utilities";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import RegularText from "../../../../typography/regularText";
import { RadioButton, Text } from "react-native-paper";
import SearchStock from "../../../../components/modals/searchStock";
import { useDispatch, useSelector } from "react-redux";
import { symbolTypes } from "../../../../store/types";
import { API } from "../../../../services/apiServices";
import { string } from "yup";
import { openTradeValidationSchema } from "../../../../services/validationServices";
type props = NativeStackNavigationProp<RootStackParamList, "AddTrade">;
const AddTrade: React.FC<{}> = () => {
  const navigation = useNavigation<props>();
  const dispatch = useDispatch();
  const tokens = useSelector(
    (store: any) => store?.state?.userReducer?.userToken
  );
  const portfolio = useSelector((store: any) => store?.state?.portfolioReducer);
  const stockData = useSelector((store: any) => store?.state?.symbolReducer);
  const [loading, setloading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [stockType, setStockType] = useState(1);
  const [currentItem, setcurrentItem] = useState<any>({
    name: string,
    price: string,
    id: string,
  });
  const [searchModal, setSearchModal] = useState(false);
  const [currentSymbolData, setCurrentSymbolData] = useState([]);
  const [list, setList] = useState([
    {
      name: "Stocks",
      key: 1,
      isSelected: true,
    },

    {
      name: "Mutual Funds",
      key: 2,
      isSelected: false,
    },

    {
      name: "Forex",
      key: 3,
      isSelected: false,
    },

    {
      name: "Commodities",
      key: 4,
      isSelected: false,
    },
  ]);

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

  useEffect(() => {
    getStocksData();
  }, []);

  const onSubmit = () => {
    setFieldTouched("symbol", true);
    if (isValid && Object.keys(touched).length > 0) {
      try {
        if (values?.symbol.length > 0) {
          postTradeData();
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

  //todo================================ check data in redux if data exist then set it in local state =================================
  //!================================ if data not exist then call mutualfund api store data into redux and local state =================================
  const getMutualFundData = async () => {
    setDataLoading(true);
    let isAvailable = checkData(stockData?.mutualFund);
    if (isAvailable) {
      setCurrentSymbolData(stockData?.mutualFund);
    } else {
      let res: any = await API.getData("trades/symbols/mutual_fund");
      if (res?.data) {
        dispatchData(symbolTypes.SET_MUTUAL_FUND, res?.data);
        setCurrentSymbolData(res?.data);
      }
    }
    setDataLoading(false);
  };

  //todo================================ check data in redux if data exist then set it in local state =================================
  //!================================ if data not exist then call stockdata  api store data into redux and local state =================================
  const getStocksData = async () => {
    setDataLoading(true);
    let isAvailable = checkData(stockData?.stocks);
    if (isAvailable) {
      setCurrentSymbolData(stockData?.stocks);
    } else {
      let res: any = await API.getData("trades/symbols/stock");
      if (res?.data) {
        dispatchData(symbolTypes.SET_STOCK, res?.data);
        setCurrentSymbolData(res?.data);
      }
    }
    setDataLoading(false);
  };

  //todo================================ check data in redux if data exist then set it in local state =================================
  //!================================ if data not exist then call get commoduty  api store data into redux and local state =================================
  const getCommodityData = async () => {
    setDataLoading(true);
    let isAvailable = checkData(stockData?.commodity);
    if (isAvailable) {
      setCurrentSymbolData(stockData?.commodity);
    } else {
      let res: any = await API.getData("trades/symbols/commodity");
      if (res?.data) {
        dispatchData(symbolTypes.SET_COMMODITY, res?.data);
        setCurrentSymbolData(res?.data);
      }
    }
    setDataLoading(false);
  };

  //todo================================ check data in redux if data exist then set it in local state =================================
  //!================================ if data not exist then call get forex api store data into redux and local state =================================
  const getForexData = async () => {
    setDataLoading(true);
    let isAvailable = checkData(stockData?.forex);
    if (isAvailable) {
      setCurrentSymbolData(stockData?.forex);
    } else {
      let res: any = await API.getData("trades/symbols/forex");
      if (res?.data) {
        dispatchData(symbolTypes.SET_FOREX, res?.data);
        setCurrentSymbolData(res?.data);
      }
    }
    setDataLoading(false);
  };

  //todo================================ check array lenght receive array as parameter  if data length  >1 return true else false  =================================
  const checkData = (data: any) => {
    if (data?.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  //todo============================= store stock data into redux===============================
  //todo============================== get symbol type and symbol data as a parameter =========================
  const dispatchData = (type: string, data: any) => {
    dispatch({ type: type, payload: data });
  };

  //todo============================= change selected assets type ===============================
  //todo============================== on basis of selected assets show assets list =========================
  const onPressAssetsType = async (item: any) => {
    let copy = [...list];
    copy.map((e) => {
      if (e.key == item?.key) {
        setStockType(e.key);
        e.isSelected = true;
      } else {
        e.isSelected = false;
      }
    });

    switch (item?.key) {
      case 1:
        setFieldValue("commodutiesType", "stock");
        await getStocksData();
        break;

      case 2:
        setFieldValue("commodutiesType", "mutual_fund");
        await getMutualFundData();
        break;

      case 3:
        setFieldValue("commodutiesType", "forex");
        await getForexData();

        break;

      case 4:
        setFieldValue("commodutiesType", "commodity");
        await getCommodityData();
        break;

      default:
        break;
    }
    setList(copy);
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
        title="Add Trade"
        marginTop={0}
      />
      <KeyboardAvoidScrollview keyboardShouldPersistTaps="handled">
        <AssetsSelector
          label="Assets Type"
          marginTop={2}
          onPress={(item) => onPressAssetsType(item)}
          value=""
          list={list}
        />
        <DisableTradeTextInput
          onPress={() => setSearchModal(true)}
          value={values.symbol}
          loading={dataLoading}
          error={touched.symbol && errors?.symbol ? errors.symbol : undefined}
          placeholder="ABL"
          label="Symbol"
          marginTop={4}
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

        {stockType !== 2 ? (
          <View style={[styles.innerContainer]}>
            <RegularText
              label={"Type"}
              fontSize={2}
              color={colors.primaryBlueBrand}
              numberOfLines={1}
              style={styles.notesLable}
              maxWidth={20}
            />
            <View style={styles.checkBoxInnerView}>
              <View style={styles.radioButtonContainer}>
                <RegularText
                  label={"Long"}
                  fontSize={1.8}
                  color={colors.primaryBlueBrand}
                  numberOfLines={1}
                  style={styles.notesLable}
                  maxWidth={20}
                />
                <RadioButton
                  color={colors.primaryBlueBrand}
                  uncheckedColor={colors.primaryBlueBrand}
                  onPress={() => setFieldValue("selltype", "long")}
                  status={values.selltype == "long" ? "checked" : "unchecked"}
                  value="long"
                />
              </View>
              <View style={styles.radioButtonContainer}>
                <RegularText
                  label={"Short"}
                  fontSize={1.8}
                  color={colors.primaryBlueBrand}
                  numberOfLines={1}
                  style={styles.notesLable}
                  maxWidth={20}
                />
                <RadioButton
                  uncheckedColor={colors.primaryBlueBrand}
                  color={colors.primaryBlueBrand}
                  onPress={() => setFieldValue("selltype", "short")}
                  status={values.selltype == "short" ? "checked" : "unchecked"}
                  value="short"
                />
              </View>
            </View>
          </View>
        ) : null}

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
            title="Add Trade"
            width={60}
          />
        </View>
      </KeyboardAvoidScrollview>

      <SearchStock
        setvisible={setSearchModal}
        setSearchModal={setSearchModal}
        visible={searchModal}
        data={currentSymbolData}
        setcurrentItem={setcurrentItem}
        setFieldValue={(type, val) => setFieldValue(type, val)}
      />
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

export default AddTrade;
