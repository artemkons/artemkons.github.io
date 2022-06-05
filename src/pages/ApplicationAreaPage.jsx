import React from 'react'

import PageView from '../components/PageView'

import { FEATURE_CATEGORIES, FEATURES_CONTENT } from '../utils/content'

const ApplicationAreaPage = () => {
  return <PageView header="Сферы применения" tabsText={FEATURE_CATEGORIES} featureContent={FEATURES_CONTENT}/>
}

export default ApplicationAreaPage
