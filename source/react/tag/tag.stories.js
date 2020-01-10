import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Tag from './index';

import '../../../node_modules/@togakure/styles/lib/css/06-components/tag.css';

const stories = storiesOf('Tag', module);

stories.add('Padrão', () => <Tag>name</Tag>);

stories.add('Padrão com botão de exclusão', () => <Tag onRemove={action('removed')}>name</Tag>);
