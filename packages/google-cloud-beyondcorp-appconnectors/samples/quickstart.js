// Copyright 2022 Google LLC
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

function main(parent) {
  // [START beyondcorp_quickstart]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the AppConnector location using the form:
   *  `projects/{project_id}/locations/{location_id}`
   */
  // const parent = 'abc123'
  /**
   *  Optional. The maximum number of items to return.
   *  If not specified, a default value of 50 will be used by the service.
   *  Regardless of the page_size value, the response may include a partial list
   *  and a caller should only rely on response's
   *  next_page_token BeyondCorp.ListAppConnectorsResponse.next_page_token  to
   *  determine if there are more instances left to be queried.
   */
  // const pageSize = 1234
  /**
   *  Optional. The next_page_token value returned from a previous
   *  ListAppConnectorsRequest, if any.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. A filter specifying constraints of a list operation.
   */
  // const filter = 'abc123'
  /**
   *  Optional. Specifies the ordering of results. See
   *  Sorting
   *  order (https://cloud.google.com/apis/design/design_patterns#sorting_order)
   *  for more information.
   */
  // const orderBy = 'abc123'

  // Imports the Appconnectors library
  const {AppConnectorsServiceClient} =
    require('@google-cloud/appconnectors').v1;

  // Instantiates a client
  const appconnectorsClient = new AppConnectorsServiceClient();

  async function callListAppConnectors() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await appconnectorsClient.listAppConnectorsAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListAppConnectors();
  // [END beyondcorp_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
