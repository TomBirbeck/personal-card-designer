import { render, screen } from '@testing-library/react';
import TopMenu from '.';

describe('check for background style options', () => {

    test('renders correct number of option elements', () => {
      render(<TopMenu />);
      const selections = screen.getAllByRole('option');
      expect(selections.length).toBe(4);
    });

    test('renders option header', () => {
      render(<TopMenu />);
      const style = screen.getByRole('option', {name: 'Background Style' });
      const solid = screen.getByRole('option', {name: 'Solid'})
      expect(style).toBeInTheDocument();
      expect(solid).toBeInTheDocument();
    });

    test('renders solid option', () => {
      render(<TopMenu />);
      const solid = screen.getByRole('option', {name: 'Solid'})
      expect(solid).toBeInTheDocument();
    });

    test('renders top - bottom gradient option', () => {
      render(<TopMenu />);
      const topGrad = screen.getByRole('option', {name: 'Gradient top - bottom' });
      expect(topGrad).toBeInTheDocument();
    });

    test('renders top - bottom gradient option', () => {
      render(<TopMenu />);
      const leftGrad = screen.getByRole('option', {name: 'Gradient left - right' });
      expect(leftGrad).toBeInTheDocument();
    });

})

describe('checks for colour pickers', () => {
    test('renders background 1', () => {
        render(<TopMenu/>);
        const picker = screen.getByText('Background Colour 1')
        expect(picker).toBeInTheDocument()
    })
    test('renders background 2', () => {
        render(<TopMenu/>);
        const picker = screen.getByText('Background Colour 2')
        expect(picker).toBeInTheDocument()
    })

})
