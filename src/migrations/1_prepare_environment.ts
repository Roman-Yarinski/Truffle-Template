import config from "config";
import { inspect } from "util";
import { Network } from "../utils";

export = async function (_deployer, _network: Network) {
  console.log(inspect(config, false, null, true), "\n");
  await web3.eth
    .getBalance(Object(_deployer).networks[_network].from)
    .then((res) => console.log("BEFORE BALANCE: ", res, "\n"));
  if ([Network.MAINNET].includes(_network)) {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 3e3));
    return;
  }
} as Migration;
