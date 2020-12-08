const
  DiscoveryV2 = require('ibm-watson/discovery/v2'),
  { IamAuthenticator } = require('ibm-watson/auth');

const discovery = new DiscoveryV2({
  version: '2019-11-22',
  authenticator: new IamAuthenticator({ apikey: 'DbDiiuR2G8lnDBRcn-FArJ-8GAOc8JOrMNJeWbzCghCK' }),
  serviceUrl: 'https://api.jp-tok.discovery.watson.cloud.ibm.com/instances/5d58413c-282f-4793-a7d8-740782f6aad3',
  headers: { 'X-Watson-Learning-Opt-Out': 'true' }
});

module.exports = discovery;