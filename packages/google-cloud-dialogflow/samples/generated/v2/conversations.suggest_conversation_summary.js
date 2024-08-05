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

function main(conversation) {
  // [START dialogflow_v2_generated_Conversations_SuggestConversationSummary_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The conversation to fetch suggestion for.
   *  Format: `projects/<Project ID>/locations/<Location
   *  ID>/conversations/<Conversation ID>`.
   */
  // const conversation = 'abc123'
  /**
   *  Optional. The name of the latest conversation message used as context for
   *  compiling suggestion. If empty, the latest message of the conversation will
   *  be used.
   *  Format: `projects/<Project ID>/locations/<Location
   *  ID>/conversations/<Conversation ID>/messages/<Message ID>`.
   */
  // const latestMessage = 'abc123'
  /**
   *  Optional. Max number of messages prior to and including
   *  latest_message  to use as context when compiling the
   *  suggestion. By default 500 and at most 1000.
   */
  // const contextSize = 1234
  /**
   *  Optional. Parameters for a human assist query. Only used for POC/demo
   *  purpose.
   */
  // const assistQueryParams = {}

  // Imports the Dialogflow library
  const {ConversationsClient} = require('@google-cloud/dialogflow').v2;

  // Instantiates a client
  const dialogflowClient = new ConversationsClient();

  async function callSuggestConversationSummary() {
    // Construct request
    const request = {
      conversation,
    };

    // Run request
    const response = await dialogflowClient.suggestConversationSummary(request);
    console.log(response);
  }

  callSuggestConversationSummary();
  // [END dialogflow_v2_generated_Conversations_SuggestConversationSummary_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
