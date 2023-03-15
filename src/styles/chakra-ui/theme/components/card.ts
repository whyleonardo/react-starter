import { ComponentStyleConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Card } = chakraTheme.components

const ThemedCard: ComponentStyleConfig = {
	...Card
}

export default ThemedCard
