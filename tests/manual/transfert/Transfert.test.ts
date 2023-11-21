import { expect } from 'chai';

import { Transfert, TransfertProtocol } from '../../../src/transfert/Transfert.ts'

describe('Transfert', () => {
    const expectThrowsAsync = async (method: () => unknown, errorMessage: unknown) => {
        let error = null
        try {
            await method()
        }
        catch (err) {
            error = err
        }

        expect(error).to.be.an('Error')
        if (errorMessage) {
            expect(error.message).to.contains(errorMessage)
        }
    }

    it('create a transfert with unknown protocol', async () => {
        const protocol = 'unknown';

        expect(() => {
            new Transfert(protocol as TransfertProtocol);
        }).to.throw(Error, `Unsupported protocol ${protocol} - check your configuration`);
    });

    it('create directory with no path', async () => {
        const transfert = new Transfert(TransfertProtocol.local);
        await expectThrowsAsync(() => transfert.mkdirIfNotExists(''), `ENOENT: no such file or directory, mkdir`);
    });

    it('error to check if folder exists with no path', async () => {
        const wrongConfig = {
            hostname: '127.0.0.1',
            port: 2222,
            username: 'alice',
            password: 'passwordd'
        }

        const transfert = new Transfert(TransfertProtocol.sftp, wrongConfig);
        await expectThrowsAsync(() => transfert.isExists(''), `connect: getConnection: All configured authentication methods failed`);
    });

    it('error to upload with no path', async () => {
        const transfert = new Transfert(TransfertProtocol.local);
        await expectThrowsAsync(() => transfert.upload('', ''), `ENOENT: no such file or directory`);
    });

    it('error to download with no path', async () => {
        const transfert = new Transfert(TransfertProtocol.local);
        await expectThrowsAsync(() => transfert.downloadAndReadFile(''), `ENOENT: no such file or directory`);
    });
})