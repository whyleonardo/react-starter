import { ComponentStyleConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Tooltip } = chakraTheme.components

const ThemedTooltip: ComponentStyleConfig = {
	...Tooltip
}

export default ThemedTooltip
