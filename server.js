#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({ logRequests: true, captureConsoleLog: true });

// server.use(prerender.browserForceRestart());
// server.use(prerender.blockResources());
// server.use(prerender.addMetaTags());
server.use(prerender.removeScriptTags());
// server.use(prerender.httpHeaders());
// server.use(require('prerender-memory-cache'));

server.start();
