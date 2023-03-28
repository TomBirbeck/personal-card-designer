import { getByText, render, screen } from '@testing-library/react';
import Header from '.';

test('header renders', () => {
    render(<Header/>)
    const header = screen.getByText('U-Card')
    expect(header).toBeInTheDocument()
})