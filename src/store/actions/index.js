// import {
//     SET_PROFILE_INFO,
//     SET_ASSETS_INFO,
//     SET_NOTIFICATION_COUNT,
//     SET_USER_TRADE_LIST,

import types from '../types';

//     //?========== market screen
//     SET_MARKET_LIST,

//     //?========== watchlist screen  screen
//     SET_ALERT_LIST,
//     SET_WATCH_LIST,

//     //?========== history screen
//     SET_HISTORY_TABLE_DATA,
//     SET_HISTORY_TABLE_LIST,

//     //?========== assets screen
//     SET_ASSETS_FILTER_LIST,
//     SET_ASSETS_LIST,

//     //?========== portfolio screen
//     SET_PORTFOLIO_DATA,
//     SET_PORTFOLIO_TABLE_DATA,
//     SET_PORTFOLIO_CHART_DATA,

//     //?============ time updation
//     SET_ASSETS_LIST_UPDATIONTIME,
//     SET_MARKET_LIST_UPDATIONTIME,
//     SET_WATCH_LIST_UPDATIONTIME,
//     SET_HISTORY_UPDATIONTIME,

//     //?============ payout and deductions
//     SET_DEDUCTIONS_LIST,
//     SET_PAYOUT_LIST,

//     //?============ user id
//     SET_USER_ID,

//     //?=============== user logout
//     SET_ALL_DATA,

//     //?=============== advertsiment date action
//     SET_ADVERTISMENT_DATE,

//     //?=============== user navigation options
//     SET_USER_NAVIGATION_OPTION,

//     //?===============our trainings
//     SET_OUR_TRAININGS,
//   } from './actionTypes';

const setProfileInfo = payload => {
  return (dispatch, getState) => {
    dispatch({
      type: types.SET_PROFILE_INFO,
      payload,
    });
  };
};

//   const setAssetsInfo = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_ASSETS_INFO,
//         payload,
//       });
//     };
//   };

//   const setNotificationCount = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_NOTIFICATION_COUNT,
//         payload,
//       });
//     };
//   };

//   const setUserTradeList = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_USER_TRADE_LIST,
//         payload,
//       });
//     };
//   };

//   //!======================== function for assets list ============================
//   const setAssetsList = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_ASSETS_LIST,
//         payload,
//       });
//     };
//   };

//   const setAssetsFilterList = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_ASSETS_FILTER_LIST,
//         payload,
//       });
//     };
//   };

//   //!======================== function for market list ============================
//   const setMarketList = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_MARKET_LIST,
//         payload,
//       });
//     };
//   };

//   //!======================== function for watchlist  list ============================
//   const setWatchList = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_WATCH_LIST,
//         payload,
//       });
//     };
//   };

//   //!======================== function for alert list ============================
//   const setAlertList = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_ALERT_LIST,
//         payload,
//       });
//     };
//   };

//   //!======================== function for history table list  data ============================
//   const setHistortyTabledata = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_HISTORY_TABLE_DATA,
//         payload,
//       });
//     };
//   };

//   //!======================== function for history table data ============================
//   const setHistoryTableList = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_HISTORY_TABLE_LIST,
//         payload,
//       });
//     };
//   };

//   //!======================== function for porfolio  data ============================
//   const setPortfolioData = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_PORTFOLIO_DATA,
//         payload,
//       });
//     };
//   };

//   const setPortfolioChartData = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_PORTFOLIO_CHART_DATA,
//         payload,
//       });
//     };
//   };

//   const setPortfolioTableData = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_PORTFOLIO_TABLE_DATA,
//         payload,
//       });
//     };
//   };

//   //!======================== function for store data updation   date time ============================
//   const setAssetsListUpdationTime = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_ASSETS_LIST_UPDATIONTIME,
//         payload,
//       });
//     };
//   };

//   const setWatchListUpdationTime = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_WATCH_LIST_UPDATIONTIME,
//         payload,
//       });
//     };
//   };

//   const setMarketUpdationTime = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_MARKET_LIST_UPDATIONTIME,
//         payload,
//       });
//     };
//   };

//   const setHistoryUpdationTime = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_HISTORY_UPDATIONTIME,
//         payload,
//       });
//     };
//   };

//   //!======================== function for update payout  ============================
//   const setPayout = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_PAYOUT_LIST,
//         payload,
//       });
//     };
//   };

//   //!======================== function for update deductions  ============================
//   const setDeductions = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_DEDUCTIONS_LIST,
//         payload,
//       });
//     };
//   };

//   //!======================== function for update user ID   ============================
//   const setUserId = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_USER_ID,
//         payload,
//       });
//     };
//   };

//   //!======================== function for update user ID   ============================
//   const resetAllData = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_ALL_DATA,
//         payload,
//       });
//     };
//   };

//   //!======================== function for update advertisment date  ============================
//   const setAdvertismentDate = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_ADVERTISMENT_DATE,
//         payload,
//       });
//     };
//   };

//   //!======================== function for user naviagtion route  ============================
//   const setUserNavigationOption = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_USER_NAVIGATION_OPTION,
//         payload,
//       });
//     };
//   };

//   //!======================== here we update our trainings ============================
//   const setOurTrainings = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_OUR_TRAININGS,
//         payload,
//       });
//     };
//   };

//   //!======================== for user apple login store user email ,name============================
//   const setAppleInfo = payload => {
//     return (dispatch, getState) => {
//       dispatch({
//         type: SET_APPLE_INFO,
//         payload,
//       });
//     };
//   };

export const ACTIONS = {
  setProfileInfo,
  // setNotificationCount,
  // setAssetsInfo,
  // setUserTradeList,
  // setAssetsList,
  // setMarketList,
  // setAlertList,
  // setWatchList,
  // setHistortyTabledata,
  // setHistoryTableList,
  // setAssetsFilterList,
  // setPortfolioTableData,
  // setPortfolioData,
  // setPortfolioChartData,

  // setMarketUpdationTime,
  // setWatchListUpdationTime,
  // setAssetsListUpdationTime,
  // setHistoryUpdationTime,

  // setDeductions,
  // setPayout,
  // setUserId,
  // resetAllData,
  // setAdvertismentDate,
  // setOurTrainings,
  // setUserNavigationOption,
  // setAppleInfo,
};
