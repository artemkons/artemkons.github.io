import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'body': {
        backgroundImage: 'radial-gradient(100% 100% at 50% 0%, #010101 0%, #272727 100%)',
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
  }
})

export default theme;
