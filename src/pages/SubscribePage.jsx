import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

const SubscribePage = () => {
  return <Box fontSize="4xl">
    <Heading>Хотите знать первыми, когда помощник будет доступен? </Heading>
    <Text mt={60}>Оставьте номер, сообщим по смс</Text>
    <Text mt={90}>За “помощник” следят уже ХХ(Х+1) человек!</Text>
    <Heading mt={100}>Спасибо за интерес!</Heading>
    <Text mt={24}>Следить за нашими новостями, задать нам вопросы и рассказать, какой именно функционал “помощник”а Вы ждете уже сейчас можно в нашем телеграм-канале!</Text>
  </Box>
}

export default SubscribePage
