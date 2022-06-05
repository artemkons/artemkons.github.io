import React from 'react'

import { Heading, Tabs, TabPanels, TabPanel } from '@chakra-ui/react'

import TabListComponent from './TabListComponent'
import FeatureView from './FeatureView'

const PageView = ({ header, tabsText, featureContent }) => {
  return <>
    <Heading>{header}</Heading>
    <Tabs variant="" mt={[5, 10]}>
      <TabListComponent tabsText={tabsText} />
      <TabPanels mt={[5, 25]}>
        {featureContent.map(([image, listText], i) => {
          return (
            <TabPanel p={1} key={i}>
              <FeatureView
                image={image}
                listText={listText}
                key={i} />
            </TabPanel>)
        })}
      </TabPanels>
    </Tabs>
  </>
}

export default PageView
