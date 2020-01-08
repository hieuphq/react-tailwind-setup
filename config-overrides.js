const {
  useBabelRc,
  override,
  useEslintRc,
  addPostcssPlugins,
  addBabelPlugins,
} = require('customize-cra');

module.exports = override(
  useBabelRc(),
  useEslintRc(),
  addBabelPlugins(
    //   '@babel/plugin-proposal-optional-chaining',
    'styled-components',
    [
      'tailwind-components',
      {
        config: './tailwind.config.js',
        format: 'auto',
      },
    ],
  ),
  addPostcssPlugins([require('tailwindcss')('./tailwind.config.js')]),
);
