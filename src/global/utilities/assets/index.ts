const IMAGE_DIR = "../../../res/images/app/";
const ICON_DIR = "../../../res/images/icons/";

const SVG_DIR = "../../../res/images/svgs/";
const GIF_DIR = "../../../res/gif/";

import HomeSvg from "../../../res/images/svgs/home.svg";
import SearchSvg from "../../../res/images/svgs/search.svg";
import HistorySvg from "../../../res/images/svgs/history.svg";
import WatchlistSvg from "../../../res/images/svgs/watchlist.svg";
import SettingSvg from "../../../res/images/svgs/setting.svg";
import HomeActiveSvg from "../../../res/images/svgs/homeActive.svg";
import SearchActiveSvg from "../../../res/images/svgs/searchActive.svg";
import HistoryActiveSvg from "../../../res/images/svgs/historyActive.svg";
import WatchlistActiveSvg from "../../../res/images/svgs/watchlistActive.svg";
import SettingActiveSvg from "../../../res/images/svgs/settingActive.svg";

const appImages = {
  headerLogo: require(IMAGE_DIR + "headerLogo.png"),
  splasgLogo: require(IMAGE_DIR + "headerLogo.png"),
  logo: require(IMAGE_DIR + "logo.png"),
  onboardOne: require(IMAGE_DIR + "onboardOne.png"),
  onboardTwo: require(IMAGE_DIR + "onboardTwo.png"),
  onboardThree: require(IMAGE_DIR + "onboardThree.png"),
};
const appIcons = {
  email: require(ICON_DIR + "email.png"),
  facebook: require(ICON_DIR + "facebook.png"),
  apple: require(ICON_DIR + "apple.png"),
  google: require(ICON_DIR + "google.png"),
  fingerPrint: require(ICON_DIR + "finger.png"),
};

const appSvg = {
  //todo:====================================== bottom tab unative icon ==================
  HomeSvg: HomeSvg,
  SearchSvg: SearchSvg,
  HistorySvg: HistorySvg,
  WatchlistSvg: WatchlistSvg,
  SettingSvg: SettingSvg,

  HomeActiveSvg: HomeActiveSvg,
  SearchActiveSvg: SearchActiveSvg,
  HistoryActiveSvg: HistoryActiveSvg,
  WatchlistActiveSvg: WatchlistActiveSvg,
  SettingActiveSvg: SettingActiveSvg,
};
const appGif = {
  //   delete: require(GIF_DIR + 'delete.json'),
  //   noDataFound: require(GIF_DIR + 'dataNotFound.json'),
};
export { appImages, appIcons, appGif, appSvg };
