import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import Web3 from "web3";
import abi from "./abi.json";
import abi2 from "./abi2.json";

function App() {
  const c_address = "0x442Cd5b268F536527a99fd7c7cD789c191649E04";
  const erc20_addr = "0xf4322b303e38254fc84c20c49e63b24597c796c6";
  const web3 = new Web3(window.ethereum);
  let contract = new web3.eth.Contract(abi, c_address);
  let ercContract = new web3.eth.Contract(abi2, erc20_addr);

  /*console.log("the methods are : ", contract.methods);
  console.log("the methods of Contract2 are : ", ercContract.methods);*/

  const [account, setAccount] = useState();
  const [balance, setBalance] = useState();
  const [state, setState] = useState(0);
  const [ercBal, setErcBal] = useState(0);

  const [wallet, setWallet] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", connect);
      window.ethereum.on("chainChanged", chainChanged);
    }
    setInterval(() => {
      connect();
    }, 7000);
  }, [state]);

  const connect = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.enable();
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(res[0]);

        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [res[0].toString(), "latest"],
        });
        setBalance(ethers.utils.formatEther(balance));
        getState();
        await ercBalance(res[0]);
      } catch (err) {
        console.error(err);
      }
    } else {
      console.log("Install Metamask");
    }
  };

  const sendTx = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const params = {
      from: account,
      to: data.get("address"),
      value: data.get("amount"),
    };
    await web3.eth.sendTransaction(params);
  };

  const ercBalance = async (wallet_Address) => {
    //console.log("ercBal is : ", await ercContract.methods.balanceOf(wallet_Address).call());
    setErcBal(await ercContract.methods.balanceOf(wallet_Address).call());
  };

  const getErcBal = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    //console.log(await ercContract.methods.balanceOf(data.get("erc_bal_address")).call());
    setWallet(data.get("erc_bal_address"));
    setAmount(
      await ercContract.methods.balanceOf(data.get("erc_bal_address")).call()
    );
  };

  const sendErcTx = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    await ercContract.methods
      .transfer(data.get("ercaddress"), data.get("ercamount"))
      .send({ from: account });
  };

  const sendErcTx2 = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const params = {
      a: data.get("ercaddress"),
      b: data.get("ercamount"),
    };
    await ercContract.methods
      .transfer(params.a, params.b)
      .send({ from: account });
  };

  const chainChanged = async () => {
    if (window.ethereum) {
      setAccount(null);
      setBalance(null);
    }
  };

  const getState = async () => {
    //console.log("state is : ", await contract.methods.getState().call());
    setState(await contract.methods.getState().call());
  };

  const ICO = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    //console.log(typeof data.get("erc20Mint"));
    //console.log(typeof Number(data.get("erc20Mint")));
    //let gas = await web3.eth.estimateGas({data : ercContract.methods.MintToken(Number(data.get("erc20Mint")))})
    await ercContract.methods
      .MintToken(data.get("erc20Mint"))
      .send({ from: account, value: data.get("erc20Mint") * 100 });
  };

  return (
    <div>
      <h1>current wallet : {account}</h1>

      <h1>current state : {state}</h1>

      <div
        className="App"
        onClick={() => {
          getState();
        }}
      >
        getState
      </div>
      <form onSubmit={sendTx}>
        <input type="text" name="address" placeholder="address" />
        <input type="text" name="amount" placeholder="amount" />
        <button type="submit">Send TX</button>
      </form>
      <form onSubmit={sendErcTx}>
        <input type="text" name="ercaddress" placeholder="address" />
        <input type="text" name="ercamount" placeholder="amount" />
        <button type="submit">Send ERC20 TX</button>
      </form>
      <form onSubmit={sendErcTx2}>
        <input type="text" name="ercaddress" placeholder="address" />
        <input type="text" name="ercamount" placeholder="amount" />
        <button type="submit">Send ERC20 TX2</button>
      </form>

      <form onSubmit={ICO}>
        <input type="text" name="erc20Mint" placeholder="amount" />
        <button type="submit">mint</button>
      </form>
    </div>
  );
}

export default App;
