import React from 'react'
import { List, ListItem, ListIcon } from '@chakra-ui/react'

import ListIconSvg from '../images/ListIcon.svg'

const ListComponent = ({ itemsText }) => {
  return <List>
    {itemsText.map((text, i) => (
      <ListItem key={i}>
        <ListIcon as={ListIconSvg} />
        {text}
      </ListItem>
    ))}
  </List>
}

export default ListComponent
