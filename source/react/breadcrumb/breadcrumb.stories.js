import React from 'react';
import { storiesOf } from '@storybook/react';

import Breadcrumb from './index';
import BreadcrumbItem from './elements/breadcrumb-item';

import '../../../node_modules/@togakure/styles/lib/css/06-components/breadcrumb.css';

const stories = storiesOf('Breadcrumb', module);

stories.add('Padrão com lista de objetos', () => (
  <Breadcrumb
    items={[
      {
        key: 'home',
        text: 'Home',
        url: '/home',
        handleClick: () => {},
      },
      {
        key: 'level1',
        text: 'Level 1',
        url: '/level1',
        handleClick: () => {},
      },
      {
        key: 'level2',
        text: 'Level 2',
      },
    ]}
  />
));

stories.add('Padrão escuro', () => (
  <Breadcrumb
    styleType="dark"
    items={[
      {
        key: 'home',
        text: 'Home',
        url: '/home',
        handleClick: () => {},
      },
      {
        key: 'level1',
        text: 'Level 1',
        url: '/level1',
        handleClick: () => {},
      },
      {
        key: 'level2',
        text: 'Level 2',
      },
    ]}
  />
));

stories.add('Padrão declarando os filhos', () => (
  <Breadcrumb>
    <BreadcrumbItem url="/home">Home</BreadcrumbItem>
    <BreadcrumbItem url="/level1">Level 1</BreadcrumbItem>
    <BreadcrumbItem>Level 2</BreadcrumbItem>
  </Breadcrumb>
));
