

# Integration framework

The spacefill's integration framework contains a toolkit to build edi integration connectors.

## Getting started

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
    -h, --help                              Print this help and exit.
    --debug                                 Force log level to DEBUG.
    --env                                   Path to environment variables file. e.g: --env=.env
    --print-config                          Display the environment variables values and exit.
    --print-statistics                      Display the resource usage at the end of the process
    --disable-events                        Disable edi events emit

  ```

## Tests

See [./tests/README.md](./tests/README.md)

## Dev tools

### Prettier

- Make prettier watch and correct changes

```sh
$ yarn run prettier-watch
```

- Fix all `.ts` files from `./src`

```sh
$ yarn prettier src/**/*.ts --write
```
