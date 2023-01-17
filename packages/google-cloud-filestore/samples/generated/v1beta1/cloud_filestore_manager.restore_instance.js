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

function main(name, fileShare) {
  // [START file_v1beta1_generated_CloudFilestoreManager_RestoreInstance_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the instance, in the format
   *  `projects/{project_id}/locations/{location_id}/instances/{instance_id}`.
   */
  // const name = 'abc123'
  /**
   *  Required. Name of the file share in the Filestore instance that the snapshot
   *  is being restored to.
   */
  // const fileShare = 'abc123'
  /**
   *  The resource name of the snapshot, in the format
   *  `projects/{project_id}/locations/{location_id}/snapshots/{snapshot_id}`.
   */
  // const sourceSnapshot = 'abc123'
  /**
   *  The resource name of the backup, in the format
   *  `projects/{project_id}/locations/{location_id}/backups/{backup_id}`.
   */
  // const sourceBackup = 'abc123'

  // Imports the Filestore library
  const {CloudFilestoreManagerClient} = require('@google-cloud/filestore').v1beta1;

  // Instantiates a client
  const filestoreClient = new CloudFilestoreManagerClient();

  async function callRestoreInstance() {
    // Construct request
    const request = {
      name,
      fileShare,
    };

    // Run request
    const [operation] = await filestoreClient.restoreInstance(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callRestoreInstance();
  // [END file_v1beta1_generated_CloudFilestoreManager_RestoreInstance_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
