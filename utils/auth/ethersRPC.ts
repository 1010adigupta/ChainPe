import "@ethersproject/shims";
import { ethers } from "ethers";
import { getChain } from "../../constants/supportedChains";
import { AsyncStorage } from "react-native";
import { ChaonPayABI } from "../../contracts/ChainPe";
import { ChainPe } from "../../contracts/types/ChainPe";
import { Web3AuthModal } from "./web3Provider";
import { swap } from "../../utils/bridge";
const getChainFromID: any = async (chain: any) => {
  return getChain(chain);
};

const getChainId = async () => {
  try {
    const CHAIN = await getChainFromID();
    const ethersProvider = ethers.getDefaultProvider(CHAIN.providerUrl);
    const networkDetails = await ethersProvider.getNetwork();
    return networkDetails;
  } catch (error) {
    return error;
  }
};

export const getAccount = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const wallet = new ethers.Wallet(Web3AuthModal.provider.privKey);
      const address = await wallet.address;
      resolve(address);
    } catch (error) {
      reject(err);
    }
  });
};

export const getBalance = async (chain: any) => {
  return new Promise(async (resolve, reject) => {
    const CHAIN = await getChainFromID(chain);
    try {
      const ethersProvider = ethers.getDefaultProvider(CHAIN.providerUrl);
      const wallet = new ethers.Wallet(
        Web3AuthModal.provider.privKey,
        ethersProvider
      );
      const balance = await wallet.getBalance();
      console.log(balance);
      console.log(ethers.utils.formatEther(balance));
      resolve(ethers.utils.formatEther(balance));
    } catch (error) {
      reject(error);
    }
  });
};

export const sendTransaction = async () => {
  const CHAIN = await getChainFromID();
  const ethersProvider = ethers.getDefaultProvider(CHAIN.providerUrl);
  const wallet = new ethers.Wallet(
    Web3AuthModal.provider.privKey,
    ethersProvider
  );
  try {
    const destination = "0x40e1c367Eca34250cAF1bc8330E9EddfD403fC56";

    // Convert 1 ether to wei
    const amount = ethers.utils.parseEther("0.001");

    // Submit transaction to the blockchain
    const tx = await wallet.sendTransaction({
      to: destination,
      value: amount,
      maxPriorityFeePerGas: "5000000000", // Max priority fee per gas
      maxFeePerGas: "6000000000000", // Max fee per gas
    });

    return tx;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const signMessage = async (key) => {
  const CHAIN = await getChainFromID();
  const ethersProvider = ethers.getDefaultProvider(CHAIN.providerUrl);
  const wallet = new ethers.Wallet(
    Web3AuthModal.provider.privKey,
    ethersProvider
  );
  try {
    const originalMessage = "YOUR_MESSAGE";

    // Sign the message
    const signedMessage = await wallet.signMessage(originalMessage);

    return signedMessage;
  } catch (error) {
    return error;
  }
};

export const swapTokens = async (chain: any) => {
  return new Promise(async (resolve, reject) => {
    const CHAIN = await getChainFromID(chain);
    console.log(CHAIN);
    const ethersProvider = ethers.getDefaultProvider(CHAIN.providerUrl);
    const wallet = new ethers.Wallet(
      Web3AuthModal.provider.privKey,
      ethersProvider
    );
    swap(wallet).then((res) => {
      resolve(res);
    });
  });
};

export const sendPayment = async (
  vpa: string,
  name: string,
  amount: string,
  rate: string,
  chain: string
) => {
  return new Promise(async (resolve, reject) => {
    try {
      const CHAIN = await getChainFromID(chain);
      console.log(CHAIN);
      const ethersProvider = ethers.getDefaultProvider(CHAIN.providerUrl);
      const wallet = new ethers.Wallet(
        Web3AuthModal.provider.privKey,
        ethersProvider
      );

      const contract = new ethers.Contract(
        CHAIN.contract,
        ChaonPayABI.abi,
        wallet
      ) as ChainPe;

      console.log(wallet.address);
      const tx = await contract.pay(
        vpa,
        name,
        ethers.utils.parseEther(amount),
        ethers.utils.parseEther(rate),
        {
          value: ethers.utils.parseEther(
            (parseInt(amount) / parseInt(rate)).toString()
          ),
        }
      );
      await tx.wait();
      console.log("Transaction sent");
      resolve(tx.hash);
    } catch (err) {
      console.log(err);
    }
  });
};
