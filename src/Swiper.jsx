import React from 'react';

import MainPage from './pages/MainPage'
import ApplicationAreaPage from './pages/ApplicationAreaPage';
import ManuspectPossibilitiesPage from './pages/ManuspectPossibilitiesPage'
//import HowItWorksPage from './pages/HowItWorksPage';
import SubscribePage from './pages/SubscribePage'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, Mousewheel } from 'swiper';

const pages = [
  <MainPage />,
  <ApplicationAreaPage />,
  <ManuspectPossibilitiesPage />,
  //<HowItWorksPage />,
  <SubscribePage />
];

const SwiperComponent = () => {
  return (
    <Swiper
      direction={'vertical'}
      pagination={{
        clickable: true,
        renderBullet: function(index, className) {
          return `<span class="${className}"><span class="swiper-pagination-bullet__slider-counter">${index + 1
            }</span></span>`;
        }
      }}
      mousewheel={{ sensitivity: 0.5 }}
      scrollbar={{ draggable: true }}
      modules={[Pagination, Scrollbar, Mousewheel]}
      className='main-swiper'
    >
      {pages.map((page, i) => (
        <SwiperSlide key={i}>{page}</SwiperSlide>
      ))}
    </Swiper>)
};

export default SwiperComponent;
