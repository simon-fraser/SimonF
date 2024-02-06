import { render } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import React from 'react';
import Splash from './Splash';

describe('components/Splash', () => {
  test('will render correctly',() => {
    const {asFragment} = render(<Splash />)

    expect(asFragment()).toMatchSnapshot();
  })
})