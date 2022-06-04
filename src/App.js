import { ChakraProvider, } from '@chakra-ui/react'

import Swiper from './Swiper'
import useDocumentDimensions from './hooks/useDocumentDimensions'

import "./styles/App.sass"
import theme from './theme'

function App() {
  useDocumentDimensions()

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Swiper />
      </div>
    </ChakraProvider>
  );
}

export default App;
