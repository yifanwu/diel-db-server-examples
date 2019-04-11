import { resolve } from "path";
import { StartDielDbServer } from "diel-db-server";
import { DbDriver } from "diel-db-server/build/src/types";

console.log("data path", resolve("sample-data/pitchfork.sqlite"));

const configs = [{
  dbName: "pitchfork",
  path: resolve("server/sample-data/pitchfork.sqlite"),
  driver: DbDriver.SQLite
}];

StartDielDbServer(configs);
