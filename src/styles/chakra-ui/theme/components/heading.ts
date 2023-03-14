import { ComponentStyleConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Heading } = chakraTheme.components

const ThemedHeading: ComponentStyleConfig = {
	...Heading
}

export default ThemedHeading
