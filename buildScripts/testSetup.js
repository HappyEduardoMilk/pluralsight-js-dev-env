// This file isn't transpiled, so must use CommonJS and ES5
/* eslint-disable import/no-extraneous-dependencies, func-names, space-before-function-paren */

// Register babel to transpile before our test run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand.
require.extensions['.css'] = function() {};
