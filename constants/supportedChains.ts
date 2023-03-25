export const supportedChains = {
  ETH: {
    chainId: 1,
    chainName: "Ethereum Mainnet",
    providerUrl: "https://rpc.ankr.com/eth",
    contract: "0x74Ba11c7a2D266b8e61AD65073D29C9eF8996b5b",
    image: require("../assets/bitcoin.png"),
    native: "ETH",
    coins: {
      ETH: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
        address: "0x0000000000000000000000000000000000000000",
      },
      USDT: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      },
      USDC: {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      },
    },
  },
  FUSE_SPARK: {
    chainId: 123,
    chainName: "Fuse Testnet",
    providerUrl: "https://rpc.fusespark.io",
    contract: "0x5CA6ba1Ec356Dd2832eBDa811Eae46c3DFB78611",
    image: require("../assets/bitcoin.png"),
  },
  FUSE: {
    chainId: 122,
    chainName: "Fuse Mainnet",
    providerUrl: "https://rpc.fuse.io",
    contract: "0x8498d0962454C22406f41BFc9665724E5f527a93",
    image: require("../assets/bitcoin.png"),
    native: "FUSE",
    coins: {
      FUSE: {
        name: "Fuse",
        symbol: "FUSE",
        decimals: 18,
        address: "0x0000000000000000000000000000000000000000",
      },
      USDT: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0x0d9c8723b343a8368bebe0b5e89273ff8d712e3c",
      },
      USDC: {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
      },
    },
  },
  GNOSIS: {
    chainId: 100,
    chainName: "Gnosis Mainnet",
    providerUrl: "https://safe-transaction.gnosis.io",
    image: require("../assets/bitcoin.png"),
    contract: "",
    native: "xDai",
    coins: {
      xDai: {
        name: "xDai",
        symbol: "xDai",
        decimals: 18,
        address: "0x0000000000000000000000000000000000000000",
      },
      USDT: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0x0d9c8723b343a8368bebe0b5e89273ff8d712e3c",
      },
      USDC: {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: "0x04068da6c83afcfa0e13ba15a6696662335d5b75",
      },
      MATIC: {
        name: "Matic",
        symbol: "MATIC",
        decimals: 18,
        address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
      },
    },
  },
  BSC_TEST: {
    providerUrl: "https://data-seed-prebsc-1-s3.binance.org:8545",
    chainId: 97,
    chainName: "Binance Testnet",
    contract: "0xc0E1565b83d175b647DfFB81902554224375C4b8",
    image: require("../assets/bitcoin.png"),
  },
  POLYGON: {
    providerUrl: "https://rpc-mainnet.maticvigil.com",
    chainId: 137,
    chainName: "Polygon Mainnet",
    image: require("../assets/bitcoin.png"),
    contract: "",
    native: "MATIC",
    coins: {
      MATIC: {
        name: "Matic",
        symbol: "MATIC",
        decimals: 18,
        address: "0x0000000000000000000000000000000000001010",
      },
      USDT: {
        name: "Tether USD",
        symbol: "USDT",
        decimals: 6,
        address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",
      },
      USDC: {
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
      },
    },
  },
};
export const getChain = (chainId: any) => {
  return supportedChains[chainId];
};
