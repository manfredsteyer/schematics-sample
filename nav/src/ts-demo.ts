import * as ts from 'typescript';

function showTree(node: ts.Node, depth: number = 0): void {
    let indent = ''.padEnd(depth*4, ' ');
    console.log(indent + ts.SyntaxKind[node.kind]);
    if (node.getChildCount() === 0) {
        console.log(indent + '    Text: ' + node.getText());
    }

    for(let child of node.getChildren()) {
        showTree(child, depth+1);
    }
}

