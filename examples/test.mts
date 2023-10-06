#!/usr/bin/env -S npx ts-node --esm --compilerOptions '{"moduleResolution":"nodenext","module":"esnext","target":"esnext", "allowImportingTsExtensions": true}'

import { Transfert, TransfertProtocol } from '../src/transport/Transfert.ts'


const transfert = new Transfert(TransfertProtocol.sftp,  {
    hostname: '127.0.0.1',
    port: 2222,
    username: 'alice',
    password: 'password'
});

const files=await transfert.listDirWithFilter("/home/alice/error/INV_");

console.log("files", files);


