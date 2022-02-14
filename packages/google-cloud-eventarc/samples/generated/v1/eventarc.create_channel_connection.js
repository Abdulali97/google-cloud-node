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

function main(parent, channelConnection, channelConnectionId) {
  // [START eventarc_v1_generated_Eventarc_CreateChannelConnection_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent collection in which to add this channel connection.
   */
  // const parent = 'abc123'
  /**
   *  Required. Channel connection to create.
   */
  // const channelConnection = {}
  /**
   *  Required. The user-provided ID to be assigned to the channel connection.
   */
  // const channelConnectionId = 'abc123'

  // Imports the Eventarc library
  const {EventarcClient} = require('@google-cloud/eventarc').v1;

  // Instantiates a client
  const eventarcClient = new EventarcClient();

  async function callCreateChannelConnection() {
    // Construct request
    const request = {
      parent,
      channelConnection,
      channelConnectionId,
    };

    // Run request
    const [operation] = await eventarcClient.createChannelConnection(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateChannelConnection();
  // [END eventarc_v1_generated_Eventarc_CreateChannelConnection_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
