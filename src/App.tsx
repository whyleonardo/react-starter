import { Button, Center, useColorMode } from '@chakra-ui/react'

export const App = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Center h="100vh">
      <Button onClick={toggleColorMode}>Change Theme</Button>
    </Center>
  )
}
