const discovery = require('./discovery');

discovery.query({
  projectId: '9e143dd8-1dea-44ac-a34c-36f58d3f094b',
  collectionId: 'dc22fb00-79dd-82d3-0000-0176429ca29f',
  naturalLanguageQuery: '第四紋',
  //highlight: true,
  //passages: { enabled: false },
})
  .then(v => {
    console.log(JSON.stringify(v.result, undefined, 2));
  })
  .catch(e => {
    console.log('error:', e);
  });
