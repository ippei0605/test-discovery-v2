const discovery = require('./discovery');

discovery.listCollections({
  projectId: '9e143dd8-1dea-44ac-a34c-36f58d3f094b'
})
  .then(v => {
    console.log(v.result);
  })
  .catch(e => {
    console.log('error:', e);
  });
