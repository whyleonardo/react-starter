import { useEffect, useMemo } from 'react'

import { Lib } from '@/data/libs/types'
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Icon,
	Link,
	Text
} from '@chakra-ui/react'
import AOS from 'aos'

interface LibCardProps {
	libs: Lib[]
}
const isPair = (number: number) => number % 2 == 0

export const LibCard = ({ libs }: LibCardProps) => {
	useEffect(() => {
		AOS.init()
	}, [])

	return (
		<>
			{libs.map((lib, idx) => (
				<Card
					key={lib.id}
					bgColor="gray.800"
					p="2"
					boxShadow="dark-lg"
					position="relative"
					data-aos={isPair(idx) ? 'fade-right' : 'fade-left'}
				>
					<CardHeader>
						<Heading fontSize="2xl">
							{lib.name} <Text as="span">{lib.emoji}</Text>
						</Heading>
					</CardHeader>

					<Divider bgColor="gray.700" w="90%" mx="auto" h="1px" opacity="0.4" />

					<CardBody>
						<Text>{lib.description}</Text>
					</CardBody>

					<Icon
						position="absolute"
						bottom="10%"
						right="8%"
						w="3rem"
						h="3rem"
						opacity="0.7"
						color="gray.700"
						filter="grayscale(100%)"
						as={lib.icon}
					/>

					<CardFooter>
						<Link
							fontWeight="bold"
							_hover={{ textDecoration: 'underline' }}
							target="_blank"
							href={lib.doc}
						>
							Visit Documentation {'->'}
						</Link>
					</CardFooter>
				</Card>
			))}
		</>
	)
}
