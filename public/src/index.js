import React from "react";
import ReactDOM from "react-dom";
import Amplify from "aws-amplify";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import config from "./config";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: "testApiCall",
        endpoint: config.apiGateway.URL,
        region: config.apiGateway.REGION
      }
    ]
  },
  Storage: {
    bucket: config.s3.UPLOADS_BUCKET //REQUIRED -  Amazon S3 bucket
    // region: 'XX-XXXX-X', //OPTIONAL -  Amazon service region
  }
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();