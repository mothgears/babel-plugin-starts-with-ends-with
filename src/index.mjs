export default function ({ types: t }) {
  return {
    visitor: {
      CallExpression(path) {
        
        const callee = path.node.callee;

        if (
            t.isMemberExpression(callee, { computed: false }) &&
            t.isIdentifier(callee.property, { name: "startsWith" })
        ) {
          callee.property.name = 'indexOf';
          path.replaceWith(t.binaryExpression("===", path.node, t.numericLiteral(0)));
        }

        if (
            t.isMemberExpression(callee, { computed: false }) &&
            t.isIdentifier(callee.property, { name: "endsWith" })
        ) {
          const args = path.node.arguments;
          callee.property.name = 'slice';
          path.replaceWith(t.binaryExpression("===", path.node, args[0]));
          args[0] = t.unaryExpression("-", t.memberExpression(args[0], t.identifier('length')));
        }
      }
    }
  };
}
