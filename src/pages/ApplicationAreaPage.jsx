import React from 'react'
import { Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import ListComponent from '../components/ListComponent'

const ApplicationAreaPage = () => {
  return <>
    <Heading>Сферы применения</Heading>
    <Tabs mt={10}>
      <TabList overflowX="scroll" overflowY="clip">
        <Tab>Продажи</Tab>
        <Tab>Маркетинг</Tab>
        <Tab>Закупки</Tab>
        <Tab>Бухгалтерия</Tab>
        <Tab>Data Science и аналитика</Tab>
        <Tab>Тех-поддержка</Tab>
        <Tab>Юристы</Tab>
        <Tab>Делопроизводство</Tab>
        <Tab>Human Resources</Tab>
        <Tab>Гейминг</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <ListComponent itemsText={[
            "Поиск конкурсов и тендеров",
            "Синхронизация договоров с контрагентами в СЭД"
          ]} />
        </TabPanel>
        <TabPanel>
          <ListComponent itemsText={[
            "Синхронизация данных о клиентах в системах",
            "Рассылка писем лояльности и размещение публикаций"
          ]} />
        </TabPanel>
        <TabPanel>
          <ListComponent itemsText={[
            "Контроль остатков, формирование заявок",
            "Поиск лучших цен",
            "Сбор и сравнение предложений",
            "Проверка закупочной документации"
          ]} />
        </TabPanel>
        <TabPanel>
          <ListComponent itemsText={[
            "Формирование отчетов и актов сверки",
            "Разнесение банковских выписок из клиент-банка",
            "Подготовка актов и счетов, платежек",
            "Контроль взаиморасчетов",
            "Заполнение данных из первичных документов",
          ]} />
        </TabPanel>
        <TabPanel>
          <ListComponent itemsText={[
            "Автоматизизация приложения без открытого API",
            "Кастомизируемая инфографика",
            "Кастомизируемый интерфейс для разметки датасетов",
            "Быстрая настройка сценария для сбора и экспорта данных"
          ]} />
        </TabPanel>
        <TabPanel>
          <ListComponent itemsText={[
            "Регистрация, классификация и контроль исполнения обращений",
            "Регистрация, классификация и контроль исполнения обращений"
          ]} />
        </TabPanel>
        <TabPanel>
          <ListComponent itemsText={[
            "Проверка договоров на соответствие НПА",
            "Проверка информации по контрагенту",
            "Подготовка запросов и рассылка документов при работе с задолженностью"

          ]} />
        </TabPanel>
        <TabPanel>
          <ListComponent itemsText={[
            "Регистрация, учет входящих документов и обращений, распределение по ответственным",
            "Контроль согласования документов, исполнения поручений",
            "Распознавание, сравнение и регистрация договоров"
          ]} />
        </TabPanel>
        <TabPanel>
          <ListComponent itemsText={[
            "Оформление при приеме и увольнении",
            "Оформление справок, приказов, отпусков, командировок Подготовка рабочего места и учетных записей",
            "Формирование зарплатной ведомости",
            "Консультации новичков по типовым вопросам"
          ]} />
        </TabPanel>
        <TabPanel>
          <ListComponent itemsText={[
            "Крафт предметов по уже готовым рецептам",
            "Оффлайн фарм",
            "Выгодные покупки на внутриигрофых биржах"
          ]} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  </>
}





export default ApplicationAreaPage
