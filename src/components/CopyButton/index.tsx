import { useState } from 'react'
import { BiCopy, BiCheckCircle } from 'react-icons/bi'

import { useColorOpacity } from '@/hooks/useColorOpacity'
import { Button, HStack, Code, Text, Icon, useToast } from '@chakra-ui/react'

const TEXT_COMMAND = 'npx degit whyleonardo/react-starter my-app'

export const CopyButton = () => {
	const [isCopied, setIsCopied] = useState(false)

	const toast = useToast()

	function handleCopyText() {
		navigator.clipboard.writeText(TEXT_COMMAND).then(() => {
			setIsCopied(true)
			toast({
				position: 'top',
				duration: 1500,
				render: () => <Toast />
			})
		})
	}

	return (
		<Button
			onClick={handleCopyText}
			bgColor="gray.900"
			display="flex"
			gap="2"
			p="6"
			_hover={{ bgColor: useColorOpacity('gray', 900, 70) }}
		>
			<Code
				fontWeight="400"
				fontSize={{ base: 'xs', sm: 'sm', md: 'md', lg: 'lg' }}
				bg="none"
			>
				<Text as="span" color="gray.500">
					$
				</Text>{' '}
				{TEXT_COMMAND}
			</Code>

			<Icon as={!isCopied ? BiCopy : BiCheckCircle} w="1.3rem" h="1.3rem" />
		</Button>
	)
}

const Toast = () => {
	return (
		<HStack
			justifyContent="space-between"
			borderBottom="2px"
			borderColor="brand.400"
			bg="gray.900"
			p="4"
			color="white"
			rounded="5px"
		>
			<Text fontSize="lg">Copied!</Text>
			<Icon as={BiCheckCircle} w="1.5rem" h="1.5rem" />
		</HStack>
	)
}
