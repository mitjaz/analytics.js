/* eslint quote-props: off */
'use strict';

/*
 Add all integrations you want registered here.
 Integration repos: https://github.com/segment-integrations?utf8=%E2%9C%93&query=analytics.js
 Make sure the integrations added are also installed and saved in the package.json
 */
module.exports = {
  'adroll': require('@segment/analytics.js-integration-adroll'),
  'adwords': require('@segment/analytics.js-integration-adwords'),
  'facebook-pixel': require('@segment/analytics.js-integration-facebook-pixel'),
  'google-analytics': require('@segment/analytics.js-integration-google-analytics'),
  'hubspot': require('@segment/analytics.js-integration-hubspot'),
  'kissmetrics': require('@segment/analytics.js-integration-kissmetrics'),
  'mixpanel': require('@segment/analytics.js-integration-mixpanel'),
  'segmentio': require('@segment/analytics.js-integration-segmentio'),
  'twitter-ads': require('@segment/analytics.js-integration-twitter-ads')
};
