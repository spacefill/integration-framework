# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.17.2] - 2024-10-20

### Fixed

- Change FileItemInterface (make date optional)

## [0.17.0] - 2024-10-17

### Added

- can list file and get modified date

## [0.16.2] - 2024-09-30

### Refactor

- Remove useless statistic that can cause issues if the framework is used on a web environment.

## [0.16.1] - 2024-09-04

### Improve

- Add Spacefill-Ctx-Integration-Key, Spacefill-Ctx-Warehouse-Id and Spacefill-Ctx-Shipper-Account-Id in the api context.

## [0.16.0] - 2024-08-27

### Added

- Update sdk with spacefill api [version 2024-08-27](https://developer.spacefill.fr/changelog/2024-08-27).
  - Allows to use the new `granularity_fields` on order endpoints

## [0.15.9] - 2024-07-15

### Improved

- Update HTTP codes allowed for retry.

## [0.15.8] - 2024-05-28

### Improved

- Implement automatic retry on idempotent server response (ex. 502)

## [0.15.7] - 2024-05-28

### Improved

- Improve logs when api ping failed.

## [0.15.6] - 2024-05-27

### Added

- Added `PARTIALLY_DELIVERED` transport status enum

## [0.15.5] - 2024-05-17

### Changed

- The `@spacefill/integration-framework` package is now available on [npm](https://www.npmjs.com/package/@spacefill/integration-framework) publicly. Authentication is no longer needed to download this package. You will need to remove your `npmrc` configuration for the `@spacefill` scope.

## [0.15.4] - 2024-05-14

### Improved

- [!114](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/114) `AbstractApiDataExchangeTask`: add a new argument `input-json-payload-b64`, to pass json payload in a base64 encoded format.

## [0.15.3] - 2024-04-23

### Improved

- [!112](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/112) `EdiEvent` - allows to defined current entity id and entity type once.

## [0.15.2] - 2024-04-19

### Improved

- [!110](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/110) `CsvHelper` add a parameter `otherParsingOptions` to customize more parsing options.

## [0.15.1] - 2024-03-29

### Fixed

- [#52](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/52) Parse the values `fileColumnDelimiter` and `fileRowDelimiter` in the CsvHelper class constructor.

## [0.15.0] - 2024-03-28

### Added

- [#46](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/46) Add `writeLineAsync` function for writing csv files.

## [0.14.2] - 2024-03-27

### Added

- [#51](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/51) add upload generated files into archives directory.

## [0.14.1] - 2024-03-27

### Added

- [#49](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/49) add `TECHNICAL_OPERATION` workflow type value.

## [0.14.0] - 2024-03-08

### Improved

- [#47](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/47) Update SDK to support Spacefill API [version 2024-03-11](https://developer.spacefill.fr/changelog/2024-03-11).
  - Add 2 new values for Spacefill integration contexte:
    - `EXPORT_TRANSPORT_ACK`
    - `IMPORT_TRANSPORT_ACK`

## [0.13.0] - 2024-03-08

### Improved

- [#45](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/45) Update SDK to support Spacefill API [version 2024-02-21](https://developer.spacefill.fr/changelog/2024-02-21).

## [0.12.3] - 2024-02-21

### Fixed

- [!93](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/93) Add missing `AbstractDataExportSchema` class to structure data mapping for API-to-API connectors.

## [0.12.2] - 2024-02-21

### Fixed

- [!91](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/91) Add missing export in `src/index.ts`

## [0.12.1] - 2024-02-20

### Fixed

- [!89](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/89) `Config.ts` - remove format validation for hostname.

## [0.12.0] - 2024-02-20

### Added

- [#37](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/37) Add class `AbstractApiDataExchangeTask` to manage API-to-API connectors.

## [0.11.1] - 2024-02-13

### Improved

- [#39](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/39)
  - remove `SUCCESS` event sending in the framework, now this should be managed within each connector.
  - improve documentation about event management.

## [0.11.0] - 2024-01-30

### Added

- [#36](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/36) add entityId and entityType in ediEvent.

## [0.10.2] - 2024-01-22

### Improved

- [#34](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/34) Change workflow value `IMPORT_INVENTORY_ADJUSTEMENT` -> `IMPORT_INVENTORY_ADJUSTMENT` in edi events context.

## [0.10.1] - 2024-01-20

### Fixed

- [#33](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/33) Avoid print `AxiosError` twice.

## [0.10.0] - 2024-01-19

### Improved

- [#29](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/29) Add event `STARTED` and `NO_CONTENT_SUCCESS` in `AbstractLoadFileTask` file.
- [#32](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/32) Load files - remove empty lines in `CsvHelper.ts`.
- [#31](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/31) Improve `AxiosError` print.

### Fixed

- [#30](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/30) Send `InvalidRequestDataError` instead of `InternalError` in case of data validation failure.

## [0.9.0] - 2024-01-11

### Added

- [#24](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/24) Add transfer class Ftp Client.

## [0.8.4] - 2024-01-09

### Improved

- [#27](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/25) Use `encodeURI` to manage special characters on EDI context.
- [!70](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/70) Update the SDK with the Spacefill REST API version [2024-01-08](https://developer.spacefill.fr/changelog/2024-01-08).

## [0.8.3] - 2024-01-05

### Improved

- [#26](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/25) Console -add separation line between treated files.

### Fixed

- [#25](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/25) `AbstractGenerateFileTask`: Wrong `SUCCESS` event sending.
- [!67](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/67) `AbstractGenerateFileTask`: missing `NO_CONTENT_SUCCESS` event emit.

## [0.8.2] - 2024-01-03

### Fixed

- [!65](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/65) Cannot manage multiple modes in tasks.

## [0.8.1] - 2023-12-18

### Refactor

- [!62](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/62) Switch `initFilesGeneration()` method asynchronous.

## [0.8.0] - 2023-12-18

### Added

- [!60](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/60) Update sdk with spacefill api [version 2023-12-08](https://developer.spacefill.fr/changelog/2023-12-12).

## [0.7.0] - 2023-12-15

### Added

- [#23](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/23) Add duration in console logs.

## [0.6.0] - 2023-12-14

### Added

- [!54](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/54) Add a `CsvHelper` to help to map file data with data schema.

### Fixed

- [!42](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/54) Add missing Configuration validation in `AbstractLoadFileTask`.
- [!42](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/54) Add missing `SUCCESS` event sending in `AbstractLoadFileTask`.
- [!54](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/54) Wrong order for file data validation in `AbstractLoadFileTask`.

## [0.5.2] - 2023-12-13

### Fixed

- [#22](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/22) Missing data validation before processing it in `AbstractLoadFileTask.ts`.
- [#21](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/21) Sending events did not use the Axios logger.
- [#20](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/20) `--print-config` wasn't correctly display the configuration.
- [!52](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/50) AxiosLogger was printing messages twice.

## [0.5.1] - 2023-12-12

### Fixed

- [!50](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/50) Correction of several typos.

## [0.5.0] - 2023-12-11

### Added

- [#18](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/18) Add TaskLauncher.ts to be use as an entry point in the connectors.

## [0.4.4] - 2023-12-08

### Fixed

- [!43](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/43) Typo on ~~`onProcessingFileSucces`~~--> `onProcessingFileSuccess` method.

## [0.4.3] - 2023-12-07

### Fixed

- [#16](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/16)
  - fix on LocalClient.upload() - wrong root dir.
  - replace minimum by minLength in Config.ts.

## [0.4.2] - 2023-12-07

### Fixed

- [!38](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/38) Limit length of `Spacefill-Ctx-Data-Source` header to 100 characters on `SpacefillAPIWrapperV1.upload()` method.

## [0.4.1] - 2023-12-06

### Fixed

- [!36](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/36) Duplicated sdk init in `AbstractLoadFileTask.ts`.

## [0.4.0] - 2023-12-06

### Added

- [#14](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/14) Add automatic connection retries for transfer operations.

## [0.3.1] - 2023-12-06

### Fixed

- [#15](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/15) Limit length of `Spacefill-Ctx-Data-Source` header to 100 characters.

## [0.3.0] - 2023-12-05

### Added

- [#13](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/13) `AbstractLoadFileTask.ts` - Temporary rename file with `RUN_ID` to flag origin process.

### Fixed

- [!25](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/25) Move `LocalClient.test` and `Transfer.test` files in `tests/ci` folder + fix tests.

## [0.2.0] - 2023-11-29

### Added

- [!22](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/22) Declare `run()` method into `AbstractTask` to be able to create a task launcher.

## [0.1.1] - 2023-11-29

### Fixed

- [#9](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/9) Transfer.listDirWithFilter missing full path in returned files.

## [0.1.0] - 2023-11-29

### Added

- [#8](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/8) Add new env var `WMS_DEFAULT_DIR` and a CLI argument `--wms-default-dir` to define the root dir in during transfer files.

## [0.0.1] - 2023-11-28

Initial release.
