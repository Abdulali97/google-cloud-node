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

function main(model, prompt) {
  // [START generativelanguage_v1beta_generated_TextService_GenerateText_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the `Model` or `TunedModel` to use for generating the
   *  completion.
   *  Examples:
   *   models/text-bison-001
   *   tunedModels/sentence-translator-u3b7m
   */
  // const model = 'abc123'
  /**
   *  Required. The free-form input text given to the model as a prompt.
   *  Given a prompt, the model will generate a TextCompletion response it
   *  predicts as the completion of the input text.
   */
  // const prompt = {}
  /**
   *  Optional. Controls the randomness of the output.
   *  Note: The default value varies by model, see the `Model.temperature`
   *  attribute of the `Model` returned the `getModel` function.
   *  Values can range from 0.0,1.0,
   *  inclusive. A value closer to 1.0 will produce responses that are more
   *  varied and creative, while a value closer to 0.0 will typically result in
   *  more straightforward responses from the model.
   */
  // const temperature = 1234
  /**
   *  Optional. Number of generated responses to return.
   *  This value must be between 1, 8, inclusive. If unset, this will default
   *  to 1.
   */
  // const candidateCount = 1234
  /**
   *  Optional. The maximum number of tokens to include in a candidate.
   *  If unset, this will default to output_token_limit specified in the `Model`
   *  specification.
   */
  // const maxOutputTokens = 1234
  /**
   *  Optional. The maximum cumulative probability of tokens to consider when
   *  sampling.
   *  The model uses combined Top-k and nucleus sampling.
   *  Tokens are sorted based on their assigned probabilities so that only the
   *  most likely tokens are considered. Top-k sampling directly limits the
   *  maximum number of tokens to consider, while Nucleus sampling limits number
   *  of tokens based on the cumulative probability.
   *  Note: The default value varies by model, see the `Model.top_p`
   *  attribute of the `Model` returned the `getModel` function.
   */
  // const topP = 1234
  /**
   *  Optional. The maximum number of tokens to consider when sampling.
   *  The model uses combined Top-k and nucleus sampling.
   *  Top-k sampling considers the set of `top_k` most probable tokens.
   *  Defaults to 40.
   *  Note: The default value varies by model, see the `Model.top_k`
   *  attribute of the `Model` returned the `getModel` function.
   */
  // const topK = 1234
  /**
   *  Optional. A list of unique `SafetySetting` instances for blocking unsafe
   *  content.
   *  that will be enforced on the `GenerateTextRequest.prompt` and
   *  `GenerateTextResponse.candidates`. There should not be more than one
   *  setting for each `SafetyCategory` type. The API will block any prompts and
   *  responses that fail to meet the thresholds set by these settings. This list
   *  overrides the default settings for each `SafetyCategory` specified in the
   *  safety_settings. If there is no `SafetySetting` for a given
   *  `SafetyCategory` provided in the list, the API will use the default safety
   *  setting for that category. Harm categories HARM_CATEGORY_DEROGATORY,
   *  HARM_CATEGORY_TOXICITY, HARM_CATEGORY_VIOLENCE, HARM_CATEGORY_SEXUAL,
   *  HARM_CATEGORY_MEDICAL, HARM_CATEGORY_DANGEROUS are supported in text
   *  service.
   */
  // const safetySettings = [1,2,3,4]
  /**
   *  The set of character sequences (up to 5) that will stop output generation.
   *  If specified, the API will stop at the first appearance of a stop
   *  sequence. The stop sequence will not be included as part of the response.
   */
  // const stopSequences = ['abc','def']

  // Imports the Generativelanguage library
  const {TextServiceClient} = require('@google-ai/generativelanguage').v1beta;

  // Instantiates a client
  const generativelanguageClient = new TextServiceClient();

  async function callGenerateText() {
    // Construct request
    const request = {
      model,
      prompt,
    };

    // Run request
    const response = await generativelanguageClient.generateText(request);
    console.log(response);
  }

  callGenerateText();
  // [END generativelanguage_v1beta_generated_TextService_GenerateText_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
