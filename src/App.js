import { useState } from "react";
import "./App.scss";
import { useWeb3React } from "@web3-react/core";

import Login from "./Login";

const Bank = () => {
  const [balance, setBalance] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);

  const { account } = useWeb3React();
  const approve = async () => {};

  const deposite = async () => {};

  const withdrawal = async () => {};

  const getBalance = async () => {};

  const handleChange = (event) => {
    if (event.target.name === "dep-txt") {
      setDepositAmount(event.target.value);
    } else {
      setWithdrawAmount(event.target.value);
    }
  };

  return (
    <div className="container text-center">
      <h1>Address {account}</h1>
      <h1>Account balance {balance}</h1>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <form>
                <h5 className="card-title">Deposit</h5>
                <input type="number" name="dep-txt" onChange={handleChange} />
                <div className="mt-2">
                  <button
                    type="button"
                    href="#"
                    className="btn btn-primary"
                    onClick={() => {
                      approve();
                    }}
                  >
                    approve
                  </button>
                  <button
                    type="button"
                    href="#"
                    className="btn btn-primary ms-2"
                    onClick={() => {
                      deposite();
                    }}
                  >
                    deposite
                  </button>
                </div>
              </form>
            </div>
          </div>
          <br />
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="card">
            <div className="card-body text-center">
              <form>
                <h5 className="card-title">Withdrawal</h5>
                <input type="number" onChange={handleChange} />
                <div className="mt-2">
                  <button
                    type="button"
                    href="#"
                    className="btn btn-primary"
                    onClick={() => {
                      withdrawal();
                    }}
                  >
                    withdrawal
                  </button>
                </div>
              </form>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const { account } = useWeb3React();
  return <>{account ? <Bank /> : <Login />}</>;
};

export default App;
