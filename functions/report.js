import "source-map-support/register";

import { sendResponse, scaffold } from "node-lambda-toolkit";

import connectToDB from "../util/connectToDB";
import { report } from "../helpers/link";

const bootstrap = scaffold({
  errMsg: "ERROR REPORTING:",
  connectToDB
});

module.exports.handler = async (event, context, callback) => {
  const result = await report(event);
  return sendResponse(callback, result);
};
