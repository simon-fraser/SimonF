import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import React from 'react';
import Peek from './peek'

describe('components/peek', () => {
  it('will render correctly', () => {
    const {asFragment} = render(<Peek />)

    expect(asFragment()).toMatchSnapshot()
  })
})