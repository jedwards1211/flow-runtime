"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var input = exports.input = "\n  import types from \"flow-runtime\";\n  type Demo = number;\n";

var expected = exports.expected = "\n  import types from \"flow-runtime\";\n  const Demo = types.type(\"Demo\", types.number());\n";