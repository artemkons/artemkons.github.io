import React from 'react';

import ApplicationAreaPage from './pages/ApplicationAreaPage';
import ManuspectPossibilitiesPage from './pages/ManuspectPossibilitiesPage'
import MainPage from './pages/MainPage/MainPage';
import AboutProjectPage from './pages/AboutProjectPage/AboutProjectPage';
// отключено до появления видео
// import AboutScenarioPage from './pages/AboutScenarioPage';
import HowItWorksPage from './pages/HowItWorksPage';
import OurBenefitsPage from './pages/OurBenefitsPage/OurBenefitsPage';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, Mousewheel } from 'swiper';

const pages = [
  <ApplicationAreaPage />,
  <ManuspectPossibilitiesPage />,
  <HowItWorksPage />,
  <MainPage />,
  <AboutProjectPage />,
  //AboutScenarioPage,
  <OurBenefitsPage />
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
