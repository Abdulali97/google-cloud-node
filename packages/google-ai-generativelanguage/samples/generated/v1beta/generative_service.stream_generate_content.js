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

function main(model, contents) {
  // [START generativelanguage_v1beta_generated_GenerativeService_StreamGenerateContent_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the `Model` to use for generating the completion.
   *  Format: `name=models/{model}`.
   */
  // const model = 'abc123'
  /**
   *  Required. The content of the current conversation with the model.
   *  For single-turn queries, this is a single instance. For multi-turn queries,
   *  this is a repeated field that contains conversation history + latest
   *  request.
   */
  // const contents = [1,2,3,4]
  /**
   *  Optional. A list of `Tools` the model may use to generate the next
   *  response.
   *  A `Tool` is a piece of code that enables the system to interact with
   *  external systems to perform an action, or set of actions, outside of
   *  knowledge and scope of the model. The only supported tool is currently
   *  `Function`.
   */
  // const tools = [1,2,3,4]
  /**
   *  Optional. A list of unique `SafetySetting` instances for blocking unsafe
   *  content.
   *  This will be enforced on the `GenerateContentRequest.contents` and
   *  `GenerateContentResponse.candidates`. There should not be more than one
   *  setting for each `SafetyCategory` type. The API will block any contents and
   *  responses that fail to meet the thresholds set by these settings. This list
   *  overrides the default settings for each `SafetyCategory` specified in the
   *  safety_settings. If there is no `SafetySetting` for a given
   *  `SafetyCategory` provided in the list, the API will use the default safety
   *  setting for that category. Harm categories HARM_CATEGORY_HATE_SPEECH,
   *  HARM_CATEGORY_SEXUALLY_EXPLICIT, HARM_CATEGORY_DANGEROUS_CONTENT,
   *  HARM_CATEGORY_HARASSMENT are supported.
   */
  // const safetySettings = [1,2,3,4]
  /**
   *  Optional. Configuration options for model generation and outputs.
   */
  // const generationConfig = {}

  // Imports the Generativelanguage library
  const {GenerativeServiceClient} = require('@google-ai/generativelanguage').v1beta;

  // Instantiates a client
  const generativelanguageClient = new GenerativeServiceClient();

  async function callStreamGenerateContent() {
    // Construct request
    const request = {
      model,
      contents,
    };

    // Run request
    const stream = await generativelanguageClient.streamGenerateContent(request);
    stream.on('data', (response) => { console.log(response) });
    stream.on('error', (err) => { throw(err) });
    stream.on('end', () => { /* API call completed */ });
  }

  callStreamGenerateContent();
  // [END generativelanguage_v1beta_generated_GenerativeService_StreamGenerateContent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
