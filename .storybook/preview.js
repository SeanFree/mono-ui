import '!style-loader!css-loader!sass-loader!../src/styles/base.scss'
import '@material-design-icons/font/filled.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
