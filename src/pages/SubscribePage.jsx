import React from 'react'
import { Box, Link, Heading, Text } from '@chakra-ui/react'

const SubscribePage = () => {
  return <Box>
    <Heading>Хотите знать первыми, когда помощник будет доступен?</Heading>
    <Text variant="neon" mt={[30, 100]}>Оставьте почту и мы вам сообщим!</Text>
    <Link isExternal href="https://docs.google.com/forms/d/e/1FAIpQLSfxMPi-awNM1nZRRlsbiZbmnpZWYsXlE7c1Yzcz3pauMvK-mQ/viewform"
      display="flex" justifyContent="center" _hover={{ textDecor: "none" }} fontSize="xl" borderRadius={12} width={330} p={2} background="#00A1F1" boxShadow="0px 0px 20px #00A1F1" colorScheme="blue" mt={[200, 370]}>Перейти к форме</Link>
    <Heading mt={[50, 90]}>Спасибо за интерес!</Heading>
  </Box>
}

export default SubscribePage
