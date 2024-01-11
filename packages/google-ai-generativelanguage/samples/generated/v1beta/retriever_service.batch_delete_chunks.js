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

function main(requests) {
  // [START generativelanguage_v1beta_generated_RetrieverService_BatchDeleteChunks_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Optional. The name of the `Document` containing the `Chunk`s to delete.
   *  The parent field in every `DeleteChunkRequest` must match this value.
   *  Example: `corpora/my-corpus-123/documents/the-doc-abc`
   */
  // const parent = 'abc123'
  /**
   *  Required. The request messages specifying the `Chunk`s to delete.
   */
  // const requests = [1,2,3,4]

  // Imports the Generativelanguage library
  const {RetrieverServiceClient} = require('@google-ai/generativelanguage').v1beta;

  // Instantiates a client
  const generativelanguageClient = new RetrieverServiceClient();

  async function callBatchDeleteChunks() {
    // Construct request
    const request = {
      requests,
    };

    // Run request
    const response = await generativelanguageClient.batchDeleteChunks(request);
    console.log(response);
  }

  callBatchDeleteChunks();
  // [END generativelanguage_v1beta_generated_RetrieverService_BatchDeleteChunks_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
