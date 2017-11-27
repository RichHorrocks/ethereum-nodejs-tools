/*
 * Requirements: 
 *  - npm install levelup
 *  - npm install leveldown (required, but not marked as dependency)
 *  - npm install rlp
 *  - npm install merkle-patricia-tree
 * https://github.com/Level/levelup
 *
 * Genesis details can be found at 
 * https://github.com/ethereum/go-ethereum/blob/
 *   922c1f8f9f7763948da6ed755abd6e1fcaca2cac/tests/
 *   files/BasicTests/genesishashestest.json#L2
 */

var levelup = require('levelup');
var rlp = require('rlp');
var trie = require('merkle-patricia-tree');
var db = levelup('chaindata');

// The genesis state root.
var stateRoot = 
  'd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544';

var stateTrie = new trie(db, new Buffer(stateRoot, 'hex'));

// Note: We're doing everything using binary encoding.
db.get(new Buffer(stateRoot, 'hex'), {
    encoding: 'binary'
}, function (err, value) {
    console.log("Printing the entry for the state root: ");
    console.log(rlp.decode(value));
});

// Gav's address.
var gav = new Buffer('8a40bfaa73256b60764c1bf40675a99083efb075', 'hex');

trie.get(gav, function (err, val) {
  console.log("Printing the contents of Gav's address");
  console.log(rlp.decode(val));
});
