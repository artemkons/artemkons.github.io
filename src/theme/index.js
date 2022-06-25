import { extendTheme } from '@chakra-ui/react'

// components
import Text from './components/Text'
import Heading from './components/Heading'

const theme = extendTheme({
  styles: {
    global: {
      'body': {
        background: 'radial-gradient(153.26% 159.42% at 50% 0%, #010101 0%, #272727 41.76%, rgba(0, 161, 241, 0.35) 100%), #000000',
        color: '#FFFFFF',
        font: "'Montserrat', 'Roboto', sans-serif'"
      },
      'h1': {
        fontSize: 'xl'
      }
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
