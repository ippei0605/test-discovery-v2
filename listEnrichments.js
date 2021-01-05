const discovery = require('./discovery');

discovery.listEnrichments({
  projectId: '9e143dd8-1dea-44ac-a34c-36f58d3f094b',
})
  .then(v => {
    console.log(JSON.stringify(v.result, undefined, 2));
  })
  .catch(e => {
    console.log('error:', e);
  });
