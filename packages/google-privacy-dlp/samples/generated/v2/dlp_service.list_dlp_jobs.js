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

function main(parent) {
  // [START dlp_v2_generated_DlpService_ListDlpJobs_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Parent resource name.
   *  The format of this value varies depending on whether you have specified a
   *  processing
   *  location (https://cloud.google.com/dlp/docs/specifying-location):
   *  + Projects scope, location specified:<br/>
   *    `projects/`<var>PROJECT_ID</var>`/locations/`<var>LOCATION_ID</var>
   *  + Projects scope, no location specified (defaults to global):<br/>
   *    `projects/`<var>PROJECT_ID</var>
   *  The following example `parent` string specifies a parent project with the
   *  identifier `example-project`, and specifies the `europe-west3` location
   *  for processing data:
   *      parent=projects/example-project/locations/europe-west3
   */
  // const parent = 'abc123'
  /**
   *  Allows filtering.
   *  Supported syntax:
   *  * Filter expressions are made up of one or more restrictions.
   *  * Restrictions can be combined by `AND` or `OR` logical operators. A
   *  sequence of restrictions implicitly uses `AND`.
   *  * A restriction has the form of `{field} {operator} {value}`.
   *  * Supported fields/values for inspect jobs:
   *      - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED
   *      - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY
   *      - `trigger_name` - The resource name of the trigger that created job.
   *      - 'end_time` - Corresponds to time the job finished.
   *      - 'start_time` - Corresponds to time the job finished.
   *  * Supported fields for risk analysis jobs:
   *      - `state` - RUNNING|CANCELED|FINISHED|FAILED
   *      - 'end_time` - Corresponds to time the job finished.
   *      - 'start_time` - Corresponds to time the job finished.
   *  * The operator must be `=` or `!=`.
   *  Examples:
   *  * inspected_storage = cloud_storage AND state = done
   *  * inspected_storage = cloud_storage OR inspected_storage = bigquery
   *  * inspected_storage = cloud_storage AND (state = done OR state = canceled)
   *  * end_time > \"2017-12-12T00:00:00+00:00\"
   *  The length of this field should be no more than 500 characters.
   */
  // const filter = 'abc123'
  /**
   *  The standard list page size.
   */
  // const pageSize = 1234
  /**
   *  The standard list page token.
   */
  // const pageToken = 'abc123'
  /**
   *  The type of job. Defaults to `DlpJobType.INSPECT`
   */
  // const type = {}
  /**
   *  Comma separated list of fields to order by,
   *  followed by `asc` or `desc` postfix. This list is case-insensitive,
   *  default sorting order is ascending, redundant space characters are
   *  insignificant.
   *  Example: `name asc, end_time asc, create_time desc`
   *  Supported fields are:
   *  - `create_time`: corresponds to time the job was created.
   *  - `end_time`: corresponds to time the job ended.
   *  - `name`: corresponds to job's name.
   *  - `state`: corresponds to `state`
   */
  // const orderBy = 'abc123'

  // Imports the Dlp library
  const {DlpServiceClient} = require('@google-cloud/dlp').v2;

  // Instantiates a client
  const dlpClient = new DlpServiceClient();

  async function callListDlpJobs() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await dlpClient.listDlpJobsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListDlpJobs();
  // [END dlp_v2_generated_DlpService_ListDlpJobs_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
