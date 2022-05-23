import React from 'react';
//import Button from '../../components/Button';

import "./about-project-page.sass"

const AboutProjectPage = () => {
  return (
    <>
      <div className='about-project-page'>
        <h1 className='about-project-page__title'>О проекте</h1>
        <p className='about-project-page__subtitle'>
          Так как проблема затрагивает слишком много предметных
          областей, было принято решение создать платформу
          агрегирующую возможности по созданию работающих решений.
        </p>
        <h2 className="about-project-page__for-users-title">Для пользователей</h2>
        <p className="about-project-page__for-users-text">
          Можно находить готовые решения Создавать заявки для
          автоматизации и развиваться вместе с сообщество
        </p>
        <h2 className="about-project-page__for-developers-title">Для разработчиков</h2>
        <p className="about-project-page__for-developers-text">
          Можно создавать больше эффективных сценариев автоматизации и
          получать оплату за свой труд Видеть заявки под которыми
          подписалось наибольшее кол-во реальных пользователей и
          выбирать только самое актуальное для автоматизации.
        </p>
        <p className='about-project-page__last'>
          Проанализировав потребность пользоватей, было решено
          встроить в платформу Git подобную систему версий.
        </p>
      </div>
      {/* FIXME не вмещается на мобилке */}
      {/* <Button>Хочу следить за проектом</Button> */}
    </>
  );
};

export default AboutProjectPage;
