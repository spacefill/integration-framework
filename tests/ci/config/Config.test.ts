import { expect, assert } from 'chai';
import { Config } from '../../../src/configs/Config.ts';
import path from 'path';
import { fileURLToPath } from 'url';

describe('Config', () => {
  it('should get config',  async () => {
    const config = Config.get();

    expect(config).to.have.all.keys(
      'spacefillApi',
      'transfert',
      'edi',
      'console',
      'log'
    );

    expect(config.spacefillApi).to.have.all.keys(
      'url',
      'apiToken',
      'defaultPaginationLimit',
      'context',
      'eventEnabled'
    );

    expect(config.spacefillApi.context).to.have.all.keys(
      'serviceSource',
      'serviceVersion',
      'transport',
      'clientType',
    );

    expect(config.transfert).to.have.all.keys(
      'protocol',
      'hostname',
      'port',
      'username',
      'password',
      'autoAddPolicy',
    );

    expect(config.edi).to.have.all.keys(
      'wmsAgencyCode',
      'wmsShipperID',
      'wmsShipperAccountId',
      'wmsWarehouseId',
      'wmsItemPackagingType',
      'wmsPathWmsToSpacefillDir',
      'wmsPathSpacefillToWmsDir',
      'wmsPathArchiveDir',
      'wmsPathErrorDir',
      'fileEncoding',
    );

    expect(config.console).to.have.all.keys(
      'color',
      'interactiveMode',
    );

    expect(config.log).to.have.all.keys(
      'level',
      'defaultLogLevel',
    );
  });

  it('should be able to reload env vars from .env file', async () => {
    process.env.LOG_LEVEL = 'info';
    assert(Config.get().log.level, 'info');

    const currentDirName = path.dirname(fileURLToPath(import.meta.url))
    Config.reloadConfig(path.join(currentDirName , 'test.env'));

    assert(Config.get().log.level, 'debug');

    expect( () => {
      Config.reloadConfig('not-existing-env-file');
    }).to.throw(Error, `Cannot find env file not-existing-env-file`);
  });

  it('should validate conf',async () => {
    process.env.SPACEFILL_API_URL = 'not-an-url';
    process.env.LOG_LEVEL = 'fatal'; // Do display error validation logs on the test CLI

    expect( () => {
      Config.validate();
    }).to.throw(Error, 'Invalid configuration');

    process.env.SPACEFILL_API_URL = 'http://127.0.0.1:5004'

    expect( () => {
      const currentDirName = path.dirname(fileURLToPath(import.meta.url))
      Config.reloadConfig(path.join(currentDirName , 'test.env'));
      Config.validate();
  }).to.not.throw(Error, 'Invalid configuration');

  })
});