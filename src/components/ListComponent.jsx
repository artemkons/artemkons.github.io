import React from 'react'
import { List, ListItem, Image } from '@chakra-ui/react'

import ListIconSvg from '../images/ListIcon.svg'

const ListComponent = ({ itemsText }) => {
  return <List>
    {itemsText.map((text, i) => (
      <ListItem display="flex" alignItems="start" fontSize={["2xl", "4xl"]} key={i}>
        <Image width={["40px", "50px"]} height={["40px", "50px"]} display='inline' src={ListIconSvg} />
        {text}
      </ListItem>
    ))}
  </List>
}

export default ListComponent
