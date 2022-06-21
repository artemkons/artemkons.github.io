import { Heading, Grid, GridItem, Text, Image } from '@chakra-ui/react'
import React from 'react'

import CrossoutBuyImage from '../images/CrossoutBuyImage.png'

const ManuspectPossibilitiesPage = () => {
  return <>
    <Heading>Возможности Manuspect</Heading>
    <Grid h="100%" mt={[5, 10]} templateColumns="1fr 1fr">
      <GridItem><Text>Используйте готовые сценарии и меняйте их под себя</Text></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem><Text>Создавайте сценарии самостоятельно или в команде</Text></GridItem>
      <GridItem><Text>Публикуйте заявки на написание сценариев</Text></GridItem>
      <GridItem><Image src={CrossoutBuyImage}/></GridItem>
    </Grid>
  </>
}

export default ManuspectPossibilitiesPage
