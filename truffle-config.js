const HDWalletProvider = require("@truffle/hdwallet-provider");
const {
  INFURA_KEY,
  PRIVATE_KEY,
  ETHERSCAN_KEY,
  FTMSCAN_KEY,
  MIGRATION_DIRECTORY,
  GAS_PRICE,
} = require("config");

const gasPrice = GAS_PRICE * 10 ** 9;

module.exports = {
  migrations_directory: MIGRATION_DIRECTORY,
  networks: {
    development: {
      host: "127.0.0.1",
      network_id: "*",
      port: 8545,
      confirmations: 0,
      skipDryRun: true,
      gas: 5000000,
      gasPrice,
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          PRIVATE_KEY,
          `wss://ropsten.infura.io/ws/v3/${INFURA_KEY}`
        ),
      network_id: 3,
      gas: 5000000,
      confirmations: 1,
      skipDryRun: true,
      gasPrice,
    },
    mainnet: {
      provider: () =>
        new HDWalletProvider(
          PRIVATE_KEY,
          `wss://mainnet.infura.io/ws/v3/${INFURA_KEY}`
        ),
      network_id: 1,
      gas: 1500000,
      confirmations: 3,
      skipDryRun: true,
      gasPrice,
    },
    fantomtestnet: {
      provider: () =>
        new HDWalletProvider(
          PRIVATE_KEY,
          `https://rpc.testnet.fantom.network/`
        ),
      network_id: 0xfa2,
      confirmations: 0,
      skipDryRun: true,
      gasPrice,
    },
  },
  compilers: {
    solc: {
      version: "0.8.4",
      docker: false,
      settings: {
        optimizer: {enabled: true, runs: 1000},
        evmVersion: "constantinople",
      },
    },
  },
  plugins: [
    "solidity-coverage",
    "truffle-plugin-verify",
    "truffle-plugin-stdjsonin",
  ],
  api_keys: {etherscan: ETHERSCAN_KEY, ftmscan: FTMSCAN_KEY},
  mocha: {reporter: "eth-gas-reporter", reporterOptions: {currency: "USD"}},
};
