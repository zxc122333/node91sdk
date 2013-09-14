var EventEmitter = require('event').EventEmitter,
    util = require('util'),
    http = require('http'),
    request = require("request"),
    md5 = require('MD5');

/**
 *
 * @param config
 * @constructor
 */
var SDK = function(config){
    this.config = config || {};
    EventEmitter.call(this);
}
util.inherits(SDK,EventEmitter);

SDK.prototype.listen = function(port){

}


SDK.prototype.close = function(){

}