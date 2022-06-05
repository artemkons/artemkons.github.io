import React from 'react'
import { TabList, Tab } from '@chakra-ui/react'

const TabListComponent = ({ tabsText }) => {
  return (
    <TabList whiteSpace="nowrap" overflowX="scroll" overflowY="clip" overflow>
      {tabsText.map((text, i) => (
        <Tab fontSize={["2xl", "4xl"]} _selected={{ boxShadow: "none", color: "orange.500" }} key={i}>{text}</Tab>
      ))}
    </TabList>
  )
}

export default TabListComponent
