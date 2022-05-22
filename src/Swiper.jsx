import React from 'react';

import MainPage from './pages/MainPage';
import AboutProjectPage from './pages/AboutProjectPage';
import AboutScenarioPage from './pages/AboutScenarioPage';
import HowItWorksPage from './pages/AboutScenarioPage';
import OurBenefitsPage from './pages/OurBenefitsPage';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, Mousewheel } from 'swiper';

const pages = [
    MainPage,
    AboutProjectPage,
    AboutScenarioPage,
    HowItWorksPage,
    OurBenefitsPage
];

const SwiperComponent = () => {
    return (
        <Swiper
            direction={'vertical'}
            pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                    return `<span class="${className}"><span class="swiper-pagination-bullet__slider-counter">${
                        index + 1
                    }</span></span>`;
                }
            }}
            mousewheel={true}
            scrollbar={{ draggable: true }}
            modules={[Pagination, Scrollbar, Mousewheel]}
            className='main-swiper'
        >
            {pages.map((page, i) => (
                <SwiperSlide key={i}>{page}</SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperComponent;
