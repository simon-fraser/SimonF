import { test, describe, expect } from 'vitest';
import clx from './clx';

describe('clx',()=>{

  test('strings', () => {
    expect(clx('')).toEqual('');
    expect(clx('foo')).toEqual('foo');
    expect(clx(true && 'foo')).toEqual('foo');
    expect(clx(false && 'foo')).toEqual('');
  });

  test('strings (variadic)', () => {
    expect(clx('')).toEqual('');
    expect(clx('foo', 'bar')).toEqual('foo bar');
    expect(clx(true && 'foo', false && 'bar', 'baz')).toEqual('foo baz');
    expect(clx(false && 'foo', 'bar', 'baz', '')).toEqual('bar baz');
  });

});