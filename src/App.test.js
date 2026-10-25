// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NftCog title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NftCog/i);
    expect(titleElement).toBeInTheDocument();
});
