# Integration framework

The spacefill's integration framework contains a toolkit to build edi integration connectors.

## Use the framework

See [./docs/UserGuide.md](./docs/UserGuide.md).

## Contribute to the framework

### Getting started

Build with NodeJS `18.12`.

```sh
yarn install
```

- `examples/` contains scripts implementing the framework to generate or load files.
- All scripts have a `-h` argument allowing to display the scripts usage.

  - eg.:

  ```sh
  ~/integration-framework/examples/load_file_example$ ./LoadOrderAcknowledgeTaskExample.mts -h
  Usage: ./LoadOrderAcknowledgeTaskExample.mts [OPTIONS]

  Options:
    -h, --help                              Console this help and exit.
    --debug                                 Force log level to DEBUG.
    --env                                   Path to environment variables file. e.g: --env=.env
    --print-config                          Display the environment variables values and exit.
    --print-statistics                      Display the resource usage at the end of the process
    --disable-events                        Disable edi events emit

  ```

### Tests

See [./tests/README.md](./tests/README.md)

### Dev tools

#### Prettier

- Make prettier watch and correct changes

  ```sh
  $ yarn run prettier-watch
  ```

- Or with VS Code, you can install the [Formatting Toggle](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle) extension.

- Fix all `.ts` files from `./src`

  ```sh
  $ yarn prettier src/**/*.ts --write
  ```

### FAQ

#### How to update the SDK ?

To update the sdk with the latest Spacefill API version, you simply need to run the dedicated script:

```sh
$ cd scripts/
$ ./generateApiType.mts
```

#### How to publish a new spacefill@integration-framework package version ?

- Update the package version in [`package.json`](./package.json):
  > :warning: Please notice that the package version must respect [SemVer 2.0](https://semver.org/lang/fr/).
  ```json
  {
    "name": "@spacefill/integration-framework",
    "type": "module",
    "version": "0.13.0", // <-- version to update
    "main": "dist/index.js",
   ...
  }
  ```

- Update the [CHANGELOGS.md](./CHANGELOG.md).

- Request approval and merge your PR.

- Create a tag and push it.

- The CI will automatically publish the new package version.
