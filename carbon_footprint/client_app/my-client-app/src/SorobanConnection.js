import { Soroban } from '@soroban-react/core';

const sorobanUrl = process.env.SOROBAN_URL;
const workspace = process.env.SOROBAN_WORKSPACE;


const connection = new Soroban(sorobanUrl, workspace);

if (privateKey) {
  connection.setPrivateKey(privateKey);
}

export default connection;
