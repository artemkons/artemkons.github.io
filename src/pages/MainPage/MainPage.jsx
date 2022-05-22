import React from 'react';
import Button from '../../components/Button';

import './main-page.sass';

const MainPage = () => {
    return (
        <>
            <div className='main-page'>
                <h1 className='main-page__header'>MANUSPECT</h1>
                <p className='main-page__subtitle'>
                    Универсальный инструмент для автоматизации однотипных
                    действий при работе с пк или смартфоном
                </p>
                <p className='main-page__text'>
                    У каждого человека работающего за компьютером регулярно
                    возникают однотипные задачи. И к сожалению, по мере роста
                    таких задач, приходится тратить все больше нашего
                    драгоценного времени. Мы предлагаем решение данной проблемы,
                    программой, способной частично или полностью сократить
                    затрачиваемое время на решение подобных задач.
                </p>
            </div>
            <Button className='button-primary'>Хочу следить за проектом</Button>
        </>
    );
};

export default MainPage;
