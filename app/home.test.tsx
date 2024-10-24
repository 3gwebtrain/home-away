import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import HomePage from './page';
describe('Home page', () => {
  const searchParams = {
    category: '',
    search: '',
  };
  test('Home page title', async () => {
    render(<HomePage searchParams={searchParams} />);
  });
});
