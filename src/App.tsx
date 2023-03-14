import { Helmet } from 'react-helmet'

import { CopyButton } from '@/components/CopyButton'

import { useColorOpacity } from '@/hooks/useColorOpacity'
import { Stack, Text, Heading, Button } from '@chakra-ui/react'

export const App = () => {
	return (
		<>
			<Helmet title="React + Vite + Chakra UI" />

			<Stack
				bgGradient="linear(to-b, #0A0229,#08243A )"
				h="1000vh"
				border="1px"
				pt="16"
				px="4"
			>
				<Stack gap="6">
					<Heading as="h3" fontSize="3xl">
						<Text as="span" color="brand.100">
							Vite
						</Text>{' '}
						<Text
							as="span"
							// color="brand.darkBlue"
							bgClip="text"
							bgGradient="linear(to-tr, brand.400, brand.500)"
						>
							@ React Template
						</Text>
					</Heading>

					<Heading
						as="h1"
						fontSize="5xl"
						fontWeight="black"
						bgClip="text"
						bgGradient="linear(to-tl, brand.400, brand.500)"
					>
						React + TypeScript + Chakra UI
					</Heading>

					<Text color="gray.500" fontWeight="400" fontSize="xl">
						Bootstrap your web projects faster than ever. Comes with:{' '}
						<Text as="span" color="brand.400">
							Zod
						</Text>
						,{' '}
						<Text as="span" color="brand.400">
							Axios
						</Text>
						,{' '}
						<Text as="span" color="brand.400">
							React Router
						</Text>
						,{' '}
						<Text as="span" color="brand.400">
							Husky
						</Text>
						,{' '}
						<Text as="span" color="brand.400">
							Commitlint
						</Text>
						,{' '}
						<Text as="span" color="brand.400">
							ESLint
						</Text>
						,{' '}
						<Text as="span" color="brand.400">
							Prettier
						</Text>{' '}
						and some more.{' '}
						<Text as="span" color="brand.400">
							Configured and ready to go.
						</Text>
					</Text>

					<Stack>
						<Button
							width="full"
							fontWeight="400"
							bgColor="brand.500"
							p="6"
							fontSize="xl"
							_hover={{ bgColor: useColorOpacity('brand', 500, 70) }}
						>
							Visit on Github
						</Button>

						<CopyButton />
					</Stack>
				</Stack>
			</Stack>
		</>
	)
}
