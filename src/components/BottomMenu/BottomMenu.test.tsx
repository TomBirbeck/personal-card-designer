import {screen, render} from '@testing-library/react'
import BottomMenu from '.'

test('border checkbox renders', () => {
    render(<BottomMenu/>)
    const border = screen.getByRole('checkbox')
    expect(border).toBeInTheDocument()
})

describe('select options render', () => {
    test('border styles list renders', () => {
        render(<BottomMenu/>)
        const style = screen.getByRole('option', {name: 'Border Style'})
        const solid = screen.getByRole('option', {name: 'Solid'})
        const dashed = screen.getByRole('option', {name: 'Dashed'})
        const dotted = screen.getByRole('option', {name: 'Dotted'})
        const ridge = screen.getByRole('option', {name: 'Ridge'})
        expect(style).toBeInTheDocument()
        expect(solid).toBeInTheDocument()
        expect(dashed).toBeInTheDocument()
        expect(dotted).toBeInTheDocument()
        expect(ridge).toBeInTheDocument()
    })

    test('border width list renders', () => {
        render(<BottomMenu/>)
        const width = screen.getByRole('option', {name: 'Border Width'})
        const border1 = screen.getByRole('option', {name: '1px'})
        const border2 = screen.getByRole('option', {name: '2px'})
        const border3 = screen.getByRole('option', {name: '3px'})
        const border4 = screen.getByRole('option', {name: '4px'})
        const border5 = screen.getByRole('option', {name: '5px'})
        expect(width).toBeInTheDocument()
        expect(border1).toBeInTheDocument()
        expect(border2).toBeInTheDocument()
        expect(border3).toBeInTheDocument()
        expect(border4).toBeInTheDocument()
        expect(border5).toBeInTheDocument()
    })
    test('border width list has correct values', () => {
        render(<BottomMenu/>)
        const width = screen.getByRole('option', {name: 'Border Width'})
        const border1 = screen.getByRole('option', {name: '1px'})
        const border2 = screen.getByRole('option', {name: '2px'})
        const border3 = screen.getByRole('option', {name: '3px'})
        const border4 = screen.getByRole('option', {name: '4px'})
        const border5 = screen.getByRole('option', {name: '5px'})
        expect(width).toHaveValue('1')
        expect(border1).toHaveValue('1')
        expect(border2).toHaveValue('2')
        expect(border3).toHaveValue('3')
        expect(border4).toHaveValue('4')
        expect(border5).toHaveValue('5')
    })

    test('border radius list renders', () => {
        render(<BottomMenu/>)
        const radius = screen.getByRole('option', {name: 'Border Radius'})
        const radius1 = screen.getByRole('option', {name: '8px'})
        const radius2 = screen.getByRole('option', {name: '16px'})
        const radius3 = screen.getByRole('option', {name: '24px'})
        const radius4 = screen.getByRole('option', {name: '32px'})
        expect(radius).toBeInTheDocument()
        expect(radius1).toBeInTheDocument()
        expect(radius2).toBeInTheDocument()
        expect(radius3).toBeInTheDocument()
        expect(radius4).toBeInTheDocument()
   
    })

    test('border radius list renders', () => {
        render(<BottomMenu/>)
        const radius = screen.getByRole('option', {name: 'Border Radius'})
        const radius1 = screen.getByRole('option', {name: '8px'})
        const radius2 = screen.getByRole('option', {name: '16px'})
        const radius3 = screen.getByRole('option', {name: '24px'})
        const radius4 = screen.getByRole('option', {name: '32px'})
        expect(radius).toHaveValue('0')
        expect(radius1).toHaveValue('0.5')
        expect(radius2).toHaveValue('1')
        expect(radius3).toHaveValue('1.5')
        expect(radius4).toHaveValue('2')
        
    })
})

test('border color selector renders', () => {
    render(<BottomMenu/>)
    const header = screen.getByText('Border Colour')
    const input = screen.getByTestId('border-color-picker')
    expect(header).toBeInTheDocument()
    expect(input).toBeInTheDocument()
})