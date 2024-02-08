import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import React from 'react';
import IconLink from "./icon-link"

describe('components/icon-link', () => {
  it('will render correctly',() => {
    const {asFragment} = render(<IconLink href="http://example.com/" />)

    expect(asFragment()).toMatchSnapshot();
  })
})