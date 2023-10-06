import 'jest';
import { SftpTransfert } from '../../src/transport/SftpTransfert';

describe('SftpTransfert', () => {
    it('should get configuration', async () => {
        const instance = new SftpTransfert({
            hostname: '127.0.0.1',
            port: 2222,
            username: 'alice',
            password: 'password'
        })
        expect(instance).toBeInstanceOf(SftpTransfert);
    });
});