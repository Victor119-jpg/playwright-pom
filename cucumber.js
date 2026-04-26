const { format } = require("node:path");

module.exports = {
default:{
require: ['steps/**/*.ts'],
requireModule: ['ts-node/register'],
format: ['progress'],
paths: ['features/**/*.feature']
}


};