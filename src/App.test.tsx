import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';
describe('Portfolio', () => {
  it('renders identity and primary content', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('FULL-STACK');
    expect(screen.getByRole('heading', { name: 'Built for real workflows.' })).toBeInTheDocument();
    expect(screen.getByText('mahadi.jubaer@alora.cloud')).toBeInTheDocument();
  });
  it('opens and closes mobile navigation', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: 'Open navigation' }));
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Close navigation' }));
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument();
  });
});
