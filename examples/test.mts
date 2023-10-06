#!/usr/bin/env -S npx ts-node --esm --compilerOptions '{"moduleResolution":"nodenext","module":"esnext","target":"esnext", "allowImportingTsExtensions": true}'

import { $ } from 'zx'
import { Transfert, TransfertProtocol } from '../src/transport/Transfert.ts'
import { Configuration } from '../src/Configuration.mts'


await $`echo ok`

console.log(new Transfert(TransfertProtocol.sftp), new Configuration('test').echo())