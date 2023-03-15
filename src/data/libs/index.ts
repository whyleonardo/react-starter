import {
	SiChakraui,
	SiAxios,
	SiReactrouter,
	SiReact,
	SiEslint,
	SiPrettier,
	SiTypescript,
	SiVite,
	SiReacthookform
} from 'react-icons/si'

import { ZodIcon } from '@/components/Icons/ZodIcon'

import { Lib, CarouselLib } from './types'

const randomID = Math.floor(Math.random() * 900)

export const libs: Lib[] = [
	{
		id: 1,
		name: 'Vite',
		icon: SiVite,
		emoji: '⚡️',
		doc: 'https://vitejs.dev/',
		description:
			'Faster and leaner development experience for modern web projects'
	},
	{
		id: 2,
		name: 'React',
		icon: SiReact,
		emoji: '⚛️',
		doc: 'https://reactjs.org/blog/2022/03/29/react-v18.html',
		description: 'JavaScript library for building user interfaces'
	},
	{
		id: 3,
		name: 'TypeScript',
		icon: SiTypescript,
		emoji: '🦾',
		doc: 'https://www.typescriptlang.org/',
		description: 'Strongly typed programming language that builds on JavaScript'
	},
	{
		id: 4,
		name: 'Chakra UI',
		icon: SiChakraui,
		emoji: '🎨',
		doc: 'https://chakra-ui.com/',
		description:
			'Component library for React with modern and customizable design'
	},
	{
		id: 5,
		name: 'Axios',
		icon: SiAxios,
		emoji: '📡',
		doc: 'https://axios-http.com/',
		description: 'Promise-based HTTP client for making API requests'
	},
	{
		id: 6,
		name: 'React Router',
		icon: SiReactrouter,
		emoji: '🛣️',
		doc: 'https://reactrouter.com/',
		description: 'Library for handling routing in React applications'
	},
	{
		id: 7,
		name: 'ESLint',
		icon: SiEslint,
		emoji: '🚦',
		doc: 'https://eslint.org/',
		description: 'Find and fix problems in your JavaScript code'
	},
	{
		id: 8,
		name: 'Prettier',
		icon: SiPrettier,
		emoji: '💄',
		doc: 'https://prettier.io/',
		description: 'An opinionated code formatter'
	},

	{
		id: 9,
		name: 'React Hook Form',
		icon: SiReacthookform,
		emoji: '🪝',
		doc: 'https://react-hook-form.com/',
		description:
			'Form management library for React with a focus on performance and simplicity'
	},
	{
		id: 10,
		name: 'Zod',
		icon: ZodIcon,
		emoji: '🧪',
		doc: 'https://github.com/vriad/zod',
		description: 'TypeScript-first schema validation library'
	}
]

export const carouselLibs: CarouselLib[] = [
	{
		id: '1b2f6d0f-731e-4c17-9e3e-3f1a16a7c87d',
		name: 'React',
		icon: SiReact
	},
	{
		id: 'a8100c0e-125f-465c-bd11-ba813b87a582',
		name: 'Chakra UI',
		icon: SiChakraui
	},
	{
		id: '5f5e11fb-8dc3-4559-9e0b-1b56c8b076e7',
		name: 'Axios',
		icon: SiAxios
	},
	{
		id: 'f09b80f5-c7a4-4d4f-a6b4-6b64f356b20b',
		name: 'React Router',
		icon: SiReactrouter
	},
	{
		id: '0c38a7f3-ec3d-4d0c-b1f3-6d623c2852e1',
		name: 'ESLint',
		icon: SiEslint
	},
	{
		id: '69f4d072-4a7a-4fcb-98e9-fc307d56e7f2',
		name: 'Prettier',
		icon: SiPrettier
	},
	{
		id: '9d19fc7e-8bbf-4c3b-a5c5-0b0c5b5a35db',
		name: 'TypeScript',
		icon: SiTypescript
	},
	{
		id: '5d5bb5f5-aa75-4975-96fa-2f27d58e1381',
		name: 'Vite',
		icon: SiVite
	},
	{
		id: '968aa5d1-9264-4b20-bf91-d17ba48cb3eb',
		name: 'React Hook Form',
		icon: SiReacthookform
	},
	{
		id: '8b54a0d1-6de1-476f-a32f-68a6d0f6b857',
		name: 'React',
		icon: SiReact
	},
	{
		id: 'b8aebd6f-3836-4431-b05e-2c69c42e3b7a',
		name: 'Chakra UI',
		icon: SiChakraui
	},
	{
		id: '5d5c5cd5-3190-4e16-a54a-3f4efdd4f47c',
		name: 'Axios',
		icon: SiAxios
	},
	{
		id: 'f73de1af-531f-4789-b05e-39c78e0d7e72',
		name: 'React Router',
		icon: SiReactrouter
	},
	{
		id: 'f19b647a-7c2f-44f2-b299-df55bcf1e073',
		name: 'ESLint',
		icon: SiEslint
	},
	{
		id: 'd14f798e-6a09-42c2-a8e3-3a2b7aee85b3',
		name: 'Prettier',
		icon: SiPrettier
	},
	{
		id: '7b536a84-60ba',
		name: 'TypeScript',
		icon: SiTypescript
	},
	{
		id: '5d5bb5f5-aa75-4975-96fa-2f27d582e1381',
		name: 'Vite',
		icon: SiVite
	},
	{
		id: '968aa5d1-9264-4b20-bf91-d147ba48cb3eb',
		name: 'React Hook Form',
		icon: SiReacthookform
	}
]
