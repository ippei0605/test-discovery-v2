const discovery = require('./discovery');

discovery.getEnrichment({
  projectId: '9e143dd8-1dea-44ac-a34c-36f58d3f094b',
  enrichmentId: "701db916-fc83-57ab-0000-000000000017"
})
  .then(v => {
    console.log(JSON.stringify(v.result, undefined, 2));
  })
  .catch(e => {
    console.log('error:', e);
  });
