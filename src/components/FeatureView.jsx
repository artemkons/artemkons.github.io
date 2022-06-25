import React from 'react'
import { Image } from '@chakra-ui/react'

import ListComponent from './ListComponent'

const FeatureView = ({ image, listText }) => {
  return <>
    {image && <Image w={300} h="auto" src={image} mx="auto" mb={[1, 5]} />}
    <ListComponent itemsText={listText} />
  </>
}

export default FeatureView
