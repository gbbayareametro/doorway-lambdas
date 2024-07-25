#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { DwExternalApi } from "../lib/dw-external-api";

const app = new cdk.App();
new DwExternalApi(app, "DWExternalApi");
// new LotteryValidatorStack(app, "LotteryValidatorStack");
// new PaperAppInterfaceStack(app, "PaperAppInterface");
