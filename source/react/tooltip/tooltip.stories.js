import React from 'react';
import { storiesOf } from '@storybook/react';

import Tooltip from './index';

import '../../../node_modules/@togakure/styles/lib/css/06-components/tooltip.css';

const stories = storiesOf('Tooltip', module);

stories.add('default', () => (
  <div style={{ margin: '100px auto', maxWidth: 400 }}>
    <Tooltip content="Conteúdo do tooltip 1">texto de exemplo 1</Tooltip>&nbsp;
    <Tooltip content={<div style={{ color: 'red' }}>Conteúdo do tooltip 2</div>}>texto de exemplo 2</Tooltip>
    <br /><br />
    <Tooltip content="Conteúdo do tooltip 3" position="bottom">texto de exemplo 3</Tooltip>&nbsp;&nbsp;
    <Tooltip content="Conteúdo do tooltip 4" position="left">texto de exemplo 4</Tooltip>&nbsp;&nbsp;
    <Tooltip content="Conteúdo do tooltip 5" position="right">texto de exemplo 5</Tooltip>
  </div>
));

stories.add('left', () => (
  <div>
    <div style={{ margin: '100px auto', maxWidth: 400 }}>
      <Tooltip content="Conteúdo do tooltip 1" position="left">texto de exemplo 1</Tooltip>
    </div>
    <Tooltip content="Conteúdo do tooltip 2" position="left">texto de exemplo 2</Tooltip>
  </div>
));

stories.add('right', () => (
  <div>
    <div style={{ margin: '100px auto', maxWidth: 400 }}>
      <Tooltip content="Conteúdo do tooltip 1" position="right">texto de exemplo 1</Tooltip>
    </div>
    <Tooltip content="Conteúdo do tooltip 2" position="right">texto de exemplo 2</Tooltip>
  </div>
));

stories.add('top', () => (
  <div>
    <div style={{ margin: '100px auto', maxWidth: 400 }}>
      <Tooltip content="Conteúdo do tooltip 1" position="top">texto de exemplo 1</Tooltip>
    </div>
    <Tooltip content="Conteúdo do tooltip 2" position="top">texto de exemplo 2</Tooltip>
  </div>
));

stories.add('bottom', () => (
  <div>
    <div style={{ margin: '100px auto', maxWidth: 400 }}>
      <Tooltip content="Conteúdo do tooltip 1" position="bottom">texto de exemplo 1</Tooltip>
    </div>
    <Tooltip content="Conteúdo do tooltip 2" position="bottom">texto de exemplo 2</Tooltip>
  </div>
));
