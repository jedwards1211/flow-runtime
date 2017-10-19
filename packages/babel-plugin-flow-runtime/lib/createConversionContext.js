'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createConversionContext;

var _ConversionContext = require('./ConversionContext');

var _ConversionContext2 = _interopRequireDefault(_ConversionContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createConversionContext(options) {

  var context = new _ConversionContext2.default();

  context.shouldAssert = options.assert === undefined ? process.env.NODE_ENV === 'development' : Boolean(options.assert);

  context.shouldWarn = options.warn ? true : false;

  if ('decorate' in options) {
    console.warn('Warning: "decorate" option for babel-plugin-flow-runtime is now called "annotate", support for "decorate" will be removed in a future version.');
    if (!('annotate' in options)) {
      options.annotate = options.decorate;
    }
  }

  context.shouldAnnotate = options.annotate === undefined ? true : Boolean(options.annotate);

  context.shouldGenerateReifiedOnly = options.generateReifiedOnly === undefined ? false : Boolean(options.generateReifiedOnly);

  if ('suppressComments' in options && Array.isArray(options.suppressComments)) {
    context.suppressCommentPatterns = options.suppressComments.map(function (regexString) {
      return new RegExp(regexString);
    });
  }

  if ('suppressTypes' in options && Array.isArray(options.suppressTypes)) {
    context.suppressTypeNames = options.suppressTypes;
  }

  return context;
}