import { Image, keyframes } from '@chakra-ui/react'

const scale = keyframes`
  0% {
		transform: scale(1);
		filter:drop-shadow(0px 15px 25px #BDA62A);
	}
 	50% {
		transform: scale(1.1);
		filter:drop-shadow(0px 15px 25px #B57BEB);

	}
  100% {
		transform: scale(1);
		filter:drop-shadow(0px 15px 25px #BDA62A);
	}
`

const animation = `${scale} 10s infinite linear`

export const ViteIcon = () => {
	return (
		<Image
			position="absolute"
			right="5%"
			top="20"
			zIndex="-1"
			w="15rem"
			h="15rem"
			src="/vite.svg"
			opacity={{ base: '0.2', lg: '0.3' }}
			animation={animation}
		/>
	)
}
