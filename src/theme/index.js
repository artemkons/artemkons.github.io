import { extendTheme } from '@chakra-ui/react'

// components
import Text from './components/Text'
import Heading from './components/Heading'

const theme = extendTheme({
  styles: {
    global: {
      'body': {
        backgroundImage: 'radial-gradient(100% 100% at 50% 0%, #010101 0%, #272727 100%)',
        color: '#FFFFFF',
        font: "'Montserrat', 'Roboto', sans-serif'"
      },
    }
  },
  colors: {
    orange: {
      500: "#F65314"
    }
  },
  components: {
    Text,
    Heading
  }
})

export default theme;
