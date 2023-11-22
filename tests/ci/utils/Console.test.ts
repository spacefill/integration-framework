import chai, { expect } from 'chai';
import spies from 'chai-spies';
import Console from '../../../src/utils/Console.ts';
import initTestEnv from '../../testUtils/initTestEnv.ts';

chai.use(spies);

const originalConsoleLog = console.log;
const displayLogsEnabled = false; // set to true, to print the logs.

describe('Console', () => {

  before(() => {
    if (!displayLogsEnabled) {
      // disable print for the tests
      console.log = () => {};
    }
    initTestEnv();
  })

  after(() => {
    if (!displayLogsEnabled) {
      console.log(originalConsoleLog);
    }
  })

  it('should print log everytime', async () => {
    let consoleLogSpy = chai.spy.on(console, 'log');

    const message = 'Test log';
    const debugVar = 1;

    // test with a high log level
    process.env.LOG_LEVEL = 'trace';

    Console.log(message, debugVar);

    expect(consoleLogSpy).to.have.been.called.exactly(2);
    expect(consoleLogSpy).to.have.been.called.with(message);
    expect(consoleLogSpy).to.have.been.called.with(debugVar);

    chai.spy.restore(console);
    consoleLogSpy = chai.spy.on(console, 'log');

    // test with a low log level
    process.env.LOG_LEVEL = 'fatal';

    Console.log(message, debugVar);
    // spy is not reset, so 2 + 2
    expect(consoleLogSpy).to.have.been.called.exactly(2);
    chai.spy.restore(console);
  });

  it('should print trace log', async () => {
    let consoleLogSpy = chai.spy.on(console, 'log');

    process.env.LOG_LEVEL = 'trace';
    const message = 'log message';

    Console.trace(message);

    expect(consoleLogSpy).to.have.been.called.exactly(1);
    expect(consoleLogSpy).to.have.been.called.with(message);

    chai.spy.restore(console);
    consoleLogSpy = chai.spy.on(console, 'log');

    // test with a lower log level
    process.env.LOG_LEVEL = 'fatal';

    Console.trace(message);
    // spy is not reset, so 1 + 0
    expect(consoleLogSpy).to.have.been.called.exactly(0);
    chai.spy.restore(console);
  });

  it('should print debug log', async () => {
    let consoleLogSpy = chai.spy.on(console, 'log');

    process.env.LOG_LEVEL = 'debug';
    const message = 'log message';

    Console.debug(message);

    expect(consoleLogSpy).to.have.been.called.exactly(1);
    expect(consoleLogSpy).to.have.been.called.with(message);

    chai.spy.restore(console);
    consoleLogSpy = chai.spy.on(console, 'log');

    // test with a lower log level
    process.env.LOG_LEVEL = 'fatal';

    Console.debug(message);
    // spy is not reset, so 1 + 0
    expect(consoleLogSpy).to.have.been.called.exactly(0);
    chai.spy.restore(console);
  });

  it('should print info log', async () => {
    let consoleLogSpy = chai.spy.on(console, 'log');

    process.env.LOG_LEVEL = 'info';
    const message = 'log message';

    Console.info(message);

    expect(consoleLogSpy).to.have.been.called.exactly(1);
    expect(consoleLogSpy).to.have.been.called.with(message);

    chai.spy.restore(console);
    consoleLogSpy = chai.spy.on(console, 'log');

    // test with a lower log level
    process.env.LOG_LEVEL = 'fatal';

    Console.info(message);
    // spy is not reset, so 1 + 0
    expect(consoleLogSpy).to.have.been.called.exactly(0);
    chai.spy.restore(console);
  });


  it('should print title log', async () => {
    let consoleLogSpy = chai.spy.on(console, 'log');

    process.env.LOG_LEVEL = 'info';
    const message = 'title message';

    Console.title(message);

    expect(consoleLogSpy).to.have.been.called.exactly(1);

    chai.spy.restore(console);
    consoleLogSpy = chai.spy.on(console, 'log');

    // test with a lower log level
    process.env.LOG_LEVEL = 'fatal';

    Console.title(message);
    // spy is not reset, so 1 + 0
    expect(consoleLogSpy).to.have.been.called.exactly(0);
    chai.spy.restore(console);
  });

  it('should print warn log', async () => {
    let consoleLogSpy = chai.spy.on(console, 'log');

    process.env.LOG_LEVEL = 'warn';
    const message = 'log message';

    Console.warn(message);

    expect(consoleLogSpy).to.have.been.called.exactly(1);
    expect(consoleLogSpy).to.have.been.called.with(message);

    chai.spy.restore(console);
    consoleLogSpy = chai.spy.on(console, 'log');

    // test with a lower log level
    process.env.LOG_LEVEL = 'fatal';

    Console.warn(message);
    // spy is not reset, so 1 + 0
    expect(consoleLogSpy).to.have.been.called.exactly(0);
    chai.spy.restore(console);
  });

  it('should print error log', async () => {
    let consoleLogSpy = chai.spy.on(console, 'log');

    process.env.LOG_LEVEL = 'error';
    const message = 'log message';

    Console.error(message);

    expect(consoleLogSpy).to.have.been.called.exactly(1);
    expect(consoleLogSpy).to.have.been.called.with(message);

    chai.spy.restore(console);
    consoleLogSpy = chai.spy.on(console, 'log');

    // test with a lower log level
    process.env.LOG_LEVEL = 'fatal';

    Console.error(message);
    // spy is not reset, so 1 + 0
    expect(consoleLogSpy).to.have.been.called.exactly(0);
    chai.spy.restore(console);
  });

  it('should print fatal log', async () => {
    const consoleLogSpy = chai.spy.on(console, 'log');

    process.env.LOG_LEVEL = 'fatal';
    const message = 'log message';

    Console.fatal(message);

    expect(consoleLogSpy).to.have.been.called.exactly(1);
    expect(consoleLogSpy).to.have.been.called.with(message);

    chai.spy.restore(console);
  });

  it('should print confirm log', async () => {
    const consoleLogSpy = chai.spy.on(console, 'log');

    process.env.LOG_LEVEL = 'fatal';
    const message = 'confirm message';

    Console.confirm(message);

    expect(consoleLogSpy).to.have.been.called.exactly(1);
    expect(consoleLogSpy).to.have.been.called.with(message);

    chai.spy.restore(console);
  });
});

