import { expect } from 'chai';

import { Transfert, TransfertProtocol } from '../../../src/transfert/Transfert.ts'
import { TestHelpers } from "../../../src/utils/TestHelpers.ts";

describe('Transfert', () => {
    it('create a transfert with unknown protocol', async () => {
        const protocol = 'unknown';

        expect(() => {
            new Transfert(protocol as TransfertProtocol);
        }).to.throw(Error, `Unsupported protocol ${protocol} - check your configuration`);
    });

    it('create directory with no path', async () => {
        const transfert = new Transfert(TransfertProtocol.local);
        await TestHelpers.expectThrowsAsync(() => transfert.mkdirIfNotExists(''), `ENOENT: no such file or directory, mkdir`);
    });

    it('error to upload with no path', async () => {
        const transfert = new Transfert(TransfertProtocol.local);
        await TestHelpers.expectThrowsAsync(() => transfert.upload('', ''), `ENOENT: no such file or directory`);
    });

    it('error to download with no path', async () => {
        const transfert = new Transfert(TransfertProtocol.local);
        await TestHelpers.expectThrowsAsync(() => transfert.downloadAndReadFile(''), `ENOENT: no such file or directory`);
    });
})
