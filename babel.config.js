const path = require('path');

module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@shared': path.resolve(__dirname, '../shared/src/components')
        }
      }
    ]
  ]
};
