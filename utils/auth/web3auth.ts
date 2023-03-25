import Web3Auth, { OPENLOGIN_NETWORK, State } from "@web3auth/react-native-sdk";
import { MetamaskAdapter } from "@web3auth/metamask-adapter";
import RPC from "./ethersRPC";
import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";
import Web3 from "web3";

import { Web3AuthModal, ClearWeb3Auth } from "./web3Provider";

const resolvedRedirectUrl =
  Constants.appOwnership == AppOwnership.Expo ||
  Constants.appOwnership == AppOwnership.Guest
    ? Linking.createURL("web3auth", {})
    : Linking.createURL("web3auth", { scheme: "web3authrnsample" });

const clientId =
  "BK-4a3zdrmKTMUTJlDjDJFsxTKrVxP0-VH2ed_aSjZsrK8beT8kUyZk0xDXfOouE-1y8zTkorp4HdUxlNFZ5JxM"; // Or your desired provider url

type TypeOfLogin =
  | "google"
  | "facebook"
  | "reddit"
  | "discord"
  | "twitch"
  | "apple"
  | "github"
  | "linkedin"
  | "twitter"
  | "weibo"
  | "line"
  | "email_password"
  | "passwordless"
  | "jwt";

const LOGIN_PROVIDER = {
  GOOGLE: "google",
  FACEBOOK: "facebook",
  REDDIT: "reddit",
  DISCORD: "discord",
  TWITCH: "twitch",
  APPLE: "apple",
  LINE: "line",
  GITHUB: "github",
  KAKAO: "kakao",
  LINKEDIN: "linkedin",
  TWITTER: "twitter",
  WEIBO: "weibo",
  WECHAT: "wechat",
  EMAIL_PASSWORDLESS: "email_passwordless",
  JWT: "jwt",
} as const;

const web3auth = new Web3Auth(WebBrowser, {
  clientId,
  network: "testnet", // or other networks
});

export const Web3AuthLogin: any = async () => {
  try {
    Web3AuthModal.provider = await web3auth.login({
      loginProvider: LOGIN_PROVIDER.GOOGLE,
      redirectUrl: resolvedRedirectUrl,
      mfaLevel: "none",
    });
    console.log("Web3AuthModal.provider", Web3AuthModal.provider.privKey);
  } catch (e) {
    console.log(e);
  }
};

export const Web3AuthLogout: any = async () => {
  await web3auth.logout({
    redirectUrl: resolvedRedirectUrl,
  });
  ClearWeb3Auth();
};
