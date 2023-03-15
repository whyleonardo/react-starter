import Button from './components/button'
import Card from './components/card'
import Code from './components/code'
import Heading from './components/heading'
import Tooltip from './components/tooltip'

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
		Code,
		Card,
		Tooltip
	}
}

export const theme = extendBaseTheme(overrides)
