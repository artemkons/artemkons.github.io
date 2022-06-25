import React from 'react'
import { TabList, Tab } from '@chakra-ui/react'

import NEON_STYLE from '../theme/styles'

const TabListComponent = ({ tabs }) => {
  return (
    <TabList h={100} whiteSpace="nowrap" overflowX="scroll">
      {tabs.map((text, i) => (
        <Tab fontSize={["2xl", "4xl"]} _selected={NEON_STYLE} _focus={{ boxShadow: "none" }} key={i}>{text}</Tab>
      ))}
    </TabList>
  )
}

export default TabListComponent
