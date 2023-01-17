// Copyright 2023 Google LLC
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

function main(parent) {
  // [START dialogflow_v2_generated_Environments_ListEnvironments_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The agent to list all environments from.
   *  Format:
   *  - `projects/<Project ID>/agent`
   *  - `projects/<Project ID>/locations/<Location ID>/agent`
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of items to return in a single page. By
   *  default 100 and at most 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. The next_page_token value returned from a previous list request.
   */
  // const pageToken = 'abc123'

  // Imports the Dialogflow library
  const {EnvironmentsClient} = require('@google-cloud/dialogflow').v2;

  // Instantiates a client
  const dialogflowClient = new EnvironmentsClient();

  async function callListEnvironments() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dialogflowClient.listEnvironmentsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListEnvironments();
  // [END dialogflow_v2_generated_Environments_ListEnvironments_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
