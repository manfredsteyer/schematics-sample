"use strict";
exports.__esModule = true;
var ts = require("typescript");
var fs = require("fs");
function showTree(node, indent) {
    if (indent === void 0) { indent = '    '; }
    console.log(indent + ts.SyntaxKind[node.kind]);
    if (node.getChildCount() === 0) {
        console.log(indent + '    Text: ' + node.getText());
    }
    for (var _i = 0, _a = node.getChildren(); _i < _a.length; _i++) {
        var child = _a[_i];
        showTree(child, indent + '    ');
    }
}
var buffer = fs.readFileSync('demo.ts');
var content = buffer.toString('utf-8');
var node = ts.createSourceFile('demo.ts', content, ts.ScriptTarget.Latest, true);
showTree(node);
