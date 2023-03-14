import { ComponentStyleConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Button } = chakraTheme.components

const ThemedButton: ComponentStyleConfig = {
	...Button
}

export default ThemedButton
