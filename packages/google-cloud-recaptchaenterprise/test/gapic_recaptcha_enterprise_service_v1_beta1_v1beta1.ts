// Copyright 2022 Google LLC
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
import * as recaptchaenterpriseservicev1beta1Module from '../src';

import {protobuf} from 'google-gax';

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

describe('v1beta1.RecaptchaEnterpriseServiceV1Beta1Client', () => {
  it('has servicePath', () => {
    const servicePath =
      recaptchaenterpriseservicev1beta1Module.v1beta1
        .RecaptchaEnterpriseServiceV1Beta1Client.servicePath;
    assert(servicePath);
  });

  it('has apiEndpoint', () => {
    const apiEndpoint =
      recaptchaenterpriseservicev1beta1Module.v1beta1
        .RecaptchaEnterpriseServiceV1Beta1Client.apiEndpoint;
    assert(apiEndpoint);
  });

  it('has port', () => {
    const port =
      recaptchaenterpriseservicev1beta1Module.v1beta1
        .RecaptchaEnterpriseServiceV1Beta1Client.port;
    assert(port);
    assert(typeof port === 'number');
  });

  it('should create a client with no option', () => {
    const client =
      new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client();
    assert(client);
  });

  it('should create a client with gRPC fallback', () => {
    const client =
      new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
        {
          fallback: true,
        }
      );
    assert(client);
  });

  it('has initialize method and supports deferred initialization', async () => {
    const client =
      new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
    assert.strictEqual(client.recaptchaEnterpriseServiceV1Beta1Stub, undefined);
    await client.initialize();
    assert(client.recaptchaEnterpriseServiceV1Beta1Stub);
  });

  it('has close method for the initialized client', done => {
    const client =
      new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
    client.initialize();
    assert(client.recaptchaEnterpriseServiceV1Beta1Stub);
    client.close().then(() => {
      done();
    });
  });

  it('has close method for the non-initialized client', done => {
    const client =
      new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
        {
          credentials: {client_email: 'bogus', private_key: 'bogus'},
          projectId: 'bogus',
        }
      );
    assert.strictEqual(client.recaptchaEnterpriseServiceV1Beta1Stub, undefined);
    client.close().then(() => {
      done();
    });
  });

  it('has getProjectId method', async () => {
    const fakeProjectId = 'fake-project-id';
    const client =
      new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
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
      new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
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

  describe('createAssessment', () => {
    it('invokes createAssessment without error', async () => {
      const client =
        new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest()
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
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.recaptchaenterprise.v1beta1.Assessment()
      );
      client.innerApiCalls.createAssessment = stubSimpleCall(expectedResponse);
      const [response] = await client.createAssessment(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.createAssessment as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createAssessment without error using callback', async () => {
      const client =
        new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest()
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
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.recaptchaenterprise.v1beta1.Assessment()
      );
      client.innerApiCalls.createAssessment =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.createAssessment(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.recaptchaenterprise.v1beta1.IAssessment | null
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
        (client.innerApiCalls.createAssessment as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes createAssessment with error', async () => {
      const client =
        new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest()
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
      client.innerApiCalls.createAssessment = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.createAssessment(request), expectedError);
      assert(
        (client.innerApiCalls.createAssessment as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes createAssessment with closed client', async () => {
      const client =
        new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recaptchaenterprise.v1beta1.CreateAssessmentRequest()
      );
      request.parent = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.createAssessment(request), expectedError);
    });
  });

  describe('annotateAssessment', () => {
    it('invokes annotateAssessment without error', async () => {
      const client =
        new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest()
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
        new protos.google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse()
      );
      client.innerApiCalls.annotateAssessment =
        stubSimpleCall(expectedResponse);
      const [response] = await client.annotateAssessment(request);
      assert.deepStrictEqual(response, expectedResponse);
      assert(
        (client.innerApiCalls.annotateAssessment as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes annotateAssessment without error using callback', async () => {
      const client =
        new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest()
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
        new protos.google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentResponse()
      );
      client.innerApiCalls.annotateAssessment =
        stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.annotateAssessment(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.recaptchaenterprise.v1beta1.IAnnotateAssessmentResponse | null
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
        (client.innerApiCalls.annotateAssessment as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions /*, callback defined above */)
      );
    });

    it('invokes annotateAssessment with error', async () => {
      const client =
        new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest()
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
      client.innerApiCalls.annotateAssessment = stubSimpleCall(
        undefined,
        expectedError
      );
      await assert.rejects(client.annotateAssessment(request), expectedError);
      assert(
        (client.innerApiCalls.annotateAssessment as SinonStub)
          .getCall(0)
          .calledWith(request, expectedOptions, undefined)
      );
    });

    it('invokes annotateAssessment with closed client', async () => {
      const client =
        new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.recaptchaenterprise.v1beta1.AnnotateAssessmentRequest()
      );
      request.name = '';
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.annotateAssessment(request), expectedError);
    });
  });

  describe('Path templates', () => {
    describe('assessment', () => {
      const fakePath = '/rendered/path/assessment';
      const expectedParameters = {
        project: 'projectValue',
        assessment: 'assessmentValue',
      };
      const client =
        new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      client.pathTemplates.assessmentPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.assessmentPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('assessmentPath', () => {
        const result = client.assessmentPath('projectValue', 'assessmentValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.assessmentPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromAssessmentName', () => {
        const result = client.matchProjectFromAssessmentName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.assessmentPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });

      it('matchAssessmentFromAssessmentName', () => {
        const result = client.matchAssessmentFromAssessmentName(fakePath);
        assert.strictEqual(result, 'assessmentValue');
        assert(
          (client.pathTemplates.assessmentPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });

    describe('project', () => {
      const fakePath = '/rendered/path/project';
      const expectedParameters = {
        project: 'projectValue',
      };
      const client =
        new recaptchaenterpriseservicev1beta1Module.v1beta1.RecaptchaEnterpriseServiceV1Beta1Client(
          {
            credentials: {client_email: 'bogus', private_key: 'bogus'},
            projectId: 'bogus',
          }
        );
      client.initialize();
      client.pathTemplates.projectPathTemplate.render = sinon
        .stub()
        .returns(fakePath);
      client.pathTemplates.projectPathTemplate.match = sinon
        .stub()
        .returns(expectedParameters);

      it('projectPath', () => {
        const result = client.projectPath('projectValue');
        assert.strictEqual(result, fakePath);
        assert(
          (client.pathTemplates.projectPathTemplate.render as SinonStub)
            .getCall(-1)
            .calledWith(expectedParameters)
        );
      });

      it('matchProjectFromProjectName', () => {
        const result = client.matchProjectFromProjectName(fakePath);
        assert.strictEqual(result, 'projectValue');
        assert(
          (client.pathTemplates.projectPathTemplate.match as SinonStub)
            .getCall(-1)
            .calledWith(fakePath)
        );
      });
    });
  });
});
