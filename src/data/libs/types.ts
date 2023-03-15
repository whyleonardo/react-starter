import { IconType } from 'react-icons/lib'

export type Lib = {
	name: string
	icon: IconType
	emoji: string
	doc: string
	description: string
}

export type CarouselLib = Pick<Lib, 'name' | 'icon'>
