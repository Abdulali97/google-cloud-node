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

function main(parent) {
  // [START securitycenter_v2_generated_SecurityCenter_ListValuedResources_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of parent to list exposed resources.
   *  Valid formats:
   *  "organizations/{organization}",
   *  "organizations/{organization}/simulations/{simulation}"
   *  "organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}"
   */
  // const parent = 'abc123'
  /**
   *  The filter expression that filters the valued resources in the response.
   *  Supported fields:
   *    * `resource_value` supports =
   *    * `resource_type` supports =
   */
  // const filter = 'abc123'
  /**
   *  The value returned by the last `ListValuedResourcesResponse`; indicates
   *  that this is a continuation of a prior `ListValuedResources` call, and
   *  that the system should return the next page of data.
   */
  // const pageToken = 'abc123'
  /**
   *  The maximum number of results to return in a single response. Default is
   *  10, minimum is 1, maximum is 1000.
   */
  // const pageSize = 1234
  /**
   *  Optional. The fields by which to order the valued resources response.
   *  Supported fields:
   *    * `exposed_score`
   *    * `resource_value`
   *    * `resource_type`
   *  Values should be a comma separated list of fields. For example:
   *  `exposed_score,resource_value`.
   *  The default sorting order is descending. To specify ascending or descending
   *  order for a field, append a " ASC" or a " DESC" suffix, respectively; for
   *  example: `exposed_score DESC`.
   */
  // const orderBy = 'abc123'

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/securitycenter').v2;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callListValuedResources() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = securitycenterClient.listValuedResourcesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListValuedResources();
  // [END securitycenter_v2_generated_SecurityCenter_ListValuedResources_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
