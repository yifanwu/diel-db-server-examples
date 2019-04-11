import { DielRuntime, DbType } from "diel";
import { loadPage } from ".";
import { DbSetupConfig } from "diel";
export const DEMO_WITH_SOCKET = false;

const dbConfigs: DbSetupConfig[] = [
  {
    dbType: DbType.Socket,
    connection: "ws://localhost:8999",
    message: {dbName: "pitchfork"}
  }
];

// slightly weird location I suppose
const dielPrefix = "./assets/diel/";

const dielFiles = [
   `${dielPrefix}pitchfork-remote.diel`
];

const mainDbPath: string = null;

export const diel = new DielRuntime({
  isStrict: true,
  showLog: true,
  setupCb: loadPage,
  dielFiles,
  mainDbPath,
  dbConfigs,
});