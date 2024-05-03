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
  // [START dataplex_v1_generated_CatalogService_ListEntries_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the parent Entry Group:
   *  `projects/{project}/locations/{location}/entryGroups/{entry_group}`.
   */
  // const parent = 'abc123'
  /**
   */
  // const pageSize = 1234
  /**
   *  Optional. The pagination token returned by a previous request.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. A filter on the entries to return.
   *  Filters are case-sensitive.
   *  The request can be filtered by the following fields:
   *  entry_type, entry_source.display_name.
   *  The comparison operators are =, !=, <, >, <=, >= (strings are compared
   *  according to lexical order)
   *  The logical operators AND, OR, NOT can be used
   *  in the filter. Wildcard "*" can be used, but for entry_type the full
   *  project id or number needs to be provided. Example filter expressions:
   *  "entry_source.display_name=AnExampleDisplayName"
   *  "entry_type=projects/example-project/locations/global/entryTypes/example-entry_type"
   *  "entry_type=projects/example-project/locations/us/entryTypes/a* OR
   *   entry_type=projects/another-project/locations/*"
   *  "NOT entry_source.display_name=AnotherExampleDisplayName"
   */
  // const filter = 'abc123'

  // Imports the Dataplex library
  const {CatalogServiceClient} = require('@google-cloud/dataplex').v1;

  // Instantiates a client
  const dataplexClient = new CatalogServiceClient();

  async function callListEntries() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = dataplexClient.listEntriesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListEntries();
  // [END dataplex_v1_generated_CatalogService_ListEntries_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
