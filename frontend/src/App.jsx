import React from 'react'
import { Alert } from "@chakra-ui/react"

const App = () => {
  return (
    <div>
      <Alert.Root>
        <Alert.Indicator />
        <Alert.Content>
          <Alert.Title>This is an alert title</Alert.Title>
          <Alert.Description />
        </Alert.Content>
      </Alert.Root>
    </div>
  )
}

export default App