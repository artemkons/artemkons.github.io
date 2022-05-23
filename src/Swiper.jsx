import React from 'react';

import MainPage from './pages/MainPage/MainPage';
import AboutProjectPage from './pages/AboutProjectPage/AboutProjectPage';
// отключено до появления видео
// import AboutScenarioPage from './pages/AboutScenarioPage';
import HowItWorksPage from './pages/HowItWorksPage/HowItWorksPage';
import OurBenefitsPage from './pages/OurBenefitsPage/OurBenefitsPage';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, Mousewheel, FreeMode } from 'swiper';
import { useMediaQuery } from '@chakra-ui/react';

const pages = [
    <MainPage />,
    <AboutProjectPage />,
    //AboutScenarioPage,
    <HowItWorksPage />,
    <OurBenefitsPage />
];

const SwiperComponent = () => {
    const [isMobile] = useMediaQuery('(max-width: 450px)');

    return isMobile ? (
        <>{[pages]}</>
    ) : (
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
            mousewheel={{ sensitivity: 0.5 }}
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
