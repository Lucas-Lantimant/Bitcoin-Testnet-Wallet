# Bitcoin Testnet Wallet

This project provides a simple implementation for generating Bitcoin addresses on the Testnet network. It supports three types of addresses: P2PKH (Pay-to-PubKey-Hash), P2WPKH (Pay-to-Witness-PubKey-Hash), and P2SH (Pay-to-Script-Hash). The tool uses the `bip32`, `bip39`, and `bitcoinjs-lib` libraries to create and validate Bitcoin wallet addresses.

## Features

- **Generate Bitcoin Wallet Addresses**: Create P2PKH, P2WPKH, and P2SH addresses.
- **Validate Addresses**: Check if a generated address is valid on the Testnet network.
- **Display Mnemonic and Private Key**: View the mnemonic phrase and private key associated with the generated wallet.

## Requirements

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Lucas-Lantimant/Bitcoin-Testnet-Wallet.git
   cd Bitcoin-Testnet-Wallet
Install the required dependencies:

bash
Copiar código
npm install
Usage
Run the script to generate Bitcoin wallet addresses:

bash
Copiar código
node generateWallet.js
The script will output:

A mnemonic phrase for generating the wallet.
Three types of Bitcoin addresses (P2PKH, P2WPKH, P2SH).
The validity of each address.
The private key in WIF format.
Example Output
text
Copiar código
Mnemonic: cousin limit raw useful denial wave capital wife believe remove remember bus
P2PKH Address: mj2A5aY2Y1TXrAJ152B3TAGMuWB2Xig2KT
The address mj2A5aY2Y1TXrAJ152B3TAGMuWB2Xig2KT is valid on the Testnet network.
P2WPKH Address: bcrt1qnx2r4kjlh8s75j9ms52hpypa7r2y5ez0plutj
The address bcrt1qnx2r4kjlh8s75j9ms52hpypa7r2y5ez0plutj is valid on the Testnet network.
P2SH Address: 2MxxR6Gyvch8gJZaH4HZHqwYvM7oHs4sTo7H6HWBDSMy
The address 2MxxR6Gyvch8gJZaH4HZHqwYvM7oHs4sTo7H6HWBDSMy is valid on the Testnet network.
Private Key: cQRmp6urnBRMchbh43s7moLQwETY5pZPyKFqq6FJRn7YRbHYUzS1
License
This project is licensed under the MIT License - see the LICENSE file for details.

Author
Lucas Lantimant