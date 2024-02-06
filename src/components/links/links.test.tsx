import { render } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import React from 'react';
import Links from './links'

describe('components/icon0link', () => {
  test('will render correctly',() => {
    const {asFragment} = render(<Links />)

    expect(asFragment()).toMatchSnapshot();
  })
})