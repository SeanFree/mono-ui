const path = require('path')

const srcDir = path.resolve(__dirname, '../src')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.*'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.join(srcDir, 'components'),
      src: path.join(srcDir, 'src'),
      styles: path.join(srcDir, 'styles'),
      utils: path.join(srcDir, 'utils'),
    }

    return config
  },
}
