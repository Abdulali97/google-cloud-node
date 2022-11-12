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

function main(parent, instanceId) {
  // [START datafusion_v1_generated_DataFusion_CreateInstance_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The instance's project and location in the format
   *  projects/{project}/locations/{location}.
   */
  // const parent = 'abc123'
  /**
   *  Required. The name of the instance to create.
   */
  // const instanceId = 'abc123'
  /**
   *  An instance resource.
   */
  // const instance = {}

  // Imports the Datafusion library
  const {DataFusionClient} = require('@google-cloud/data-fusion').v1;

  // Instantiates a client
  const datafusionClient = new DataFusionClient();

  async function callCreateInstance() {
    // Construct request
    const request = {
      parent,
      instanceId,
    };

    // Run request
    const [operation] = await datafusionClient.createInstance(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateInstance();
  // [END datafusion_v1_generated_DataFusion_CreateInstance_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
