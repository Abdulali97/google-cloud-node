// Copyright 2021 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

function main(context) {
  // [START aiplatform_v1beta1_generated_MetadataService_AddContextArtifactsAndExecutions_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Context that the Artifacts and Executions
   *  belong to.
   *  Format:
   *  `projects/{project}/locations/{location}/metadataStores/{metadatastore}/contexts/{context}`
   */
  // const context = 'abc123'
  /**
   *  The resource names of the Artifacts to attribute to the Context.
   *  Format:
   *  `projects/{project}/locations/{location}/metadataStores/{metadatastore}/artifacts/{artifact}`
   */
  // const artifacts = 'abc123'
  /**
   *  The resource names of the Executions to associate with the
   *  Context.
   *  Format:
   *  `projects/{project}/locations/{location}/metadataStores/{metadatastore}/executions/{execution}`
   */
  // const executions = 'abc123'

  // Imports the Aiplatform library
  const {MetadataServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new MetadataServiceClient();

  async function callAddContextArtifactsAndExecutions() {
    // Construct request
    const request = {
      context,
    };

    // Run request
    const response = await aiplatformClient.addContextArtifactsAndExecutions(
      request
    );
    console.log(response);
  }

  callAddContextArtifactsAndExecutions();
  // [END aiplatform_v1beta1_generated_MetadataService_AddContextArtifactsAndExecutions_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
