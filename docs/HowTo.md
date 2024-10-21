# How to ?

## Introduction

This page contains information on how to carry out certain actions during the development of a connector.

## Build an api wrapper from an openapi.json file

Below the instructions to generate a wrapper with [openapi-client-axios-typegen](https://www.npmjs.com/package/openapi-client-axios-typegen) from an openapi.json file.

The [`SpacefillAPIWrapperV1`](../src/api/SpacefillAPIWrapperV1.ts), thats allow the framework to communicate with the Spacefill API, has been built with this method.

Advantages of this solution:

- easy to maintain
- easy to build (can be done in <1h)

### Requirements

- A valid openapi file.
  - This easiest way to validate an openapi file, is to copy/paste the content on Swagger Editor (https://editor.swagger.io/).
    If there is no warning or error, the following instructions should be work fine.
  - In this tutorial, we will use the Swagger Pestore openapi example. [petstore-openapi.json](../examples/how-to-build-an-api-wrapper/petstore-openapi.json).

### Steps

#### Generate the types definition

```sh
$ cd examples/how-to-build-an-api-wrapper/
$ npx openapi-client-axios-typegen petstore-openapi.json > pestore-openapi.d.ts
```

Nb.:

- You can open `pestore-openapi.d.ts` to clean the code styling after the init.
- To update the api definition, you will simply need to override the previous file by running the same command.

#### Declare the wrapper

See [PestoreWrapperExample.ts](../examples/how-to-build-an-api-wrapper/PestoreWrapperExample.ts).

In the wrapper, you will see:

- `initClient(url: string, bearerToken: string)`

This method allow to init api url + bearer and setup a retry system.
It's also possible to declare custom HTTP headers.

#### Usage

The wrapper will named the method depending of the `operationId` defined in the openapi json file.
if the `operationId` is not very explicit, it's also possible to make a request by using the route path and method.

You can find the different usage example in [usage-example.mts](../examples/how-to-build-an-api-wrapper/usage-example.mts).

> To execute the script simply call it as an executable script: `$ ./usage-example.mts`
