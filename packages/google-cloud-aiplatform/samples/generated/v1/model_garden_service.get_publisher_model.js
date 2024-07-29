// Copyright 2024 Google LLC
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
  // [START aiplatform_v1_generated_ModelGardenService_GetPublisherModel_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the PublisherModel resource.
   *  Format:
   *  `publishers/{publisher}/models/{publisher_model}`
   */
  // const name = 'abc123'
  /**
   *  Optional. The IETF BCP-47 language code representing the language in which
   *  the publisher model's text information should be written in.
   */
  // const languageCode = 'abc123'
  /**
   *  Optional. PublisherModel view specifying which fields to read.
   */
  // const view = {}
  /**
   *  Optional. Boolean indicates whether the requested model is a Hugging Face
   *  model.
   */
  // const isHuggingFaceModel = true

  // Imports the Aiplatform library
  const {ModelGardenServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new ModelGardenServiceClient();

  async function callGetPublisherModel() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await aiplatformClient.getPublisherModel(request);
    console.log(response);
  }

  callGetPublisherModel();
  // [END aiplatform_v1_generated_ModelGardenService_GetPublisherModel_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
