module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        project: [
          'tsconfig.*?.json'
          // "e2e/tsconfig.json"
        ],
        createDefaultProgram: true
      },
      extends: ['plugin:@angular-eslint/recommended', 'plugin:prettier/recommended']
      // rules: {
      //   ...
      // }
    },
    {
      files: ['*.component.html'],
      extends: ['plugin:@angular-eslint/template/recommended', 'plugin:prettier/recommended'],
      rules: {
        'max-len': ['error', { code: 140 }]
      }
    },
    {
      files: ['*.component.ts', '*.module.ts'],
      extends: ['plugin:@angular-eslint/template/process-inline-templates', 'plugin:prettier/recommended']
    }
  ]
};