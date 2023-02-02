'use strict';

const fs = require('fs');
const ttf2woff = require('../');
const { join } = require('path');

const src = new Uint8Array(fs.readFileSync(join(__dirname, '../', 'fixtures', 'test.ttf')));
const oldWoff = new Uint8Array(fs.readFileSync(join(__dirname, '../', 'fixtures', 'test.woff')));

const newWoff = ttf2woff(src, { compressor: 'fflate' });
fs.writeFileSync(join(__dirname, '../', 'fixtures', 'test-fflate.woff'), newWoff);

console.info('File Size');
console.info('oldWoff(pako)  : ', oldWoff.length);
console.info('newWoff(fflate): ', newWoff.length);
