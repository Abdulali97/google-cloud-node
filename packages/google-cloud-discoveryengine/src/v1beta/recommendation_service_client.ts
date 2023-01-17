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

/* global window */
import type * as gax from 'google-gax';
import type {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1beta/recommendation_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './recommendation_service_client_config.json';
const version = require('../../../package.json').version;

/**
 *  Service for making recommendations.
 * @class
 * @memberof v1beta
 */
export class RecommendationServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  recommendationServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of RecommendationServiceClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean | "rest"} [options.fallback] - Use HTTP fallback mode.
   *     Pass "rest" to use HTTP/1.1 REST API instead of gRPC.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
   *     need to avoid loading the default gRPC version and want to use the fallback
   *     HTTP implementation. Load only fallback version and pass it to the constructor:
   *     ```
   *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
   *     const client = new RecommendationServiceClient({fallback: 'rest'}, gax);
   *     ```
   */
  constructor(
    opts?: ClientOptions,
    gaxInstance?: typeof gax | typeof gax.fallback
  ) {
    // Ensure that options include all the required fields.
    const staticMembers = this
      .constructor as typeof RecommendationServiceClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(
      opts?.servicePath || opts?.apiEndpoint
    );
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // Request numeric enum values if REST transport is used.
    opts.numericEnums = true;

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Load google-gax module synchronously if needed
    if (!gaxInstance) {
      gaxInstance = require('google-gax') as typeof gax;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gaxInstance.fallback : gaxInstance;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest') {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      documentPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/dataStores/{data_store}/branches/{branch}/documents/{document}'
      ),
      servingConfigPathTemplate: new this._gaxModule.PathTemplate(
        'projects/{project}/locations/{location}/dataStores/{data_store}/servingConfigs/{serving_config}'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.discoveryengine.v1beta.RecommendationService',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = this._gaxModule.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.recommendationServiceStub) {
      return this.recommendationServiceStub;
    }

    // Put together the "service stub" for
    // google.cloud.discoveryengine.v1beta.RecommendationService.
    this.recommendationServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.discoveryengine.v1beta.RecommendationService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.discoveryengine.v1beta
            .RecommendationService,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const recommendationServiceStubMethods = ['recommend'];
    for (const methodName of recommendationServiceStubMethods) {
      const callPromise = this.recommendationServiceStub.then(
        stub =>
          (...args: Array<{}>) => {
            if (this._terminated) {
              return Promise.reject('The client has already been closed.');
            }
            const func = stub[methodName];
            return func.apply(stub, args);
          },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.recommendationServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'discoveryengine.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'discoveryengine.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return ['https://www.googleapis.com/auth/cloud-platform'];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  /**
   * Makes a recommendation, which requires a contextual user event.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.servingConfig
   *   Required. Full resource name of the format:
   *   projects/* /locations/global/dataStores/* /servingConfigs/*
   *
   *   Before you can request recommendations from your model, you must create at
   *   least one serving config  for it.
   * @param {google.cloud.discoveryengine.v1beta.UserEvent} request.userEvent
   *   Required. Context about the user, what they are looking at and what action
   *   they took to trigger the Recommend request. Note that this user event
   *   detail won't be ingested to userEvent logs. Thus, a separate userEvent
   *   write request is required for event logging.
   *
   *   Don't set
   *   {@link google.cloud.discoveryengine.v1beta.UserEvent.user_pseudo_id|UserEvent.user_pseudo_id}
   *   or
   *   {@link google.cloud.discoveryengine.v1beta.UserInfo.user_id|UserEvent.user_info.user_id}
   *   to the same fixed ID for different users. If you are trying to receive
   *   non-personalized recommendations (not recommended; this can negatively
   *   impact model performance), instead set
   *   {@link google.cloud.discoveryengine.v1beta.UserEvent.user_pseudo_id|UserEvent.user_pseudo_id}
   *   to a random unique ID and leave
   *   {@link google.cloud.discoveryengine.v1beta.UserInfo.user_id|UserEvent.user_info.user_id}
   *   unset.
   * @param {number} request.pageSize
   *   Maximum number of results to return. Set this property
   *   to the number of recommendation results needed. If zero, the service will
   *   choose a reasonable default. The maximum allowed value is 100. Values
   *   above 100 will be coerced to 100.
   * @param {string} request.filter
   *   Filter for restricting recommendation results with a length limit of 5,000
   *   characters. Currently, only filter expressions on the `filter_tags`
   *   attribute is supported.
   *
   *
   *   Examples:
   *
   *    * (filter_tags: ANY("Red", "Blue") OR filter_tags: ANY("Hot", "Cold"))
   *    * (filter_tags: ANY("Red", "Blue")) AND NOT (filter_tags: ANY("Green"))
   *
   *   If your filter blocks all results, the API will return generic
   *   (unfiltered) popular Documents. If you only want results strictly matching
   *   the filters, set `strictFiltering` to True in
   *   {@link google.cloud.discoveryengine.v1beta.RecommendRequest.params|RecommendRequest.params}
   *   to receive empty results instead.
   *
   *   Note that the API will never return Documents with storageStatus of
   *   "EXPIRED" or "DELETED" regardless of filter choices.
   * @param {boolean} request.validateOnly
   *   Use validate only mode for this recommendation query. If set to true, a
   *   fake model will be used that returns arbitrary Document IDs.
   *   Note that the validate only mode should only be used for testing the API,
   *   or if the model is not ready.
   * @param {number[]} request.params
   *   Additional domain specific parameters for the recommendations.
   *
   *   Allowed values:
   *
   *   * `returnDocument`: Boolean. If set to true, the associated Document
   *      object will be returned in
   *      {@link RecommendationResult.document|RecommendResponse.results.document}.
   *   * `returnScore`: Boolean. If set to true, the recommendation 'score'
   *      corresponding to each returned Document will be set in
   *      {@link RecommendationResult.metadata|RecommendResponse.results.metadata}. The
   *      given 'score' indicates the probability of a Document conversion given
   *      the user's context and history.
   *   * `strictFiltering`: Boolean. True by default. If set to false, the service
   *      will return generic (unfiltered) popular Documents instead of empty if
   *      your filter blocks all recommendation results.
   *   * `diversityLevel`: String. Default empty. If set to be non-empty, then
   *      it needs to be one of:
   *      *  'no-diversity'
   *      *  'low-diversity'
   *      *  'medium-diversity'
   *      *  'high-diversity'
   *      *  'auto-diversity'
   *      This gives request-level control and adjusts recommendation results
   *      based on Document category.
   * @param {number[]} request.userLabels
   *   The user labels applied to a resource must meet the following requirements:
   *
   *   * Each resource can have multiple labels, up to a maximum of 64.
   *   * Each label must be a key-value pair.
   *   * Keys have a minimum length of 1 character and a maximum length of 63
   *     characters and cannot be empty. Values can be empty and have a maximum
   *     length of 63 characters.
   *   * Keys and values can contain only lowercase letters, numeric characters,
   *     underscores, and dashes. All characters must use UTF-8 encoding, and
   *     international characters are allowed.
   *   * The key portion of a label must be unique. However, you can use the same
   *     key with multiple resources.
   *   * Keys must start with a lowercase letter or international character.
   *
   *   See [Google Cloud
   *   Document](https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements)
   *   for more details.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [RecommendResponse]{@link google.cloud.discoveryengine.v1beta.RecommendResponse}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1beta/recommendation_service.recommend.js</caption>
   * region_tag:discoveryengine_v1beta_generated_RecommendationService_Recommend_async
   */
  recommend(
    request?: protos.google.cloud.discoveryengine.v1beta.IRecommendRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.discoveryengine.v1beta.IRecommendResponse,
      protos.google.cloud.discoveryengine.v1beta.IRecommendRequest | undefined,
      {} | undefined
    ]
  >;
  recommend(
    request: protos.google.cloud.discoveryengine.v1beta.IRecommendRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.discoveryengine.v1beta.IRecommendResponse,
      | protos.google.cloud.discoveryengine.v1beta.IRecommendRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  recommend(
    request: protos.google.cloud.discoveryengine.v1beta.IRecommendRequest,
    callback: Callback<
      protos.google.cloud.discoveryengine.v1beta.IRecommendResponse,
      | protos.google.cloud.discoveryengine.v1beta.IRecommendRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  recommend(
    request?: protos.google.cloud.discoveryengine.v1beta.IRecommendRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.discoveryengine.v1beta.IRecommendResponse,
          | protos.google.cloud.discoveryengine.v1beta.IRecommendRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.discoveryengine.v1beta.IRecommendResponse,
      | protos.google.cloud.discoveryengine.v1beta.IRecommendRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.discoveryengine.v1beta.IRecommendResponse,
      protos.google.cloud.discoveryengine.v1beta.IRecommendRequest | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        serving_config: request.servingConfig ?? '',
      });
    this.initialize();
    return this.innerApiCalls.recommend(request, options, callback);
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified document resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} data_store
   * @param {string} branch
   * @param {string} document
   * @returns {string} Resource name string.
   */
  documentPath(
    project: string,
    location: string,
    dataStore: string,
    branch: string,
    document: string
  ) {
    return this.pathTemplates.documentPathTemplate.render({
      project: project,
      location: location,
      data_store: dataStore,
      branch: branch,
      document: document,
    });
  }

  /**
   * Parse the project from Document resource.
   *
   * @param {string} documentName
   *   A fully-qualified path representing Document resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromDocumentName(documentName: string) {
    return this.pathTemplates.documentPathTemplate.match(documentName).project;
  }

  /**
   * Parse the location from Document resource.
   *
   * @param {string} documentName
   *   A fully-qualified path representing Document resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromDocumentName(documentName: string) {
    return this.pathTemplates.documentPathTemplate.match(documentName).location;
  }

  /**
   * Parse the data_store from Document resource.
   *
   * @param {string} documentName
   *   A fully-qualified path representing Document resource.
   * @returns {string} A string representing the data_store.
   */
  matchDataStoreFromDocumentName(documentName: string) {
    return this.pathTemplates.documentPathTemplate.match(documentName)
      .data_store;
  }

  /**
   * Parse the branch from Document resource.
   *
   * @param {string} documentName
   *   A fully-qualified path representing Document resource.
   * @returns {string} A string representing the branch.
   */
  matchBranchFromDocumentName(documentName: string) {
    return this.pathTemplates.documentPathTemplate.match(documentName).branch;
  }

  /**
   * Parse the document from Document resource.
   *
   * @param {string} documentName
   *   A fully-qualified path representing Document resource.
   * @returns {string} A string representing the document.
   */
  matchDocumentFromDocumentName(documentName: string) {
    return this.pathTemplates.documentPathTemplate.match(documentName).document;
  }

  /**
   * Return a fully-qualified servingConfig resource name string.
   *
   * @param {string} project
   * @param {string} location
   * @param {string} data_store
   * @param {string} serving_config
   * @returns {string} Resource name string.
   */
  servingConfigPath(
    project: string,
    location: string,
    dataStore: string,
    servingConfig: string
  ) {
    return this.pathTemplates.servingConfigPathTemplate.render({
      project: project,
      location: location,
      data_store: dataStore,
      serving_config: servingConfig,
    });
  }

  /**
   * Parse the project from ServingConfig resource.
   *
   * @param {string} servingConfigName
   *   A fully-qualified path representing ServingConfig resource.
   * @returns {string} A string representing the project.
   */
  matchProjectFromServingConfigName(servingConfigName: string) {
    return this.pathTemplates.servingConfigPathTemplate.match(servingConfigName)
      .project;
  }

  /**
   * Parse the location from ServingConfig resource.
   *
   * @param {string} servingConfigName
   *   A fully-qualified path representing ServingConfig resource.
   * @returns {string} A string representing the location.
   */
  matchLocationFromServingConfigName(servingConfigName: string) {
    return this.pathTemplates.servingConfigPathTemplate.match(servingConfigName)
      .location;
  }

  /**
   * Parse the data_store from ServingConfig resource.
   *
   * @param {string} servingConfigName
   *   A fully-qualified path representing ServingConfig resource.
   * @returns {string} A string representing the data_store.
   */
  matchDataStoreFromServingConfigName(servingConfigName: string) {
    return this.pathTemplates.servingConfigPathTemplate.match(servingConfigName)
      .data_store;
  }

  /**
   * Parse the serving_config from ServingConfig resource.
   *
   * @param {string} servingConfigName
   *   A fully-qualified path representing ServingConfig resource.
   * @returns {string} A string representing the serving_config.
   */
  matchServingConfigFromServingConfigName(servingConfigName: string) {
    return this.pathTemplates.servingConfigPathTemplate.match(servingConfigName)
      .serving_config;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.recommendationServiceStub && !this._terminated) {
      return this.recommendationServiceStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
