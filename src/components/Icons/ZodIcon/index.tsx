import { IconType } from 'react-icons/lib'

import { Image } from '@chakra-ui/react'

export const ZodIcon: IconType = () => {
	return (
		<Image
			position="absolute"
			bottom="10%"
			right="5%"
			w="4rem"
			h="4rem"
			opacity="0.1"
			color="gray.400"
			src="/zod-logo.svg"
			filter="grayscale(100%)"
		/>
	)
}
