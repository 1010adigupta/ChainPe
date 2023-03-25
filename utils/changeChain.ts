import { AsyncStorage } from "react-native";
import { changeChain, updateChain } from "../redux/chainSlice";

export const changeAndUpdateChain = async(chainId: string) => {
  AsyncStorage.setItem("CHAIN_ID", chainId).then(() => updateChain(chainId));
};
