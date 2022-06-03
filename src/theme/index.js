import { extendTheme  } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      'body': {
        backgroundImage: 'radial-gradient(100% 100% at 50% 0%, #010101 0%, #272727 100%)',
        color: '#FFFFFF'
      },
    }
  }
})

export default theme;
