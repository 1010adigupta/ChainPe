import { State } from "@web3auth/react-native-sdk";

export const Web3AuthModal = {
  provider: <State | any>null,
};

export const ClearWeb3Auth = () => {
  Web3AuthModal.provider = null;
};
