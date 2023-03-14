import Button from './components/button'
import Code from './components/code'
import Heading from './components/heading'

import colors from './foundations/colors'
import { fonts } from './foundations/fonts'

import { extendBaseTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
	disableTransitionOnChange: false
}

const overrides = {
	colors,
	config,
	fonts,

	// extend here just the components you need to use
	components: {
		Button,
		Heading,
		Code
	}
}

export const theme = extendBaseTheme(overrides)
