import { hookstate, useHookstate } from "@hookstate/core";
import { getChain } from "../../constants/supportedChains";
import { Contract, providers } from "ethers";
import { minABI } from "../../contracts/token";
export const tokenState = hookstate({});

export const fetchAllTokens = async (chain: any, address: any) => {
  return new Promise((resolve, reject) => {
    let tokens: any = [];
    const CHAIN = getChain(chain);
    CHAIN.coins.forEach(async (coin: any) => {
      const tokenContract = new Contract(
        coin.address,
        minABI,
        providers.getDefaultProvider(CHAIN.providerUrl)
      );
      const balance = await tokenContract.balanceOf(address);
      console.log(balance);
      if (balance > 0) {
        tokens.push({
          name: coin.name,
          symbol: coin.symbol,
          balance: balance,
          address: coin.address,
        });
      }
    });
    resolve(tokens);
  });
};
