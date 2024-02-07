import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import React from 'react';
import Splash from './splash';

describe('components/splash', () => {
  it('will render correctly',() => {
    const {asFragment} = render(<Splash />)

    expect(asFragment()).toMatchSnapshot();
  })
})