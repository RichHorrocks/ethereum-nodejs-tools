/*
 * Requirements: 
 *  - npm install levelup
 *  - npm install leveldown (required, but not marked as dependency)
 * https://github.com/Level/levelup
 *
 */

 var levelup = require('levelup');
 var db = levelup('~/.ethereum/geth/chaindata');
 
 // The genesis state root.
var root = '12582945fc5ad12c3e7b67c4fc37a68fc0d52d995bb7f7291ff41a2739a7ca16';

// Note: We're doing everything using binary encoding.
db.get(new Buffer(root, 'hex'), {
  encoding: 'binary'
}, function (err, value) {
  console.log(value);
});