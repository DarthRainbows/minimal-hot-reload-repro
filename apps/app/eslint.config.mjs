import nx from '@nx/eslint-plugin';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    extends: ['plugin:@nx/angular-template', 'plugin:@angular-eslint/template/process-inline-templates'],
    files: ['**/*.ts'],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'App',
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case'
        }
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: ['plugin:@nx/angular-template'],
    // Override or add rules here
    rules: {},
  },
];
