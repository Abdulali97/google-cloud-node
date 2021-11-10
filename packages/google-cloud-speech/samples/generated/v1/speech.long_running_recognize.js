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

function main(config, audio) {
  // [START speech_v1_generated_Speech_LongRunningRecognize_async]
  /**
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Provides information to the recognizer that specifies how to
   *  process the request.
   */
  // const config = {}
  /**
   *  Required. The audio data to be recognized.
   */
  // const audio = {}
  /**
   *  Optional. Specifies an optional destination for the recognition results.
   */
  // const outputConfig = {}

  // Imports the Speech library
  const {SpeechClient} = require('@google-cloud/speech').v1;

  // Instantiates a client
  const speechClient = new SpeechClient();

  async function callLongRunningRecognize() {
    // Construct request
    const request = {
      config,
      audio,
    };

    // Run request
    const [operation] = await speechClient.longRunningRecognize(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callLongRunningRecognize();
  // [END speech_v1_generated_Speech_LongRunningRecognize_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
