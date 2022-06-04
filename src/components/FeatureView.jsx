import React from 'react'
import { Image } from '@chakra-ui/react'

import ListComponent from './ListComponent'

const FeatureView = ({ image, listText }) => {
  return <>
    <Image src={image} mx="auto" my={10} />
    <ListComponent itemsText={listText} />
  </>
}

export default FeatureView
