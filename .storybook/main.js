const path = require('path')

const srcDir = path.resolve(__dirname, '../src')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.*'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
  staticDirs: ['../src/assets'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // assets: path.join(srcDir, 'srcDir'),
      components: path.join(srcDir, 'components'),
      src: path.join(srcDir, 'src'),
      styles: path.join(srcDir, 'styles'),
      utils: path.join(srcDir, 'utils'),
    }

    return config
  },
}
