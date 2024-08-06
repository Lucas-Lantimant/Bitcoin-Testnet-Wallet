const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

const network = bitcoin.networks.testnet;

const pathP2PKH = `m/44'/1'/0'/0/0`;
const pathP2WPKH = `m/84'/1'/0'/0/0`;
const pathP2SH = `m/49'/1'/0'/0/0`;

let mnemonic = bip39.generateMnemonic();
console.log(`Mnemonic: ${mnemonic}`);

const seed = bip39.mnemonicToSeedSync(mnemonic);

let root = bip32.fromSeed(seed, network);

function generateP2PKH() {
    let account = root.derivePath(pathP2PKH);
    return bitcoin.payments.p2pkh({
        pubkey: account.publicKey,
        network: network
    }).address;
}

function generateP2WPKH() {
    let account = root.derivePath(pathP2WPKH);
    return bitcoin.payments.p2wpkh({
        pubkey: account.publicKey,
        network: network
    }).address;
}

function generateP2SH() {
    let account = root.derivePath(pathP2SH);
    return bitcoin.payments.p2sh({
        redeem: bitcoin.payments.p2wpkh({
            pubkey: account.publicKey,
            network: network
        }),
        network: network
    }).address;
}

function validateAddress(address) {
    try {
        bitcoin.address.toOutputScript(address, network);
        console.log(`The address ${address} is valid on the Testnet network.`);
    } catch (e) {
        console.error(`The address ${address} is invalid: ${e.message}`);
    }
}

let addressP2PKH = generateP2PKH();
console.log(`P2PKH Address: ${addressP2PKH}`);
validateAddress(addressP2PKH);

let addressP2WPKH = generateP2WPKH();
console.log(`P2WPKH Address: ${addressP2WPKH}`);
validateAddress(addressP2WPKH);

let addressP2SH = generateP2SH();
console.log(`P2SH Address: ${addressP2SH}`);
validateAddress(addressP2SH);

console.log(`Private Key: ${root.derivePath(pathP2PKH).toWIF()}`);
