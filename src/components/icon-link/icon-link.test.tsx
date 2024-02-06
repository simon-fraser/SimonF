import { render } from '@testing-library/react';
import { test, describe, expect } from 'vitest';
import React from 'react';
import IconLink from "./icon-link"

describe('components/icon0link', () => {
  test('will render correctly',() => {
    const {asFragment} = render(<IconLink href="http://example.com/" />)

    expect(asFragment()).toMatchSnapshot();
  })
})