#!/usr/bin/env -S npx ts-node --esm --compilerOptions '{"moduleResolution":"nodenext","module":"esnext","target":"esnext", "allowImportingTsExtensions": true}'

import { Config } from '../../src/configs/Config.ts';
import { AbstractGenerateFileTask } from '../../src/task/AbstractGenerateFileTask.ts';
import Console from '../../src/utils/Console.mts';

export class GenerateMasterItemsTaskExample extends AbstractGenerateFileTask {
    async prepareData(): Promise<Array<object>> {
        const result = await this.sdk.get_v1_logistic_management_order_list_v1_logistic_management_orders__get({
            offset: '0',
            limit: '5',
            status: 'ORDER_IS_READY_TO_BE_EXECUTED_STATE',
        })
        .then(({ data }) => {
            //console.log(data)
            return data?.items ?? [];
        })
        .catch(err => console.error(err));

        //Console.debug(result);

        return result;
    }
    validateData(data: object): void {
      Console.debug("validate", data);

      // @todo
      // Utiliser MapFieldInterface.ts et Schema.ts pour pouvoir charger un schema de données et effectuer la partie validation.
      // A noter: validateData prend en paramètre toutes les données pour un fichier.
    }
    mapResult(data: object): Array<string> {
      let mappedData = [];

      return mappedData;
    }
    generateFile(_mappedData: string[]): string {
      return ''
    }
    sendFile(): void {
        throw new Error("Method not implemented.");
    }
}

Console.log(Config)

const task = new GenerateMasterItemsTaskExample();
task.run();
