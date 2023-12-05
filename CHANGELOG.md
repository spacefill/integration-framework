# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.5] - 2023-12-05

### Added

- [#13](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/13) `AbstractLoadFileTask.ts` - Temporary rename file with `RUN_ID` to flag origin process.

### Fixed

- [!25](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/25) Move `LocalClient.test` and `Transfert.test` files in `tests/ci` folder + fix tests.

## [0.0.4] - 2023-11-29

### Added

- [!22](https://gitlab.spacefill.fr/spacefill/integration-framework/-/merge_requests/22) Declare `run()` method into `AbstractTask` to be able to create a task launcher.

## [0.0.3] - 2023-11-29

### Fixed

- [#9](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/9) Transfert.listDirWithFilter missing full path in returned files.

## [0.0.2] - 2023-11-29

### Added

- [#8](https://gitlab.spacefill.fr/spacefill/integration-framework/-/issues/8) Add new env var `WMS_DEFAULT_DIR` and a CLI argument `--wms-default-dir` to define the root dir in during transfert files.

## [0.0.1] - 2023-11-28

Initial release.
