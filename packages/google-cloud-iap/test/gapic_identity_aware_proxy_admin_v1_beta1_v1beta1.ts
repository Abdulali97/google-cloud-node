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
import * as identityawareproxyadminv1beta1Module from '../src';

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

describe('v1beta1.IdentityAwareProxyAdminV1Beta1Client', () => {
  describe('Common methods', () => {
    it('has apiEndpoint', () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client();
      const apiEndpoint = client.apiEndpoint;
      assert.strictEqual(apiEndpoint, 'iap.googleapis.com');
    });

    it('has universeDomain', () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client();
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
          identityawareproxyadminv1beta1Module.v1beta1
            .IdentityAwareProxyAdminV1Beta1Client.servicePath;
        assert.strictEqual(servicePath, 'iap.googleapis.com');
        assert(stub.called);
        stub.restore();
      });

      it('throws DeprecationWarning if static apiEndpoint is used', () => {
        const stub = sinon.stub(process, 'emitWarning');
        const apiEndpoint =
          identityawareproxyadminv1beta1Module.v1beta1
            .IdentityAwareProxyAdminV1Beta1Client.apiEndpoint;
        assert.strictEqual(apiEndpoint, 'iap.googleapis.com');
        assert(stub.called);
        stub.restore();
      });
    }
    it('sets apiEndpoint according to universe domain camelCase', () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {universeDomain: 'example.com'}
        );
      const servicePath = client.apiEndpoint;
      assert.strictEqual(servicePath, 'iap.example.com');
    });

    it('sets apiEndpoint according to universe domain snakeCase', () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {universe_domain: 'example.com'}
        );
      const servicePath = client.apiEndpoint;
      assert.strictEqual(servicePath, 'iap.example.com');
    });
    it('does not allow setting both universeDomain and universe_domain', () => {
      assert.throws(() => {
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {universe_domain: 'example.com', universeDomain: 'example.net'}
        );
      });
    });

    it('has port', () => {
      const port =
        identityawareproxyadminv1beta1Module.v1beta1
          .IdentityAwareProxyAdminV1Beta1Client.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            fallback: true,
          }
        );
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      assert.strictEqual(client.identityAwareProxyAdminV1Beta1Stub, undefined);
      await client.initialize();
      assert(client.identityAwareProxyAdminV1Beta1Stub);
    });

    it('has close method for the initialized client', done => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      assert(client.identityAwareProxyAdminV1Beta1Stub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      assert.strictEqual(client.identityAwareProxyAdminV1Beta1Stub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
      const result = await client.getProjectId();
      assert.strictEqual(result, fakeProjectId);
      assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
      const fakeProjectId = 'fake-project-id';
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
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

  describe('setIamPolicy', () => {
    it('invokes setIamPolicy without error', async () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.v1.SetIamPolicyRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.v1.SetIamPolicyRequest',
        ['resource']
      );
      request.resource = defaultValue1;
      const expectedHeaderRequestParams = `resource=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.v1.Policy()
      );
      client.innerApiCalls.setIamPolicy = stubSimpleCall(expectedResponse);
      const [response] = await client.setIamPolicy(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.setIamPolicy as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.setIamPolicy as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes setIamPolicy without error using callback', async () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.v1.SetIamPolicyRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.v1.SetIamPolicyRequest',
        ['resource']
      );
      request.resource = defaultValue1;
      const expectedHeaderRequestParams = `resource=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.v1.Policy()
      );
      client.innerApiCalls.setIamPolicy =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.setIamPolicy(
          request,
          (
            err?: Error | null,
            result?: protos.google.iam.v1.IPolicy | null
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
      const actualRequest = (
        client.innerApiCalls.setIamPolicy as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.setIamPolicy as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes setIamPolicy with error', async () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.v1.SetIamPolicyRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.v1.SetIamPolicyRequest',
        ['resource']
      );
      request.resource = defaultValue1;
      const expectedHeaderRequestParams = `resource=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.setIamPolicy = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.setIamPolicy(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.setIamPolicy as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.setIamPolicy as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes setIamPolicy with closed client', async () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.v1.SetIamPolicyRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.v1.SetIamPolicyRequest',
        ['resource']
      );
      request.resource = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.setIamPolicy(request), expectedError);
    });
  });

  describe('getIamPolicy', () => {
    it('invokes getIamPolicy without error', async () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.v1.GetIamPolicyRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.v1.GetIamPolicyRequest',
        ['resource']
      );
      request.resource = defaultValue1;
      const expectedHeaderRequestParams = `resource=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.v1.Policy()
      );
      client.innerApiCalls.getIamPolicy = stubSimpleCall(expectedResponse);
      const [response] = await client.getIamPolicy(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.getIamPolicy as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getIamPolicy as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getIamPolicy without error using callback', async () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.v1.GetIamPolicyRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.v1.GetIamPolicyRequest',
        ['resource']
      );
      request.resource = defaultValue1;
      const expectedHeaderRequestParams = `resource=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.v1.Policy()
      );
      client.innerApiCalls.getIamPolicy =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.getIamPolicy(
          request,
          (
            err?: Error | null,
            result?: protos.google.iam.v1.IPolicy | null
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
      const actualRequest = (
        client.innerApiCalls.getIamPolicy as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getIamPolicy as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getIamPolicy with error', async () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.v1.GetIamPolicyRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.v1.GetIamPolicyRequest',
        ['resource']
      );
      request.resource = defaultValue1;
      const expectedHeaderRequestParams = `resource=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.getIamPolicy = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.getIamPolicy(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.getIamPolicy as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.getIamPolicy as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes getIamPolicy with closed client', async () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.v1.GetIamPolicyRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.v1.GetIamPolicyRequest',
        ['resource']
      );
      request.resource = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.getIamPolicy(request), expectedError);
    });
  });

  describe('testIamPermissions', () => {
    it('invokes testIamPermissions without error', async () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.v1.TestIamPermissionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.v1.TestIamPermissionsRequest',
        ['resource']
      );
      request.resource = defaultValue1;
      const expectedHeaderRequestParams = `resource=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.v1.TestIamPermissionsResponse()
      );
      client.innerApiCalls.testIamPermissions =
        stubSimpleCall(expectedResponse);
      const [response] = await client.testIamPermissions(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (
        client.innerApiCalls.testIamPermissions as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.testIamPermissions as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes testIamPermissions without error using callback', async () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.v1.TestIamPermissionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.v1.TestIamPermissionsRequest',
        ['resource']
      );
      request.resource = defaultValue1;
      const expectedHeaderRequestParams = `resource=${defaultValue1}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.iam.v1.TestIamPermissionsResponse()
      );
      client.innerApiCalls.testIamPermissions =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.testIamPermissions(
          request,
          (
            err?: Error | null,
            result?: protos.google.iam.v1.ITestIamPermissionsResponse | null
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
      const actualRequest = (
        client.innerApiCalls.testIamPermissions as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.testIamPermissions as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes testIamPermissions with error', async () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.v1.TestIamPermissionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.v1.TestIamPermissionsRequest',
        ['resource']
      );
      request.resource = defaultValue1;
      const expectedHeaderRequestParams = `resource=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.testIamPermissions = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.testIamPermissions(request), expectedError);
      const actualRequest = (
        client.innerApiCalls.testIamPermissions as SinonStub
      ).getCall(0).args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.testIamPermissions as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes testIamPermissions with closed client', async () => {
      const client =
        new identityawareproxyadminv1beta1Module.v1beta1.IdentityAwareProxyAdminV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.iam.v1.TestIamPermissionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.iam.v1.TestIamPermissionsRequest',
        ['resource']
      );
      request.resource = defaultValue1;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.testIamPermissions(request), expectedError);
    });
  });
});
