import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { connectorsByName } from "./utils/web3React";
import { CHAIN_ID, ConnectorNames } from "./constants";

const networkMap = {
  80001: {
    chainId: "0x13881", // '0x13881'
    chainName: "Matic(Polygon) Mumbai Testnet",
    nativeCurrency: { name: "tMATIC", symbol: "tMATIC", decimals: 18 },
    rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
    blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
  },
};

export const setupNetwork = async () => {
  if (window.ethereum) {
    const chainId = CHAIN_ID;
    try {
      if (window.ethereum.request) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [networkMap[chainId]],
        });
      }

      return true;
    } catch (error) {
      console.error("Failed to setup the network in Metamask:", error);
      return false;
    }
  } else {
    console.error(
      "Can't setup the BSC network on metamask because window.ethereum is undefined"
    );
    return false;
  }
};

const Login = () => {
  const { activate } = useWeb3React();

  const login = useCallback(
    async (connectorID) => {
      const connector = connectorsByName[connectorID];
      if (connector) {
        await activate(
          connector,
          async (error) => {
            if (error instanceof UnsupportedChainIdError) {
              const hasSetup = await setupNetwork();
              if (hasSetup) {
                await activate(connector);
              }
            } else {
            }
          },
          false
        );
      } else {
        // toastError(t('Unable to find connector'), t('The connector config is wrong'))
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activate]
  );
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{ height: "40px" }}
        className="btn btn-primary"
        onClick={() => {
          login(ConnectorNames.Injected);
        }}
      >
        Login with metamask
      </button>
    </div>
  );
};

export default Login;
