import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, Mousewheel } from "swiper";

const SwiperComponent = () => {
  return <Swiper
    direction={"vertical"}
    pagination={{
      clickable: true,
      renderBullet: function(index, className) {
        return `<span class="${className}"><span class="swiper-pagination-bullet__slider-counter">${(index + 1)}</span></span>`
      },
    }}
    mousewheel={true}
    scrollbar={{ draggable: true }}
    modules={[Pagination, Scrollbar, Mousewheel]}
    className="main-swiper"
  >
    <SwiperSlide>
      <h1>MANUSPECT</h1>
      <p className="subtitle">Универсальный инструмент для автоматизации однотипных действий при работе с пк или смартфоном</p>
      <p>
        У каждого человека работающего за компьютером регулярно возникают однотипные задачи. И к сожалению, по мере роста таких задач, приходится тратить все больше нашего драгоценного времени.
        Мы предлагаем решение данной проблемы, программой, способной частично или полностью сократить затрачиваемое время на решение подобных задач.
      </p>
      <button className="button-primary">Хочу следить за проектом</button>
    </SwiperSlide>
    <SwiperSlide>
      <h1>О проекте</h1>
      <p>Так как проблема затрагивает слишком много предметных областей, было принято решение создать платформу агрегирующую возможности по созданию работающих решений.
      </p>
      <h2>Для пользователей</h2>
      <p>
        Можно находить готовые решения
        Создавать заявки для автоматизации и развиваться вместе с сообщество
      </p>
      <h2>Для разработчиков</h2>
      <p>
        Можно создавать больше эффективных сценариев автоматизации и получать оплату за свой труд
        Видеть заявки под которыми подписалось наибольшее кол-во реальных пользователей и выбирать только самое актуальное для автоматизации.
      </p>
      <p>Проанализировав потребность пользоватей, было решено встроить в платформу Git подобную систему версий.
      </p>
      <button>Хочу следить за проектом</button>
    </SwiperSlide>
    <SwiperSlide>
      <h1>О проекте</h1>
      <p>Здесь будеть видео</p>
      <button>Хочу следить за проектом</button>
    </SwiperSlide>
    <SwiperSlide>
      <h1>Как работают сценарии?</h1>
      <p>Всё очень просто:
        Скачиваете приложение
        Находите в маркетплейсе по ключевым словам нужный сценарий
        Запускаете и разрешаете ему необходимые доступы
        Вуа-ля, ваше устройство работает без вас
      </p>
      <button>Хочу следить за проектом</button>
    </SwiperSlide>
    <SwiperSlide>
      <h1>Наши преимущества</h1>
    </SwiperSlide>
  </Swiper >
}

export default SwiperComponent
