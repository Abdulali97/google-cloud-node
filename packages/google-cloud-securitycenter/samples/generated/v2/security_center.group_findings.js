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

function main(parent, groupBy) {
  // [START securitycenter_v2_generated_SecurityCenter_GroupFindings_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Name of the source to groupBy. If no location is specified,
   *  finding is assumed to be in global.
   *   The following list shows some examples:
   *  + `organizations/[organization_id]/sources/[source_id]`
   *  +
   *  `organizations/[organization_id]/sources/[source_id]/locations/[location_id]`
   *  + `folders/[folder_id]/sources/[source_id]`
   *  + `folders/[folder_id]/sources/[source_id]/locations/[location_id]`
   *  + `projects/[project_id]/sources/[source_id]`
   *  + `projects/[project_id]/sources/[source_id]/locations/[location_id]`
   *  To groupBy across all sources provide a source_id of `-`. The following
   *  list shows some examples:
   *  + `organizations/{organization_id}/sources/-`
   *  + `organizations/{organization_id}/sources/-/locations/[location_id]`
   *  + `folders/{folder_id}/sources/-`
   *  + `folders/{folder_id}/sources/-/locations/[location_id]`
   *  + `projects/{project_id}/sources/-`
   *  + `projects/{project_id}/sources/-/locations/[location_id]`
   */
  // const parent = 'abc123'
  /**
   *  Expression that defines the filter to apply across findings.
   *  The expression is a list of one or more restrictions combined via logical
   *  operators `AND` and `OR`.
   *  Parentheses are supported, and `OR` has higher precedence than `AND`.
   *  Restrictions have the form `<field> <operator> <value>` and may have a `-`
   *  character in front of them to indicate negation. Examples include:
   *   * name
   *   * security_marks.marks.marka
   *  The supported operators are:
   *  * `=` for all value types.
   *  * `>`, `<`, `>=`, `<=` for integer values.
   *  * `:`, meaning substring matching, for strings.
   *  The supported value types are:
   *  * string literals in quotes.
   *  * integer literals without quotes.
   *  * boolean literals `true` and `false` without quotes.
   *  The following field and operator combinations are supported:
   *  * name: `=`
   *  * parent: `=`, `:`
   *  * resource_name: `=`, `:`
   *  * state: `=`, `:`
   *  * category: `=`, `:`
   *  * external_uri: `=`, `:`
   *  * event_time: `=`, `>`, `<`, `>=`, `<=`
   *    Usage: This should be milliseconds since epoch or an RFC3339 string.
   *    Examples:
   *      `event_time = "2019-06-10T16:07:18-07:00"`
   *      `event_time = 1560208038000`
   *  * severity: `=`, `:`
   *  * security_marks.marks: `=`, `:`
   *  * resource:
   *    * resource.name: `=`, `:`
   *    * resource.parent_name: `=`, `:`
   *    * resource.parent_display_name: `=`, `:`
   *    * resource.project_name: `=`, `:`
   *    * resource.project_display_name: `=`, `:`
   *    * resource.type: `=`, `:`
   */
  // const filter = 'abc123'
  /**
   *  Required. Expression that defines what assets fields to use for grouping.
   *  The string value should follow SQL syntax: comma separated list of fields.
   *  For example: "parent,resource_name".
   *  The following fields are supported:
   *  * resource_name
   *  * category
   *  * state
   *  * parent
   *  * severity
   */
  // const groupBy = 'abc123'
  /**
   *  The value returned by the last `GroupFindingsResponse`; indicates
   *  that this is a continuation of a prior `GroupFindings` call, and
   *  that the system should return the next page of data.
   */
  // const pageToken = 'abc123'
  /**
   *  The maximum number of results to return in a single response. Default is
   *  10, minimum is 1, maximum is 1000.
   */
  // const pageSize = 1234

  // Imports the Securitycenter library
  const {SecurityCenterClient} = require('@google-cloud/securitycenter').v2;

  // Instantiates a client
  const securitycenterClient = new SecurityCenterClient();

  async function callGroupFindings() {
    // Construct request
    const request = {
      parent,
      groupBy,
    };

    // Run request
    const iterable = securitycenterClient.groupFindingsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callGroupFindings();
  // [END securitycenter_v2_generated_SecurityCenter_GroupFindings_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
