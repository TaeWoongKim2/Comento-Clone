module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:@typescript-eslint/eslint-recommended', 'airbnb', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  settings: {
    'import/resolver': {
      typescript: {}
    }
  },
  rules: {
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [2, {
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }],
    indent: ['error', 2],
    curly: 'error',
    '@typescript-eslint/indent': ['error', 2],
    'jsx-a11y/anchor-is-valid': ['error', {
      aspects: ['invalidHref', 'preferButton']
    }],
    'no-console': ['warn', {
      allow: ['warn', 'info']
    }],
    'react/no-danger': 0,
    'no-trailing-spaces': 'error',
    'brace-style': 'error',
    'no-multi-spaces': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'no-whitespace-before-property': 'error',
    'func-call-spacing': 'error',
    'space-before-blocks': 'error',
    'keyword-spacing': ['error', {
      before: true,
      after: true
    }],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'comma-style': ['error', 'last'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-in-parens': ['error', 'never'],
    'block-spacing': 'error',
    'key-spacing': ['error', {
      mode: 'strict'
    }],
    'linebreak-style': 'off',
    'no-proto': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
      cjs: 'never'
    }],
    'no-alert': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off'
  }
};