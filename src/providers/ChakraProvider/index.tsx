import { ReactNode } from 'react'

import { theme } from '@/styles/chakra-ui/theme'
import { ChakraBaseProvider } from '@chakra-ui/react'

interface ChakraProviderProps {
	children: ReactNode
}

export const ChakraProvider = ({ children }: ChakraProviderProps) => {
	return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
}
