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

function main(tcpRoute) {
  // [START networkservices_v1_generated_NetworkServices_UpdateTcpRoute_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Optional. Field mask is used to specify the fields to be overwritten in the
   *  TcpRoute resource by the update.
   *  The fields specified in the update_mask are relative to the resource, not
   *  the full request. A field will be overwritten if it is in the mask. If the
   *  user does not provide a mask then all fields will be overwritten.
   */
  // const updateMask = {}
  /**
   *  Required. Updated TcpRoute resource.
   */
  // const tcpRoute = {}

  // Imports the Networkservices library
  const {NetworkServicesClient} = require('@google-cloud/networkservices').v1;

  // Instantiates a client
  const networkservicesClient = new NetworkServicesClient();

  async function callUpdateTcpRoute() {
    // Construct request
    const request = {
      tcpRoute,
    };

    // Run request
    const [operation] = await networkservicesClient.updateTcpRoute(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateTcpRoute();
  // [END networkservices_v1_generated_NetworkServices_UpdateTcpRoute_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
