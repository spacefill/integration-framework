#!/usr/bin/env -S npx ts-node --esm --compilerOptions '{"moduleResolution":"nodenext","module":"esnext","target":"esnext", "allowImportingTsExtensions": true}'

import { Transfert, TransfertProtocol } from '../src/transport/Transfert.js'


const transfert = new Transfert(TransfertProtocol.local);

const files=await transfert.listDirWithFilter("/tmp/.*");

console.log("files", files);


