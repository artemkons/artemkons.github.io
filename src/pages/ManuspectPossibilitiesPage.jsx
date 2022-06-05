import React from 'react'

import PageView from '../components/PageView'

import { MANUSPECT_POSSIBILITIES_TABS, MANUSPECT_POSSIBILITIES_CONTENT } from '../utils/content'

const ManuspectPossibilitiesPage = () => {
  return <PageView header="Возможности Manuspect"
    tabsText={MANUSPECT_POSSIBILITIES_TABS}
    featureContent={MANUSPECT_POSSIBILITIES_CONTENT} />
}

export default ManuspectPossibilitiesPage
