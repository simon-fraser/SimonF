import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import React from 'react';
import Hero from './hero'

describe('components/hero', () => {
  it('will render correctly', () => {
    const {asFragment} = render(<Hero />)

    expect(asFragment()).toMatchSnapshot()
  })
})