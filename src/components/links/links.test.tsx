import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import React from 'react';
import Links from './links'

describe('components/links', () => {
  it('will render correctly',() => {
    const {asFragment} = render(<Links />)

    expect(asFragment()).toMatchSnapshot();
  })
})