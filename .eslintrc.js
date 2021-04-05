module.exports = {
    plugins: ['react', '@typescript-eslint', 'jest'],
    extends: [
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:jest/recommended',
      'prettier',
      "plugin:react/recommended", // "plugin:react/recommended",
      'plugin:prettier/recommended'
    ],    
    env: { // An environment defines global variables that are predefined. 
      browser: true, // browser global variables.
      es6: true, // enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6).
      jest: true, // Jest global variables.
      // These environments are not mutually exclusive, so you can define more than one at a time.
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser', //By default, ESLint uses Espree as its parser. You can optionally specify that a different parser should be used in your configuration file. 
    parserOptions: { // ESLint allows you to specify the JavaScript language options you want to support. By default, ESLint expects ECMAScript 5 syntax. You can override that setting to enable support for other ECMAScript versions as well as JSX by using parser options.
      ecmaFeatures: { // an object indicating which additional language features you'd like to use
        jsx: true, //enable JSX
      },
      ecmaVersion: 2018,
      sourceType: 'module', // set to "script" (default) or "module" if your code is in ECMAScript modules.
      project: './tsconfig.json',
    },
    rules: {
      'linebreak-style': 'off',
      'import/prefer-default-export': 'off'
    },
    'ignorePatterns': ['.eslintrc.js']
  };