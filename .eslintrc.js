module.exports = {
  /**
   * See packages/eslint-plugin/src/configs/README.md
   * for what this recommended config contains.
   */
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ["plugin:@angular-eslint/recommended"],
  rules: {
    // ORIGINAL tslint.json -> "directive-selector": [true, "attribute", "app", "camelCase"],
    "@angular-eslint/directive-selector": [
      "error",
      {
        type: "attribute",
        prefix: "app",
        style: "camelCase",
      },
    ],
    // ORIGINAL tslint.json -> "component-selector": [true, "element", "app", "kebab-case"],
    "@angular-eslint/component-selector": [
      "error",
      {
        type: "element",
        prefix: "app",
        style: "kebab-case",
      },
    ],
    "@typescript-eslint/lines-between-class-members": "off",
  },
  overrides: [
    /**
     * This extra piece of configuration is only necessary if you make use of inline
     * templates within Component metadata, e.g.:
     */
    {
      files: [
        "*.component.ts",
        "*.model.ts",
        "*.directive.ts",
        "*.module.ts",
        "*.service.ts",
        "*.routing.ts",
        "*.mock.ts",
        "*.actions.ts",
        "*.reducer.ts",
        "*.selectors.ts",
        "*.effects.ts",
        "*.guard.ts",
        "*.initializer.ts",
        "*.interceptor.ts",
        "*.pipe.ts",
        "*.messages.ts",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        project: "tsconfig.app.json",
        createDefaultProgram: true,
      },
      plugins: ["@angular-eslint/template"],
      processor: "@angular-eslint/template/extract-inline-html",
    },
    {
      files: ["*.component.html", "*.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      parser: "@angular-eslint/template-parser",
      parserOptions: {
        project: "./tsconfig.app.json",
        ecmaVersion: 2022,
        sourceType: "module",
      },
      plugins: ["@angular-eslint/template"],
    }, // Custom rules for TypeScript
    {
      files: ["*.ts"],
      extends: [
        "airbnb-typescript/base",
        "plugin:prettier/recommended",
        "plugin:import/recommended",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        project: "./tsconfig.app.json",
      },
      rules: {
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "import/named": "off",
        "class-methods-use-this": "off",
        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": "off",
        "@typescript-eslint/unbound-method": [
          "error",
          {
            ignoreStatic: true,
          },
        ],
      },
    },
    // Configuration for unit and e2e spec files
    {
      files: ["*.spec.ts"],
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
    {
      files: ["src/**/*.spec.ts", "src/!**/!*.d.ts"],
      parserOptions: {
        project: "./tsconfig.spec.json",
      },
      extends: ["plugin:jasmine/recommended"],
      plugins: ["jasmine"],
      env: {
        jasmine: true,
      },
    },
    /* {
      files: ['e2e/!**!/!*.e2e-spec.ts', 'e2e/!**!/!*.po.ts'],
      parserOptions: {
        project: './e2e/tsconfig.json',
      },
      extends: ['plugin:protractor/recommended'],
      plugins: ['protractor'],
      rules: {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
      }
    },*/
  ],
};

// module.exports = {
//   root: true,
//   overrides: [
//     {
//       files: ['*.ts'],
//       parserOptions: {
//         project: [
//           'tsconfig.*?.json'
//           // "e2e/tsconfig.json"
//         ],
//         createDefaultProgram: true
//       },
//       extends: ['plugin:@angular-eslint/recommended', 'plugin:prettier/recommended']
//       // rules: {
//       //   ...
//       // }
//     },
//     {
//       files: ['*.component.html'],
//       extends: ['plugin:@angular-eslint/template/recommended', 'plugin:prettier/recommended'],
//       rules: {
//         'max-len': ['error', { code: 140 }]
//       }
//     },
//     {
//       files: ['*.component.ts', '*.module.ts', "*.model.ts"],
//       extends: ['plugin:@angular-eslint/template/process-inline-templates', 'plugin:prettier/recommended']
//     }
//   ]
// };
