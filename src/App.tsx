import { Helmet } from 'react-helmet'

import { Button, Center, useColorMode } from '@chakra-ui/react'

export const App = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <>
      <Helmet title="React + Vite + Chakra UI" />

      <Center h="100vh">
        <Button onClick={toggleColorMode}>Change Theme</Button>
      </Center>
    </>
  )
}
