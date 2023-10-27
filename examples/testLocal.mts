#!/usr/bin/env -S npx ts-node --esm --transpile-only --compilerOptions '{"moduleResolution":"nodenext","module":"NodeNext","target":"esnext", "allowImportingTsExtensions": true}'

import { Transfert, TransfertProtocol } from '../src/transport/Transfert.js'


const transfert = new Transfert(TransfertProtocol.local);

const files=await transfert.listDirWithFilter("/tmp/.*");

console.log("files", files);


