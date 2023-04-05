import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { SiGithub, SiLinkedin } from 'react-icons/si'

import { CarouselLibs } from '@/components/CarouselLibs/index'
import { CopyButton } from '@/components/CopyButton'
import { ViteIcon } from '@/components/Icons/ViteIcon'
import { LibCard } from '@/components/LibCard'

import { libs, carouselLibs } from '@/data/libs'
import { useColorOpacity } from '@/hooks/useColorOpacity'
import {
	Stack,
	Text,
	Heading,
	Button,
	Grid,
	Link,
	Icon,
	HStack
} from '@chakra-ui/react'
import AOS from 'aos'

export const App = () => {
	useEffect(() => {
		AOS.init()
	}, [])
	return (
		<>
			<Helmet title="React + Vite + Chakra UI" />

			<Stack
				test-id="app"
				bgGradient="linear(to-b, #0A0229,#08243A )"
				gap="2rem"
				pt="10"
				pb="4"
				px={{ base: '6', xl: '8' }}
				overflow="hidden"
				position="relative"
				zIndex="0"
			>
				<Stack
					data-aos="fade-down"
					as="header"
					gap="4"
					position="relative"
					zIndex="1"
				>
					<Heading as="h3" fontSize="3xl">
						<Text
							as="span"
							bgClip="text"
							bgGradient="linear(to-b, brand.200, brand.100)"
						>
							Vite @
						</Text>{' '}
						<Text
							as="span"
							bgClip="text"
							bgGradient="linear(to-tr, brand.400, brand.500)"
						>
							React Template
						</Text>
					</Heading>

					<Heading
						as="h1"
						fontSize={{
							base: '5xl',
							md: '7xl',
							lg: '8xl',
							xl: '8xl'
						}}
						fontWeight="black"
						bgClip="text"
						bgGradient="linear(to-tl, brand.400, brand.500)"
					>
						React + TypeScript + Chakra UI
					</Heading>

					<Text
						color="gray.500"
						fontWeight="400"
						fontSize="xl"
						width={{ base: 'full', md: '70%', lg: '50%' }}
					>
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
							Configured and ready to go!
						</Text>
					</Text>

					<Stack
						flexDirection={{ base: 'column', md: 'row' }}
						gap={{ base: 0, md: '2rem' }}
					>
						<Button
							as={Link}
							href="https://github.com/whyleonardo/react-starter"
							target="_blank"
							cursor="pointer"
							bgColor="brand.500"
							mt="0.5rem"
							p="6"
							width={{ base: 'full', md: '15rem' }}
							fontWeight="400"
							fontSize="xl"
							_hover={{ bgColor: useColorOpacity('brand', 500, 70) }}
						>
							Visit on Github
						</Button>

						<CopyButton />
					</Stack>
				</Stack>

				<ViteIcon />

				<Stack as="main" gap="2rem">
					<CarouselLibs libs={carouselLibs} />
					<Grid
						gap="2rem"
						templateColumns={{
							base: 'repeat(1, 1fr)',
							lg: 'repeat(2, 1fr)'
						}}
						templateRows={{
							base: 'repeat(1, 1fr)',
							lg: 'repeat(2, 1fr)'
						}}
					>
						<LibCard libs={libs} />
					</Grid>
				</Stack>

				<Stack as="footer" alignItems={{ base: 'center', md: 'end' }}>
					<HStack
						flexDir={{ base: 'column', md: 'row' }}
						alignItems="center"
						gap="4"
					>
						<HStack flexDir="row" alignItems="center">
							<Link target="_blank" href="https://linkedin.com/in/christianlsb">
								<Icon
									as={SiLinkedin}
									w="2rem"
									h="2rem"
									transition="300ms ease-out"
									_hover={{ color: 'linkedin.600' }}
								/>
							</Link>
							<Link target="_blank" href="https://github.com/whyleonardo">
								<Icon
									as={SiGithub}
									w="2rem"
									h="2rem"
									transition="300ms ease-out"
									_hover={{ color: 'black' }}
								/>
							</Link>
						</HStack>

						<Link>
							Christian Leonardo @{' '}
							<Text as="span">{` ${new Date().getFullYear()}`}</Text>
						</Link>
					</HStack>
				</Stack>
			</Stack>
		</>
	)
}
