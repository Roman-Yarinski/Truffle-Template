# Duch Auction smart contracts

This repo will have a code of Duch Auction Smart Contracts.

## Overview

---

### Deploy Contracts

---

#### Deployment config

```bash
{
	"INFURA_KEY": "",
	"PRIVATE_KEY": "",
	"ETHERSCAN_KEY": "",
	"MIGRATION_DIRECTORY": "./dist/migrations",
	"GAS_PRICE": ""
}

```

#### Migration

```bash
# Install packages
$ yarn
# Compile contracts
$ yarn compile
# Testnet
$ yarn migrate:ropsten
# Mainnet
$ yarn migrate:mainnet
# fantom testnet
$ yarn migrate:fantomtestnet
# Verify contracts testnet
$ yarn verify:ropsten
# Verify contracts mainnet
$ yarn verify:mainnet
# Verify contracts fantom testnet
$ yarn verify:fantomtestnet
```

### Tests

For tests running its needed to pre install and run [ganache-cli](https://github.com/trufflesuite/ganache-cli)

```bash
yarn test
```

For coverage:

```bash
yarn coverage
```
