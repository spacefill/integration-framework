# Tests

## Stack

The tests are using:

- [`Mocha`](https://mochajs.org/) as test framework.
- [`Ts-Mocha`](https://www.npmjs.com/package/ts-mocha) to setup Mocha with TypeScript.
- [`JUnit Reporter for Mocha`](https://www.npmjs.com/package/mocha-junit-reporter) to generate JUnit reports, and so be able to use the [Unit test reports](https://docs.gitlab.com/ee/ci/testing/unit_test_reports.html) in Gitlab.
- [`Chai`](https://www.chaijs.com/) as assertion library.

## Types of tests

- `./tests/ci/` directory contains tests that will run during the CI.
- `./tests/manual/` directory contains tests that can only be triggered manually (e.g: SFTP testing)

## Available commands

Test commands are describe in the [`package.json`](../package.json).

### Run all tests of a directory or a subdirectory:

```sh
$ yarn run test tests
$ yarn run test tests/ci
$ yarn run test tests/manual
$ yarn run test tests/ci/api
```

### Run a specific test file

```sh
$ yarn run test tests/ci/api/EdiEvent.test.ts
```

### Run a specific it in a test file

```sh
$ yarn run test tests/ci/api/EdiEvent.test.ts -g 'should send event'
```
