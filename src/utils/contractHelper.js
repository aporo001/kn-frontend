import { ethers } from "ethers";
import { simpleRpcProvider } from "./web3React";
import bankAbi from "../abi/bank-abi.json";
import tokenAbi from "../abi/token-abi.json";
import { BANK_ADDRESS, TOKEN_ADDRESS } from "../constants";

const getContract = (abi, address, signer) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getTokenContract = (signer) =>
  getContract(tokenAbi, TOKEN_ADDRESS, signer);

export const getBankContract = (signer) =>
  getContract(bankAbi, BANK_ADDRESS, signer);
