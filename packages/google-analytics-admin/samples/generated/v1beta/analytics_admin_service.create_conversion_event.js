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

function main(conversionEvent, parent) {
  // [START analyticsadmin_v1beta_generated_AnalyticsAdminService_CreateConversionEvent_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The conversion event to create.
   */
  // const conversionEvent = {}
  /**
   *  Required. The resource name of the parent property where this conversion event will
   *  be created. Format: properties/123
   */
  // const parent = 'abc123'

  // Imports the Admin library
  const {AnalyticsAdminServiceClient} = require('@google-cloud/admin').v1beta;

  // Instantiates a client
  const adminClient = new AnalyticsAdminServiceClient();

  async function callCreateConversionEvent() {
    // Construct request
    const request = {
      conversionEvent,
      parent,
    };

    // Run request
    const response = await adminClient.createConversionEvent(request);
    console.log(response);
  }

  callCreateConversionEvent();
  // [END analyticsadmin_v1beta_generated_AnalyticsAdminService_CreateConversionEvent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
