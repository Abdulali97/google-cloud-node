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

function main() {
  // [START dataflow_v1beta3_generated_JobsV1Beta3_SnapshotJob_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The project which owns the job to be snapshotted.
   */
  // const projectId = 'abc123'
  /**
   *  The job to be snapshotted.
   */
  // const jobId = 'abc123'
  /**
   *  TTL for the snapshot.
   */
  // const ttl = {}
  /**
   *  The location that contains this job.
   */
  // const location = 'abc123'
  /**
   *  If true, perform snapshots for sources which support this.
   */
  // const snapshotSources = true
  /**
   *  User specified description of the snapshot. Maybe empty.
   */
  // const description = 'abc123'

  // Imports the Dataflow library
  const {JobsV1Beta3Client} = require('@google-cloud/dataflow').v1beta3;

  // Instantiates a client
  const dataflowClient = new JobsV1Beta3Client();

  async function callSnapshotJob() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await dataflowClient.snapshotJob(request);
    console.log(response);
  }

  callSnapshotJob();
  // [END dataflow_v1beta3_generated_JobsV1Beta3_SnapshotJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
