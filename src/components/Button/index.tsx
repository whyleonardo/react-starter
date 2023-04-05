import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react'

type Props = {
	children: React.ReactNode
} & ButtonProps

export const Button = ({ children, ...rest }: Props) => {
	return (
		<ChakraButton
			color="rgb(255,255,255)"
			bgColor="rgb(0,0,0)"
			data-testid="button-test"
			{...rest}
		>
			{children}
		</ChakraButton>
	)
}
