import React from 'react'
import { Flex, Image, Heading, Text } from "@chakra-ui/react"

import MainImage from "../images/MainImage.png"

const MainPage = () => {
  return <Flex direction="column" h="100%">
    <Image mx="auto" src={MainImage} />
    <Heading mt={[100, 70]}>Cоздайте себе <Text as="span" color="#00A1F1" textShadow="0px 0px 38px #00A1F1" >умного онлайн-помощника</Text> для автоматизации повторяющихся задач!</Heading>
    <Text mt={["auto", 50]}>Для работы и гейминга</Text>
  </Flex>
}

export default MainPage
