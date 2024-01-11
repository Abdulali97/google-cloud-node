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

function main(model, requests) {
  // [START generativelanguage_v1_generated_GenerativeService_BatchEmbedContents_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The model's resource name. This serves as an ID for the Model to
   *  use.
   *  This name should match a model name returned by the `ListModels` method.
   *  Format: `models/{model}`
   */
  // const model = 'abc123'
  /**
   *  Required. Embed requests for the batch. The model in each of these requests
   *  must match the model specified `BatchEmbedContentsRequest.model`.
   */
  // const requests = [1,2,3,4]

  // Imports the Generativelanguage library
  const {GenerativeServiceClient} = require('@google-ai/generativelanguage').v1;

  // Instantiates a client
  const generativelanguageClient = new GenerativeServiceClient();

  async function callBatchEmbedContents() {
    // Construct request
    const request = {
      model,
      requests,
    };

    // Run request
    const response = await generativelanguageClient.batchEmbedContents(request);
    console.log(response);
  }

  callBatchEmbedContents();
  // [END generativelanguage_v1_generated_GenerativeService_BatchEmbedContents_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
