// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import 'angular';
import 'angular-mocks/angular-mocks';

const contextSrc = require.context('./src', true, /\.js$/);
const contextExamples = require.context('./examples', true, /\.js$/);

contextSrc.keys().forEach(contextSrc);
contextExamples.keys().forEach(contextExamples);
