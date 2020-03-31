// Copyright 2020 Google LLC
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
import * as recommenderModule from '../src';

import {PassThrough} from 'stream';

import {protobuf} from 'google-gax';

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (instance.constructor as typeof protobuf.Message).toObject(
    instance as protobuf.Message<T>,
    {defaults: true}
  );
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

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v1.RecommenderClient', () => {
  it('has servicePath', () => {
    const servicePath = recommenderModule.v1.RecommenderClient.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint = recommenderModule.v1.RecommenderClient.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port = recommenderModule.v1.RecommenderClient.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client = new recommenderModule.v1.RecommenderClient();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client = new recommenderModule.v1.RecommenderClient({
      fallback: true,
    });
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client = new recommenderModule.v1.RecommenderClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    assert.strictEqual(client.recommenderStub, undefined);
    await client.initialize();
    assert(client.recommenderStub);
  });

  it('has close method', () => {
    const client = new recommenderModule.v1.RecommenderClient({
      credentials: {client_email: 'bogus', private_key: 'bogus'},
      projectId: 'bogus',
    });
    client.close();
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client = new recommenderModule.v1.RecommenderClient({
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
    const client = new recommenderModule.v1.RecommenderClient({
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

  describe('getRecommendation', () => {
    it('invokes getRecommendation without error', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.GetRecommendationRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.recommender.v1.Recommendation()
      );
      client.innerApiCalls.getRecommendation = stubSimpleCall(expectedResponse);
      const [response] = await client.getRecommendation(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.getRecommendation as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes getRecommendation without error using callback', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.GetRecommendationRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.recommender.v1.Recommendation()
      );
      client.innerApiCalls.getRecommendation = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.getRecommendation(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.recommender.v1.IRecommendation | null
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
      assert(
        (client.innerApiCalls.getRecommendation as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes getRecommendation with error', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.GetRecommendationRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.getRecommendation = stubSimpleCall(
        undefined,
        expectedError
      );
      assert.rejects(async () => {
        await client.getRecommendation(request);
      }, expectedError);
      assert(
        (client.innerApiCalls.getRecommendation as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('markRecommendationClaimed', () => {
    it('invokes markRecommendationClaimed without error', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.MarkRecommendationClaimedRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.recommender.v1.Recommendation()
      );
      client.innerApiCalls.markRecommendationClaimed = stubSimpleCall(
        expectedResponse
      );
      const [response] = await client.markRecommendationClaimed(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.markRecommendationClaimed as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes markRecommendationClaimed without error using callback', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.MarkRecommendationClaimedRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.recommender.v1.Recommendation()
      );
      client.innerApiCalls.markRecommendationClaimed = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.markRecommendationClaimed(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.recommender.v1.IRecommendation | null
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
      assert(
        (client.innerApiCalls.markRecommendationClaimed as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes markRecommendationClaimed with error', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.MarkRecommendationClaimedRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.markRecommendationClaimed = stubSimpleCall(
        undefined,
        expectedError
      );
      assert.rejects(async () => {
        await client.markRecommendationClaimed(request);
      }, expectedError);
      assert(
        (client.innerApiCalls.markRecommendationClaimed as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('markRecommendationSucceeded', () => {
    it('invokes markRecommendationSucceeded without error', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.MarkRecommendationSucceededRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.recommender.v1.Recommendation()
      );
      client.innerApiCalls.markRecommendationSucceeded = stubSimpleCall(
        expectedResponse
      );
      const [response] = await client.markRecommendationSucceeded(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.markRecommendationSucceeded as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes markRecommendationSucceeded without error using callback', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.MarkRecommendationSucceededRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.recommender.v1.Recommendation()
      );
      client.innerApiCalls.markRecommendationSucceeded = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.markRecommendationSucceeded(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.recommender.v1.IRecommendation | null
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
      assert(
        (client.innerApiCalls.markRecommendationSucceeded as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes markRecommendationSucceeded with error', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.MarkRecommendationSucceededRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.markRecommendationSucceeded = stubSimpleCall(
        undefined,
        expectedError
      );
      assert.rejects(async () => {
        await client.markRecommendationSucceeded(request);
      }, expectedError);
      assert(
        (client.innerApiCalls.markRecommendationSucceeded as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('markRecommendationFailed', () => {
    it('invokes markRecommendationFailed without error', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.MarkRecommendationFailedRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.recommender.v1.Recommendation()
      );
      client.innerApiCalls.markRecommendationFailed = stubSimpleCall(
        expectedResponse
      );
      const [response] = await client.markRecommendationFailed(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.markRecommendationFailed as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes markRecommendationFailed without error using callback', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.MarkRecommendationFailedRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.recommender.v1.Recommendation()
      );
      client.innerApiCalls.markRecommendationFailed = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.markRecommendationFailed(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.recommender.v1.IRecommendation | null
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
      assert(
        (client.innerApiCalls.markRecommendationFailed as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes markRecommendationFailed with error', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.MarkRecommendationFailedRequest()
      );
      request.name = '';
      const expectedHeaderRequestParams = 'name=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.markRecommendationFailed = stubSimpleCall(
        undefined,
        expectedError
      );
      assert.rejects(async () => {
        await client.markRecommendationFailed(request);
      }, expectedError);
      assert(
        (client.innerApiCalls.markRecommendationFailed as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });
  });

  describe('listRecommendations', () => {
    it('invokes listRecommendations without error', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.ListRecommendationsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.recommender.v1.Recommendation()
        ),
        generateSampleMessage(
          new protos.google.cloud.recommender.v1.Recommendation()
        ),
        generateSampleMessage(
          new protos.google.cloud.recommender.v1.Recommendation()
        ),
      ];
      client.innerApiCalls.listRecommendations = stubSimpleCall(
        expectedResponse
      );
      const [response] = await client.listRecommendations(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.listRecommendations as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listRecommendations without error using callback', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.ListRecommendationsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.recommender.v1.Recommendation()
        ),
        generateSampleMessage(
          new protos.google.cloud.recommender.v1.Recommendation()
        ),
        generateSampleMessage(
          new protos.google.cloud.recommender.v1.Recommendation()
        ),
      ];
      client.innerApiCalls.listRecommendations = stubSimpleCallWithCallback(
        expectedResponse
      );
      const promise = new Promise((resolve, reject) => {
        client.listRecommendations(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.recommender.v1.IRecommendation[] | null
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
      assert(
        (client.innerApiCalls.listRecommendations as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes listRecommendations with error', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.ListRecommendationsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedOptions = {
        otherArgs: {
          headers: {
            'x-goog-request-params': expectedHeaderRequestParams,
          },
        },
      };
      const expectedError = new Error('expected');
      client.innerApiCalls.listRecommendations = stubSimpleCall(
        undefined,
        expectedError
      );
      assert.rejects(async () => {
        await client.listRecommendations(request);
      }, expectedError);
      assert(
        (client.innerApiCalls.listRecommendations as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes listRecommendationsStream without error', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.ListRecommendationsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.recommender.v1.Recommendation()
        ),
        generateSampleMessage(
          new protos.google.cloud.recommender.v1.Recommendation()
        ),
        generateSampleMessage(
          new protos.google.cloud.recommender.v1.Recommendation()
        ),
      ];
      client.descriptors.page.listRecommendations.createStream = stubPageStreamingCall(
        expectedResponse
      );
      const stream = client.listRecommendationsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.recommender.v1.Recommendation[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.recommender.v1.Recommendation) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.listRecommendations.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listRecommendations, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listRecommendations
          .createStream as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('invokes listRecommendationsStream with error', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.ListRecommendationsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listRecommendations.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listRecommendationsStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.recommender.v1.Recommendation[] = [];
        stream.on(
          'data',
          (response: protos.google.cloud.recommender.v1.Recommendation) => {
            responses.push(response);
          }
        );
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      assert.rejects(async () => {
        await promise;
      }, expectedError);
      assert(
        (client.descriptors.page.listRecommendations.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.listRecommendations, request)
      );
      assert.strictEqual(
        (client.descriptors.page.listRecommendations
          .createStream as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listRecommendations without error', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.ListRecommendationsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedResponse = [
        generateSampleMessage(
          new protos.google.cloud.recommender.v1.Recommendation()
        ),
        generateSampleMessage(
          new protos.google.cloud.recommender.v1.Recommendation()
        ),
        generateSampleMessage(
          new protos.google.cloud.recommender.v1.Recommendation()
        ),
      ];
      client.descriptors.page.listRecommendations.asyncIterate = stubAsyncIterationCall(
        expectedResponse
      );
      const responses: protos.google.cloud.recommender.v1.IRecommendation[] = [];
      const iterable = client.listRecommendationsAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (client.descriptors.page.listRecommendations
          .asyncIterate as SinonStub).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listRecommendations
          .asyncIterate as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });

    it('uses async iteration with listRecommendations with error', async () => {
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recommender.v1.ListRecommendationsRequest()
      );
      request.parent = '';
      const expectedHeaderRequestParams = 'parent=';
      const expectedError = new Error('expected');
      client.descriptors.page.listRecommendations.asyncIterate = stubAsyncIterationCall(
        undefined,
        expectedError
      );
      const iterable = client.listRecommendationsAsync(request);
      assert.rejects(async () => {
        const responses: protos.google.cloud.recommender.v1.IRecommendation[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (client.descriptors.page.listRecommendations
          .asyncIterate as SinonStub).getCall(0).args[1],
        request
      );
      assert.strictEqual(
        (client.descriptors.page.listRecommendations
          .asyncIterate as SinonStub).getCall(0).args[2].otherArgs.headers[
          'x-goog-request-params'
        ],
        expectedHeaderRequestParams
      );
    });
  });

  describe('Path templates', () => {
    describe('recommendation', () => {
      const fakePath = '/rendered/path/recommendation';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        recommender: 'recommenderValue',
        recommendation: 'recommendationValue',
      };
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.recommendationPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.recommendationPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('recommendationPath', () => {
        const result = client.recommendationPath(
          'projectValue',
          'locationValue',
          'recommenderValue',
          'recommendationValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.recommendationPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromRecommendationName', () => {
        const result = client.matchProjectFromRecommendationName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.recommendationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromRecommendationName', () => {
        const result = client.matchLocationFromRecommendationName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.recommendationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchRecommenderFromRecommendationName', () => {
        const result = client.matchRecommenderFromRecommendationName(fakePath);
        assert.strictEqual(result, 'recommenderValue');
        assert(
          (client.pathTemplates.recommendationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchRecommendationFromRecommendationName', () => {
        const result = client.matchRecommendationFromRecommendationName(
          fakePath
        );
        assert.strictEqual(result, 'recommendationValue');
        assert(
          (client.pathTemplates.recommendationPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('recommender', () => {
      const fakePath = '/rendered/path/recommender';
      const expectedParameters = {
        project: 'projectValue',
        location: 'locationValue',
        recommender: 'recommenderValue',
      };
      const client = new recommenderModule.v1.RecommenderClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      client.pathTemplates.recommenderPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.recommenderPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('recommenderPath', () => {
        const result = client.recommenderPath(
          'projectValue',
          'locationValue',
          'recommenderValue'
        );
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.recommenderPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromRecommenderName', () => {
        const result = client.matchProjectFromRecommenderName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.recommenderPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchLocationFromRecommenderName', () => {
        const result = client.matchLocationFromRecommenderName(fakePath);
        assert.strictEqual(result, 'locationValue');
        assert(
          (client.pathTemplates.recommenderPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchRecommenderFromRecommenderName', () => {
        const result = client.matchRecommenderFromRecommenderName(fakePath);
        assert.strictEqual(result, 'recommenderValue');
        assert(
          (client.pathTemplates.recommenderPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
