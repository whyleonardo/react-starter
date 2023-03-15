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

interface LibCardProps {
	libs: Lib[]
}

export const LibCard = ({ libs }: LibCardProps) => {
	return (
		<>
			{libs.map((lib) => (
				<Card
					key={lib.name}
					bgColor="gray.800"
					p="2"
					boxShadow="dark-lg"
					position="relative"
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
