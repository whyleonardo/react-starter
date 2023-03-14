import { ComponentStyleConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Code } = chakraTheme.components

const ThemedCode: ComponentStyleConfig = {
	...Code
}

export default ThemedCode
