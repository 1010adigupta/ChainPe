import axois from "axios";
const COVALENT_API_KEY = "ckey_1fb3fd4bcbb840de9377e7c9414";

export const fetchTokens = async (chain: any, address: any) => {
  const response = await axois.get(
    `https://api.covalenthq.com/v1/${chain}/address/${address}/balances_v2/?key=${COVALENT_API_KEY}`
  );
  return response.data.data.items;
};

