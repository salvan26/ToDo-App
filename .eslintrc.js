module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: ['airbnb', 'plugin:jest/recommended'],
	plugins: [
		'babel',
		'import',
		'jsx-a11y',
		'react',
		'prettier',
	],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
    rules: {
        "indent": ["error", 2],
        "prettier/prettier": "error",
        "linebreak-style": [0, "unix"],
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
        "react/react-in-jsx-scope": "off",
        "react/state-in-constructor": ["error", "never"],
        "class-methods-use-this":["off"],
        "max-len": ["error", { "code": 120 }],
        "react/prop-types": 0,
        "react/prefer-stateless-function": "off",
        "import/no-unresolved": [2, { "caseSensitive": false }],
        "object-curly-newline": ["off"],
        "comma-dangle": ["off"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/click-events-have-key-events": ["off"],
        "jsx-a11y/label-has-associated-control": ["off"],
        "jsx-a11y/no-noninteractive-element-interactions": ["off"],
        "import/order": [
          2,
          {
            "groups": [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index"
            ],
            "newlines-between": "always"
          }
        ]
      },
};