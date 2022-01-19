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

function main(parent, company) {
  // [START jobs_v4_generated_CompanyService_CreateCompany_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Resource name of the tenant under which the company is created.
   *  The format is "projects/{project_id}/tenants/{tenant_id}", for example,
   *  "projects/foo/tenants/bar".
   */
  // const parent = 'abc123'
  /**
   *  Required. The company to be created.
   */
  // const company = {}

  // Imports the Talent library
  const {CompanyServiceClient} = require('@google-cloud/talent').v4;

  // Instantiates a client
  const talentClient = new CompanyServiceClient();

  async function callCreateCompany() {
    // Construct request
    const request = {
      parent,
      company,
    };

    // Run request
    const response = await talentClient.createCompany(request);
    console.log(response);
  }

  callCreateCompany();
  // [END jobs_v4_generated_CompanyService_CreateCompany_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
