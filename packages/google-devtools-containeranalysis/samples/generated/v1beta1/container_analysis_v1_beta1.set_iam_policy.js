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

function main(resource, policy) {
  // [START containeranalysis_v1beta1_generated_ContainerAnalysisV1Beta1_SetIamPolicy_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  REQUIRED: The resource for which the policy is being specified.
   *  See the operation documentation for the appropriate value for this field.
   */
  // const resource = 'abc123'
  /**
   *  REQUIRED: The complete policy to be applied to the `resource`. The size of
   *  the policy is limited to a few 10s of KB. An empty policy is a
   *  valid policy but certain Cloud Platform services (such as Projects)
   *  might reject them.
   */
  // const policy = {}

  // Imports the Containeranalysis library
  const {ContainerAnalysisV1Beta1Client} =
    require('@google-cloud/containeranalysis').v1beta1;

  // Instantiates a client
  const containeranalysisClient = new ContainerAnalysisV1Beta1Client();

  async function callSetIamPolicy() {
    // Construct request
    const request = {
      resource,
      policy,
    };

    // Run request
    const response = await containeranalysisClient.setIamPolicy(request);
    console.log(response);
  }

  callSetIamPolicy();
  // [END containeranalysis_v1beta1_generated_ContainerAnalysisV1Beta1_SetIamPolicy_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
