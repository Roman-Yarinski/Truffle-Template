import Web3 from "web3";

let accounts: string[] = [];
export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";
export const ONE_DAY_TIMESTAMP = 86400;

export async function setAccounts(_accounts: string[]) {
  accounts = _accounts;
}

export function getAccounts() {
  return accounts;
}

export function randomAccount(): string {
  return web3.eth.accounts.create().address;
}

export function randomAccounts(amount: number): string[] {
  return [...Array(amount)].map(() => randomAccount());
}

export function randomHex(length: number): string {
  return (
    "0x" +
    [...Array(length)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("")
  );
}
export function convertToHex(data: string, w3: Web3 = web3): string {
  const encoded = w3.eth.abi.encodeParameter("string", data);
  return w3.utils.sha3(encoded)!;
}

export const ZERO_BYTES =
  "0x0000000000000000000000000000000000000000000000000000000000000000";
