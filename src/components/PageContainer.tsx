import * as React from "react";

import PitchFork from "./PitchFork";
import { diel } from "../setup";

export const PageContainer = () => {
  const bindOutput = diel.BindOutput.bind(diel);
  const getScales = diel.GetScales.bind(diel);
  return <>
    <PitchFork bindOutput={bindOutput} scales={getScales}/>
  </>;
}