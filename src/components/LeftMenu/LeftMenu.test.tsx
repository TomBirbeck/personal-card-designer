import {screen, render} from '@testing-library/react'
import LeftMenu from '.'

describe('testing for select option headers', () => {
    test('layout header renders', () => {
        render(<LeftMenu/>)
        const header = screen.getByRole('option', {name: 'Layout'})
        expect(header).toBeInTheDocument()
    })
    test('layout header renders', () => {
        render(<LeftMenu/>)
        const header = screen.getByRole('option', {name: 'Size'})
        expect(header).toBeInTheDocument()
    })
    test('layout header renders', () => {
        render(<LeftMenu/>)
        const header = screen.getByRole('option', {name: 'Font'})
        expect(header).toBeInTheDocument()
    })
    test('layout header renders', () => {
        render(<LeftMenu/>)
        const header = screen.getByRole('option', {name: 'Font Size'})
        expect(header).toBeInTheDocument()
    })
    test('layout header renders', () => {
        render(<LeftMenu/>)
        const header = screen.getByRole('option', {name: 'Font Weight'})
        expect(header).toBeInTheDocument()
    })
    test('layout header renders', () => {
        render(<LeftMenu/>)
        const header = screen.getByRole('option', {name: 'Choose Avatar'})
        expect(header).toBeInTheDocument()
    })
    test('layout header renders', () => {
        render(<LeftMenu/>)
        const header = screen.getByText('Font Colour')
        expect(header).toBeInTheDocument()
    })
})