// Copyright 2023 Google LLC
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

function main() {
  // [START speech_v1p1beta1_generated_Speech_StreamingRecognize_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Provides information to the recognizer that specifies how to process the
   *  request. The first `StreamingRecognizeRequest` message must contain a
   *  `streaming_config`  message.
   */
  // const streamingConfig = {}
  /**
   *  The audio data to be recognized. Sequential chunks of audio data are sent
   *  in sequential `StreamingRecognizeRequest` messages. The first
   *  `StreamingRecognizeRequest` message must not contain `audio_content` data
   *  and all subsequent `StreamingRecognizeRequest` messages must contain
   *  `audio_content` data. The audio bytes must be encoded as specified in
   *  `RecognitionConfig`. Note: as with all bytes fields, proto buffers use a
   *  pure binary representation (not base64). See
   *  content limits (https://cloud.google.com/speech-to-text/quotas#content).
   */
  // const audioContent = Buffer.from('string')

  // Imports the Speech library
  const {SpeechClient} = require('@google-cloud/speech').v1p1beta1;

  // Instantiates a client
  const speechClient = new SpeechClient();

  async function callStreamingRecognize() {
    // Construct request
    const request = {
    };

    // Run request
    const stream = await speechClient.streamingRecognize();
    stream.on('data', (response) => { console.log(response) });
    stream.on('error', (err) => { throw(err) });
    stream.on('end', () => { /* API call completed */ });
    stream.write(request);
    stream.end(); 
  }

  callStreamingRecognize();
  // [END speech_v1p1beta1_generated_Speech_StreamingRecognize_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
