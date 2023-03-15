import { CarouselLib } from '@/data/libs/types'
import { HStack, Icon, keyframes, Tooltip } from '@chakra-ui/react'

interface CarouselLibsProps {
	libs: CarouselLib[]
}

const slide = keyframes`
  0% {transform: translate3d(0, 0, 0);}
  100% {transform: translate3d(-500%, 0, 0);}
`

const animation = `${slide} 240s infinite linear`

export const CarouselLibs = ({ libs }: CarouselLibsProps) => {
	return (
		<HStack animation={animation} gap="2">
			{libs.map((lib) => (
				<Tooltip label={lib.name} aria-label={lib.name} key={lib.id}>
					<span>
						<Icon
							as={lib.icon}
							filter="grayscale(100%)"
							transition="300ms ease-out"
							_hover={{ opacity: 1 }}
							opacity="0.4"
							w={{ base: '6rem', md: '8rem' }}
							h={{ base: '6rem', md: '8rem' }}
						/>
					</span>
				</Tooltip>
			))}
		</HStack>
	)
}
