import { Helmet } from 'react-helmet'

import { Button, Center, useColorMode, VStack } from '@chakra-ui/react'

export const App = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <>
      <Helmet title="React + Vite + Chakra UI" />

      <Center h="100vh">
        <VStack>
          <Button onClick={toggleColorMode}>Change Theme</Button>
        </VStack>
      </Center>
    </>
  )
}
