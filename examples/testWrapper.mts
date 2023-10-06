#!/usr/bin/env -S npx ts-node --esm --compilerOptions '{"moduleResolution":"nodenext","module":"esnext","target":"esnext", "allowImportingTsExtensions": true}'

import api from 'api';
const sdk = api('@spacefill/v1#p570f12ln978a7s');

sdk.auth('warehouse_api_token_0001');
sdk.server('http://localhost:5004');
sdk.get_v1_logistic_management_master_item_list_v1_logistic_management_master_items__get({archived: 'no', offset: '0', limit: '25'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

