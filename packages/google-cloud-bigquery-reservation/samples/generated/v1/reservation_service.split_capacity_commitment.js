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

function main(name) {
  // [START bigqueryreservation_v1_generated_ReservationService_SplitCapacityCommitment_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name e.g.,:
   *   `projects/myproject/locations/US/capacityCommitments/123`
   */
  // const name = 'abc123'
  /**
   *  Number of slots in the capacity commitment after the split.
   */
  // const slotCount = 1234

  // Imports the Reservation library
  const {ReservationServiceClient} =
    require('@google-cloud/bigquery-reservation').v1;

  // Instantiates a client
  const reservationClient = new ReservationServiceClient();

  async function callSplitCapacityCommitment() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await reservationClient.splitCapacityCommitment(request);
    console.log(response);
  }

  callSplitCapacityCommitment();
  // [END bigqueryreservation_v1_generated_ReservationService_SplitCapacityCommitment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
