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

function main(rollout, phaseId, jobId) {
  // [START clouddeploy_v1_generated_CloudDeploy_IgnoreJob_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the Rollout. Format is
   *  `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`.
   */
  // const rollout = 'abc123'
  /**
   *  Required. The phase ID the Job to ignore belongs to.
   */
  // const phaseId = 'abc123'
  /**
   *  Required. The job ID for the Job to ignore.
   */
  // const jobId = 'abc123'

  // Imports the Deploy library
  const {CloudDeployClient} = require('@google-cloud/deploy').v1;

  // Instantiates a client
  const deployClient = new CloudDeployClient();

  async function callIgnoreJob() {
    // Construct request
    const request = {
      rollout,
      phaseId,
      jobId,
    };

    // Run request
    const response = await deployClient.ignoreJob(request);
    console.log(response);
  }

  callIgnoreJob();
  // [END clouddeploy_v1_generated_CloudDeploy_IgnoreJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
