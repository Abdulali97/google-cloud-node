// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(name) {
  // [START dialogflow_v3beta1_generated_Agents_ExportAgent_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the agent to export.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>`.
   */
  // const name = 'abc123'
  /**
   *  Optional. The Google Cloud Storage (https://cloud.google.com/storage/docs/) URI to
   *  export the agent to. The format of this URI must be
   *  `gs://<bucket-name>/<object-name>`.
   *  If left unspecified, the serialized agent is returned inline.
   *  Dialogflow performs a write operation for the Cloud Storage object
   *  on the caller's behalf, so your request authentication must
   *  have write permissions for the object. For more information, see
   *  Dialogflow access
   *  control (https://cloud.google.com/dialogflow/cx/docs/concept/access-control#storage).
   */
  // const agentUri = 'abc123'
  /**
   *  Optional. The data format of the exported agent. If not specified, `BLOB` is assumed.
   */
  // const dataFormat = {}
  /**
   *  Optional. Environment name. If not set, draft environment is assumed.
   *  Format: `projects/<Project ID>/locations/<Location ID>/agents/<Agent
   *  ID>/environments/<Environment ID>`.
   */
  // const environment = 'abc123'

  // Imports the Cx library
  const {AgentsClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new AgentsClient();

  async function callExportAgent() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await cxClient.exportAgent(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callExportAgent();
  // [END dialogflow_v3beta1_generated_Agents_ExportAgent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
