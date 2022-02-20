# 09-Near-MetaBUILD-DAO-Exchange-Pool
## Contract introduction
- ERC20FACTORY : Create two tokens to add exchange objects to the transaction pool.
- CREATPOOL :Create a transaction pool to store exchangeable tokens, specify token exchange.
- CREATTOKENEXCHANGE :After the exchange pool is created, you can set the basic information and lock time of the exchange pool


## Installing

Please make sure you have the corresponding versions of npm :

```bash
npm -v
```
```bash
npm install npm@latest -g
```


- Install npm and node using a package manager such as nvm. Sometimes there are issues using Ledger due to how macOS handles node packages related to USB devices.
- Ensure you have installed Node version 12 or above.

- Install Solidity-version-contract-for-Aurora dependencies:
```bash
cd Solidity-version-contract-for-Aurora
```

```bash
npm install
```
## Testing

First of all you need to change the network:

https://aurora.dev/start

Then, Enter the webpage and select the Aurora Network test network and click Add network

The following is the corresponding address of the contract in the test network
- ERC20FACTORY : 0x12bC5979b3FC62a37cB315df3Ac3A5cA44883276 
- CREATPOOL : 0xD74BCC7c6CD8c59Ba7414dE1797ecE9edB8baA39 
- CREATTOKENEXCHANGE : 0x2473559c1690B1F4f5387C5c646e1b6b8Fc8100a 
- TOKEN_A : 0xd9340d89ac32cBCa6B598127364F46402E399362 
- TOKEN_B : 0x47A6815030E2706b7D2A67113b9aac5e5C10Ed1E 

