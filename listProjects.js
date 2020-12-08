const discovery = require('./discovery');

discovery.listProjects({})
  .then(v => {
    console.log(v.result);
  })
  .catch(e => {
    console.log('error:', e);
  });
