import React from 'react'
import { Heading, Tabs, TabPanels, TabPanel } from '@chakra-ui/react'

import TabListComponent from '../components/TabListComponent'
import FeatureView from '../components/FeatureView'

import { FEATURE_CATEGORIES, FEATURES_CONTENT } from '../utils/content'

const ApplicationAreaPage = () => {
  return <>
    <Heading>Сферы применения</Heading>
    <Tabs variant="" mt={10}>
      <TabListComponent tabsText={FEATURE_CATEGORIES} />
      <TabPanels mt={25}>
        {FEATURES_CONTENT.map(([image, listText], i) => {
          return (
            <TabPanel>
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

export default ApplicationAreaPage
