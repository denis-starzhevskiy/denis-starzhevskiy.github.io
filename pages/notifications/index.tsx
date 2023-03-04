import { BreadCrumbs } from '@/components/elements/BreadCrumbs/BreadCrumbs';
import React from 'react';
import PageTitle from '@/components/elements/PageTitle';
import s from './notifications.module.scss';
import NotificationsLayout from '@/components/layouts/NotificationsLayout';
import Checkbox from '@/components/elements/CheckBox';
import Select from '@/components/elements/Select';

export default function CatalogPage() {
  return (
    <div className={'container'} style={{ marginBottom: 90 }}>
      <BreadCrumbs
        path={[
          { title: 'Головна', link: '/' },
          { title: 'Головна книги', link: '/' },
        ]}
      />
      <NotificationsLayout leftSide={<LeftSide />} rightSide={<RightSide />} />
    </div>
  );
}

const LeftSide = () => {
  const checkboxesValues = [
    'Помилка у тексті',
    'Передача перекладу іншому',
    'Отримання перекладу від іншого',
    'Зміна статусу замовлення реклами у соцмережах',
    'Вихід нових розділів',
    'Новий розділ у перекладі',
    'Зміна статусу перекладу',
    'Зняття розділу з передплати',
    'Коментар до глави',
    'Коментар до книги',
  ];

  return (
    <>
      <PageTitle title="Сповіщення" />
      {checkboxesValues.map((value) => (
        <Checkbox key={value} label={value} />
      ))}
    </>
  );
};

const RightSide = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ color: '#A5ACBD' }}>Показано 4 сповіщення</div>
        <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
          <div style={{ color: '#A5ACBD' }}>Показати сповіщення</div>
          <Select
            value={'назвою'}
            options={[
              'назвою',
              'датою створення',
              'датою оновлення',
              'рейтингами',
              'переглядами',
              'кількістю лайків',
              'кількістю безкоштовних сторінок',
              'кількістю сторінок',
              'кількістю розділів',
              'кількістю в закладках',
            ].map((value) => ({ label: value, value }))}
          />
        </div>
      </div>
      <div className={s.line} />
      <div>
        {new Array(4).fill(0).map((_, index) => (
          <div key={index} className={s.notification}>
            <h5 className={s.title}>Розділ 1</h5>
            <p className={s.content}>
              Вітання. Добро пожалувати в систему перекладів «UA Translate». Цей сайт призначений
              для професійних мов любительських перекладів будь-яких новелів, фанфіків, ранобе з
              різних мов.
            </p>
            <button className={s.deleteButton}>Видалити</button>
          </div>
        ))}
      </div>
    </div>
  );
};
