import React from 'react'
import Button from '../../components/Button'

import "./how-it-works.sass"

const HowItWorksPage = () => {
  return <>
    <div className="how-it-works-page">
      <h1>Как работают сценарии?</h1>
      <img height={200} src="https://bipbap.ru/wp-content/uploads/2017/04/2-8.jpg" alt="Красивая картинка" />
      <p>Всё очень просто:
        Скачиваете приложение
        Находите в маркетплейсе по ключевым словам нужный сценарий
        Запускаете и разрешаете ему необходимые доступы
        Вуа-ля, ваше устройство работает без вас
      </p>
    </div>
    <Button>Хочу следить за проектом</Button>
  </>
}

export default HowItWorksPage
