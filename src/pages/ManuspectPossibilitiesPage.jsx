import React from 'react'
import { Heading, Tabs, TabPanels, TabPanel } from '@chakra-ui/react'

import TabListComponent from '../components/TabListComponent'
import ListComponent from '../components/ListComponent'

const ManuspectPossibilitiesPage = () => {
  return <>
    <Heading>Возможности Manuspect</Heading>
    <Tabs variant="" mt={10}>
      <TabListComponent tabsText={[
        "Пользователям",
        "Авторам"
      ]} />

      <TabPanels mt={25}>
        <TabPanel>
          <ListComponent itemsText={[
            "Используйте публичные сценарии других пользователей и редактируйте их под себя",
            "Публикуйте заявки на написание новых сценариев",
            "Создавайте сценарии сами или с другими пользователями",
            "Запускайте помощника по одному клику, в том числе удаленно со смартфона ",
            "Задавайте расписание работы ",
            "Смотрите отчет после каждого запуска по заданным вами показателям ",
            "Используйте рекомедации по настройке наиболее эффективных сценариев ",
            "В случае чего обращайтесь в поддержку или к сообществу"
          ]} />
        </TabPanel>
        <TabPanel>
          <ListComponent itemsText={[
            "Делитесь сценариями и регулируйте доступ к содержимому",
            "Берите на выполнение заявки пользователей ",
            "Собирайте команду и совместо развивайте свои сценарии",
            "Получайте монетизацию за использования и скачивания"
          ]} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </>
}

export default ManuspectPossibilitiesPage
