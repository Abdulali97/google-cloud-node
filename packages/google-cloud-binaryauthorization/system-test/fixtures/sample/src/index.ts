// Copyright 2021 Google LLC
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

import {BinauthzManagementServiceV1Beta1Client} from '@google-cloud/binary-authorization';

// check that the client class type name can be used
function doStuffWithBinauthzManagementServiceV1Beta1Client(
  client: BinauthzManagementServiceV1Beta1Client
) {
  client.close();
}

function main() {
  // check that the client instance can be created
  const binauthzManagementServiceV1Beta1Client = new BinauthzManagementServiceV1Beta1Client();
  doStuffWithBinauthzManagementServiceV1Beta1Client(
    binauthzManagementServiceV1Beta1Client
  );
}

main();
