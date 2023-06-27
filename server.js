#!/usr/bin/env node
var prerender = require('./lib');

/**
 * use prod. options from here:
 * https://github.com/prerender/prerender/pull/748
 *
 * test chrome startup on MacOS:
 * /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --remote-debugging-port=9922 --disable-dev-shm-usage --hide-scrollbars
 */
var server = prerender({
    logRequests: true,
    captureConsoleLog: true,
    pageLoadTimeout: 60 * 1000,
    chromeFlags: [
        '--no-sandbox',
        '--headless',
        '--disable-gpu',
        '--remote-debugging-port=9222',
        '--disable-dev-shm-usage',
        '--hide-scrollbars',
        // '--enable-logging',
        // '--v=1',
        // '--user-data-dir=/home/jirka/chrome-profile' // chrome logs will be saved here
    ],
});

// server.use(prerender.browserForceRestart());
// server.use(prerender.blockResources());
// server.use(prerender.addMetaTags());
server.use(prerender.removeScriptTags());
// server.use(prerender.httpHeaders());
// server.use(require('prerender-memory-cache'));

server.start();
