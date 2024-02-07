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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as languageserviceModule from '../src';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(
  require('../protos/protos.json')
).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
  let type = root.lookupType(typeName) as protobuf.Type;
  for (const field of fields.slice(0, -1)) {
    type = type.fields[field]?.resolvedType as protobuf.Type;
  }
  return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

describe('v2.LanguageServiceClient', () => {
  describe('Common methods', () => {
    it('has apiEndpoint', () => {
      const client = new languageserviceModule.v2.LanguageServiceClient();
      const apiEndpoint = client.apiEndpoint;
      assert.strictEqual(apiEndpoint, 'language.googleapis.com');
    });

    it('has universeDomain', () => {
      const client = new languageserviceModule.v2.LanguageServiceClient();
      const universeDomain = client.universeDomain;
      assert.strictEqual(universeDomain, 'googleapis.com');
    });

    if (
      typeof process !== 'undefined' &&
      typeof process.emitWarning === 'function'
    ) {
      it('throws DeprecationWarning if static servicePath is used', () => {
        const stub = sinon.stub(process, 'emitWarning');
        const servicePath =
          languageserviceModule.v2.LanguageServiceClient.servicePath;
        assert.strictEqual(servicePath, 'language.googleapis.com');
        assert(stub.called);
        stub.restore();
      });

      it('throws DeprecationWarning if static apiEndpoint is used', () => {
        const stub = sinon.stub(process, 'emitWarning');
        const apiEndpoint =
          languageserviceModule.v2.LanguageServiceClient.apiEndpoint;
        assert.strictEqual(apiEndpoint, 'language.googleapis.com');
        assert(stub.called);
        stub.restore();
      });
    }
    it('sets apiEndpoint according to universe domain camelCase', () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        universeDomain: 'example.com',
      });
      const servicePath = client.apiEndpoint;
      assert.strictEqual(servicePath, 'language.example.com');
    });

    it('sets apiEndpoint according to universe domain snakeCase', () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        universe_domain: 'example.com',
      });
      const servicePath = client.apiEndpoint;
      assert.strictEqual(servicePath, 'language.example.com');
    });
    it('does not allow setting both universeDomain and universe_domain', () => {
      assert.throws(() => {
        new languageserviceModule.v2.LanguageServiceClient({
          universe_domain: 'example.com',
          universeDomain: 'example.net',
        });
      });
    });

    it('has port', () => {
      const port = languageserviceModule.v2.LanguageServiceClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client = new languageserviceModule.v2.LanguageServiceClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        fallback: true,
      });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.languageServiceStub, undefined);
      await client.initialize();
      assert(client.languageServiceStub);
    });

    it('has close method for the initialized client', done => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      assert(client.languageServiceStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      assert.strictEqual(client.languageServiceStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
      const result = await client.getProjectId();
      assert.strictEqual(result, fakeProjectId);
      assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.auth.getProjectId = sinon
        .stub()
        .callsArgWith(0, null, fakeProjectId);
      const promise = new Promise((resolve, reject) => {
        client.getProjectId((err?: Error | null, projectId?: string | null) => {
          if (err) {
            reject(err);
          } else {
            resolve(projectId);
          }
        });
      });
      const result = await promise;
      assert.strictEqual(result, fakeProjectId);
    });
  });

  describe('analyzeSentiment', () => {
    it('invokes analyzeSentiment without error', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.AnalyzeSentimentRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.language.v2.AnalyzeSentimentResponse()
      );
      client.innerApiCalls.analyzeSentiment = stubSimpleCall(expectedResponse);
      const [response] = await client.analyzeSentiment(request);
      assert.deepStrictEqual(response, expectedResponse);
    });

    it('invokes analyzeSentiment without error using callback', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.AnalyzeSentimentRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.language.v2.AnalyzeSentimentResponse()
      );
      client.innerApiCalls.analyzeSentiment =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.analyzeSentiment(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.language.v2.IAnalyzeSentimentResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
    });

    it('invokes analyzeSentiment with error', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.AnalyzeSentimentRequest()
      );
      const expectedError = new Error('expected');
      client.innerApiCalls.analyzeSentiment = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.analyzeSentiment(request), expectedError);
    });

    it('invokes analyzeSentiment with closed client', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.AnalyzeSentimentRequest()
      );
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.analyzeSentiment(request), expectedError);
    });
  });

  describe('analyzeEntities', () => {
    it('invokes analyzeEntities without error', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.AnalyzeEntitiesRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.language.v2.AnalyzeEntitiesResponse()
      );
      client.innerApiCalls.analyzeEntities = stubSimpleCall(expectedResponse);
      const [response] = await client.analyzeEntities(request);
      assert.deepStrictEqual(response, expectedResponse);
    });

    it('invokes analyzeEntities without error using callback', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.AnalyzeEntitiesRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.language.v2.AnalyzeEntitiesResponse()
      );
      client.innerApiCalls.analyzeEntities =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.analyzeEntities(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.language.v2.IAnalyzeEntitiesResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
    });

    it('invokes analyzeEntities with error', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.AnalyzeEntitiesRequest()
      );
      const expectedError = new Error('expected');
      client.innerApiCalls.analyzeEntities = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.analyzeEntities(request), expectedError);
    });

    it('invokes analyzeEntities with closed client', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.AnalyzeEntitiesRequest()
      );
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.analyzeEntities(request), expectedError);
    });
  });

  describe('classifyText', () => {
    it('invokes classifyText without error', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.ClassifyTextRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.language.v2.ClassifyTextResponse()
      );
      client.innerApiCalls.classifyText = stubSimpleCall(expectedResponse);
      const [response] = await client.classifyText(request);
      assert.deepStrictEqual(response, expectedResponse);
    });

    it('invokes classifyText without error using callback', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.ClassifyTextRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.language.v2.ClassifyTextResponse()
      );
      client.innerApiCalls.classifyText =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.classifyText(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.language.v2.IClassifyTextResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
    });

    it('invokes classifyText with error', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.ClassifyTextRequest()
      );
      const expectedError = new Error('expected');
      client.innerApiCalls.classifyText = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.classifyText(request), expectedError);
    });

    it('invokes classifyText with closed client', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.ClassifyTextRequest()
      );
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.classifyText(request), expectedError);
    });
  });

  describe('moderateText', () => {
    it('invokes moderateText without error', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.ModerateTextRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.language.v2.ModerateTextResponse()
      );
      client.innerApiCalls.moderateText = stubSimpleCall(expectedResponse);
      const [response] = await client.moderateText(request);
      assert.deepStrictEqual(response, expectedResponse);
    });

    it('invokes moderateText without error using callback', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.ModerateTextRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.language.v2.ModerateTextResponse()
      );
      client.innerApiCalls.moderateText =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.moderateText(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.language.v2.IModerateTextResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
    });

    it('invokes moderateText with error', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.ModerateTextRequest()
      );
      const expectedError = new Error('expected');
      client.innerApiCalls.moderateText = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.moderateText(request), expectedError);
    });

    it('invokes moderateText with closed client', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.ModerateTextRequest()
      );
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.moderateText(request), expectedError);
    });
  });

  describe('annotateText', () => {
    it('invokes annotateText without error', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.AnnotateTextRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.language.v2.AnnotateTextResponse()
      );
      client.innerApiCalls.annotateText = stubSimpleCall(expectedResponse);
      const [response] = await client.annotateText(request);
      assert.deepStrictEqual(response, expectedResponse);
    });

    it('invokes annotateText without error using callback', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.AnnotateTextRequest()
      );
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.language.v2.AnnotateTextResponse()
      );
      client.innerApiCalls.annotateText =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.annotateText(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.language.v2.IAnnotateTextResponse | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
    });

    it('invokes annotateText with error', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.AnnotateTextRequest()
      );
      const expectedError = new Error('expected');
      client.innerApiCalls.annotateText = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.annotateText(request), expectedError);
    });

    it('invokes annotateText with closed client', async () => {
      const client = new languageserviceModule.v2.LanguageServiceClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.language.v2.AnnotateTextRequest()
      );
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.annotateText(request), expectedError);
    });
  });
});
