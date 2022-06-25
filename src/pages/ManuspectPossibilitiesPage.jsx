import { Heading, Grid, GridItem, Text, Image } from '@chakra-ui/react'
import React from 'react'

import CrossoutBuyImage from '../images/CrossoutBuyImage.png'
import AbilitiesImage1 from '../images/AbilitiesImage1.png'

const ManuspectPossibilitiesPage = () => {
  return <>
    <Heading>Возможности Manuspect</Heading>
    <Grid h="100%" mt={[5, 10]} templateColumns="1fr 1fr" alignItems="center">
      <GridItem><Text>Используйте готовые сценарии и меняйте их под себя</Text></GridItem>
      <GridItem justifySelf="center"><Image src={AbilitiesImage1} /></GridItem>
      <GridItem></GridItem>
      <GridItem><Text>Создавайте сценарии самостоятельно или в команде</Text></GridItem>
      <GridItem><Text>Публикуйте заявки на написание сценариев</Text></GridItem>
      <GridItem justifySelf="center" ><Image src={CrossoutBuyImage} /></GridItem>
    </Grid>
  </>
}

export default ManuspectPossibilitiesPage
