import { fileURLToPath } from "url";

import { expect } from "chai";
import { fs, path } from "zx";

import { CsvHelper, CsvOptionsInterface } from "../../../src/helpers/CsvHelper.ts"; // Assurez-vous que le chemin est correct

const currentDirName = path.dirname(fileURLToPath(import.meta.url));

describe("Helper", () => {
  describe("writeLineAsync", () => {
    it("should write data to file", async () => {
      const filePath = "test_helper.csv";
      const options: CsvOptionsInterface = {
        encoding: "utf-8",
        delimiter: ",",
        rowDelimiter: "\n",
        flags: "a",
      };

      const csvHelper = new CsvHelper(filePath, options);

      const testData = ["SPACEFILL1", "WMS1", "warehouse1@example.com\nSPACEFILL2", "WMS2", "warehouse2@example.com"];

      // Write the test data to the file
      await csvHelper.writeLineAsync(testData);

      // check if the file exists
      const fileExists = fs.existsSync(filePath);
      expect(fileExists).to.be.true;

      const generatedFileContent = fs.readFileSync(filePath, "utf-8");

      // delete the file after the test
      fs.unlinkSync(filePath);

      const referenceFileContent = fs.readFileSync(path.join(currentDirName, "csv_files", "ref_test_helper.csv"), "utf-8");
      expect(generatedFileContent.trim()).to.be.equals(referenceFileContent.trim());
    });
  });
});
