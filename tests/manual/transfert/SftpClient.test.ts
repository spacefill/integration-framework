import 'jest';
import { SftpClient } from '../../../src/transport/SftpClient.ts';

describe('SftpTransfert', () => {
  it('should get configuration', async () => {
    const instance = new SftpClient({
      hostname: '127.0.0.1',
      port: 2222,
      username: 'alice',
      password: 'password'
    })
    expect(instance).toBeInstanceOf(SftpClient);
  });
});