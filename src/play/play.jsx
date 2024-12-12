import React from 'react';

import { Players } from './players';

export function Play(props) {
  return (
    <main className='bg-secondary'>
      <Players userName={props.userName} />
      <h1>I want to cry </h1>
    </main>
  );
}
