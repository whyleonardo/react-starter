import Button from './components/button'

import colors from './foundations/colors'

import { extendBaseTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  disableTransitionOnChange: false
}

const overrides = {
  colors,
  config,

  // extend here just the components you need to use
  components: {
    Button
  }
}

export const theme = extendBaseTheme(overrides)
