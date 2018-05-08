import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';


export function helloWorld(options: any): Rule {
  
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info('Manfred was here ...');
    tree.create('hello.txt', 'Hello World!');
    return tree;
  };
  
}
