module.exports = {
  rules: {
    'no-iife': function (context) {
      return {
        CallExpression(node) {
          const callee = node.callee;
          if (
            callee.type === 'FunctionExpression' ||
            callee.type === 'ArrowFunctionExpression' ||
            (callee.type === 'MemberExpression' &&
              callee.object.type === 'FunctionExpression')
          ) {
            context.report({
              node,
              message:
                'Immediately-invoked function expressions (IIFE) are not allowed',
            });
          }
        },
      };
    },
  },
};
