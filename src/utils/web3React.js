import { InjectedConnector } from "@web3-react/injected-connector";

import { CHAIN_ID, ConnectorNames, RPC_URL } from "../constants";
import { ethers } from "ethers";

const POLLING_INTERVAL = 12000;
const chainId = CHAIN_ID;
const rpcUrl = RPC_URL[chainId];

export const injected = new InjectedConnector({ supportedChainIds: [chainId] });

export const connectorsByName = {
  [ConnectorNames.Injected]: injected,
};

export const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(rpcUrl);
