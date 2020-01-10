import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

import Button from './index';
import Icon from '../icon';

import '../../../node_modules/@togakure/styles/lib/css/06-components/button.css';

const stories = storiesOf('Button', module);

stories.add(
  'Padrão',
  () => (
    <div>
      <Button onClick={action('clicked')}>Default</Button>
      &nbsp;
      <Button styleType="primary">Primary</Button>
      &nbsp;
      <Button styleType="secondary">Secondary</Button>
      &nbsp;
    </div>
  ),
  {
    info: 'This is the basic usage with the button.',
  }
);

stories.add('Estilo de contorno', () => (
  <div>
    <Button outline>Default</Button>
    &nbsp;
    <Button styleType="primary" outline>
      Primary
    </Button>
    &nbsp;
    <Button styleType="secondary" outline>
      Secondary
    </Button>
    &nbsp;
  </div>
));

stories.add('Tamanhos', () => (
  <div>
    <Button size="mini">Mini</Button>
    &nbsp;
    <Button size="small">Small</Button>
    &nbsp;
    <Button>Medium</Button>
    &nbsp;
    <Button size="large">Large</Button>
    &nbsp;
    <Button styleType="primary" size="large">
      Large
    </Button>
    &nbsp;
    <Button styleType="primary">Medium</Button>
    &nbsp;
    <Button styleType="primary" size="small">
      Small
    </Button>
    &nbsp;
    <Button styleType="primary" size="mini">
      Mini
    </Button>
    &nbsp;
  </div>
));

stories.add('Com ícone', () => (
  <div>
    <Button styleType="primary">
      <Icon size={18} /> Primary Medium
    </Button>
    &nbsp;
    <Button styleType="secondary" size="small">
      Secondary Small <Icon size={18} />
    </Button>
    &nbsp;
  </div>
));

stories.add('Ícone com estilo circular', () => (
  <div>
    <Button size="mini" circle>
      <Icon size="14px" />
    </Button>
    &nbsp;
    <Button size="mini" circle>
      <Icon />
    </Button>
    &nbsp;
    <Button size="mini" circle>
      <Icon size="36px" />
    </Button>
    &nbsp;
    <Button size="mini" circle>
      <Icon size="50px" />
    </Button>
    <br />
    <br />
    <Button styleType="primary" size="small" circle>
      <Icon size="14px" />
    </Button>
    &nbsp;
    <Button styleType="primary" size="small" circle>
      <Icon />
    </Button>
    &nbsp;
    <Button styleType="primary" size="small" circle>
      <Icon size="36px" />
    </Button>
    &nbsp;
    <Button styleType="primary" size="small" circle>
      <Icon size="50px" />
    </Button>
    <br />
    <br />
    <Button styleType="secondary" circle>
      <Icon size="14px" />
    </Button>
    &nbsp;
    <Button styleType="secondary" circle>
      <Icon />
    </Button>
    &nbsp;
    <Button styleType="secondary" circle>
      <Icon size="36px" />
    </Button>
    &nbsp;
    <Button styleType="secondary" circle>
      <Icon size="50px" />
    </Button>
  </div>
));

stories.add('Ativo', () => (
  <div>
    <Button active>Default</Button>
    &nbsp;
    <Button styleType="primary" active>
      Primary
    </Button>
    &nbsp;
    <Button styleType="secondary" active>
      Secondary
    </Button>
    &nbsp;
  </div>
));

stories.add('Bloco', () => (
  <div>
    <Button block>Default</Button>
    &nbsp;
    <Button styleType="primary" block>
      Primary
    </Button>
    &nbsp;
    <Button styleType="secondary" block>
      Secondary
    </Button>
    &nbsp;
  </div>
));

stories.add('Arredondado', () => (
  <div>
    <Button rounded>Default</Button>
    <br />
    <br />
    <Button styleType="primary" disabled rounded>
      Primary
    </Button>
    <br />
    <br />
    <Button styleType="secondary" outline rounded>
      Secondary
    </Button>
  </div>
));

stories.add('Desabilitado', () => (
  <div>
    <Button disabled={boolean('Disabled', false)}>{text('Text (default)', 'Default')}</Button>
    &nbsp;
    <Button styleType="primary" disabled={boolean('Disabled', false)}>
      {text('Text (primary)', 'Primary')}
    </Button>
    &nbsp;
    <Button styleType="secondary" disabled={boolean('Disabled', false)} rounded>
      {text('Text (rounded)', 'Rounded')}
    </Button>
    &nbsp;
    <Button styleType="primary" disabled={boolean('Disabled', false)} outline>
      {text('Text (outline)', 'Outline')}
    </Button>
    <br />
    <br />
    <Button styleType="secondary" disabled={boolean('Disabled', false)} block>
      {text('Text (block)', 'Outline')}
    </Button>
  </div>
));

stories.add('Espera de um carregando', () => (
  <div>
    <Button loading={boolean('Loading', false)}>{text('Text (default)', 'Default')}</Button>
    &nbsp;
  </div>
));
