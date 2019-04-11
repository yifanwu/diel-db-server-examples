import * as React from "react";
import * as ReactDOM from "react-dom";

import { DielRuntime, DbType, DbSetupConfig } from "diel";

import { PageContainer } from "./components/PageContainer";

ReactDOM.render(
  <>
    <h2>Welcome to DIEL!</h2>
    <p>Please wait, we are loading data files into Web Workers and it may take a while.</p>
  </>,
  document.getElementById("wrapper")
);


// this is the place where DIEL should be loaded with the
// generated .db file
const loadPage = () => {
  ReactDOM.render(
    <PageContainer/>,
    document.getElementById("wrapper")
  );
};

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
export const testnum = 120;

