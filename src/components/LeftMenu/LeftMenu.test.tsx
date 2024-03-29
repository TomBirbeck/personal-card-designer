import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

describe('tests for options', () => {
    test('layout options', () => {
        render(<LeftMenu/>)
        const option1 = screen.getByRole('option', {name: '1'})
        const option2 = screen.getByRole('option', {name: '2'})
        const option3 = screen.getByRole('option', {name: '3'})
        const option4 = screen.getByRole('option', {name: '4'})
        expect(option1).toBeInTheDocument()
        expect(option2).toBeInTheDocument()
        expect(option3).toBeInTheDocument()
        expect(option4).toBeInTheDocument()
    })

    test('size options', () => {
        render(<LeftMenu/>)
        const option300 = screen.getByRole('option', {name: '300 x 150'})
        const option330 = screen.getByRole('option', {name: '330 x 165'})
        const option370 = screen.getByRole('option', {name: '370 x 185'})
        const option400 = screen.getByRole('option', {name: '400 x 200'})
        const option450 = screen.getByRole('option', {name: '450 x 225'})
        expect(option300).toBeInTheDocument()
        expect(option330).toBeInTheDocument()
        expect(option370).toBeInTheDocument()
        expect(option400).toBeInTheDocument()
        expect(option450).toBeInTheDocument()
    })

    test('font options', () => {
        render(<LeftMenu/>)
        const optionAmatic = screen.getByRole('option', {name: 'Amatic SC'})
        const optionBona = screen.getByRole('option', {name: 'Bona Nova'})
        const optionCharm = screen.getByRole('option', {name: 'Charm'})
        const optionLibre = screen.getByRole('option', {name: 'Libre Baskerville'})
        const optionLobster = screen.getByRole('option', {name: 'Lobster'})
        const optionRajdhani = screen.getByRole('option', {name: 'Rajdhani'})
        const optionRoboto = screen.getByRole('option', {name: 'Roboto Condensed'})
        const optionSono = screen.getByRole('option', {name: 'Sono'})
        const optionTangerine = screen.getByRole('option', {name: 'Tangerine'})
        expect(optionAmatic).toBeInTheDocument()
        expect(optionBona).toBeInTheDocument()
        expect(optionCharm).toBeInTheDocument()
        expect(optionLibre).toBeInTheDocument()
        expect(optionLobster).toBeInTheDocument()
        expect(optionRajdhani).toBeInTheDocument()
        expect(optionRoboto).toBeInTheDocument()
        expect(optionSono).toBeInTheDocument()
        expect(optionTangerine).toBeInTheDocument()
    })

    test('font size options', () => {
        render(<LeftMenu/>)
        const option12 = screen.getByRole('option', {name: '12px'})
        const option14 = screen.getByRole('option', {name: '14px'})
        const option16 = screen.getByRole('option', {name: '16px'})
        const option18 = screen.getByRole('option', {name: '18px'})
        const option20 = screen.getByRole('option', {name: '20px'})
        const option24 = screen.getByRole('option', {name: '24px'})
        const option28 = screen.getByRole('option', {name: '28px'})
        const option32 = screen.getByRole('option', {name: '32px'})
        expect(option12).toBeInTheDocument()
        expect(option14).toBeInTheDocument()
        expect(option16).toBeInTheDocument()
        expect(option18).toBeInTheDocument()
        expect(option20).toBeInTheDocument()
        expect(option24).toBeInTheDocument()
        expect(option28).toBeInTheDocument()
        expect(option32).toBeInTheDocument()
    })

    test('font weight options', () => {
        render(<LeftMenu/>)
        const normal = screen.getByRole('option', {name: 'Normal'})
        const bold = screen.getByRole('option', {name: 'Bold'})
        expect(normal).toBeInTheDocument()
        expect(bold).toBeInTheDocument()
    })

    test('avatar options', () => {
        render(<LeftMenu/>)
        const cat = screen.getByRole('option', {name: 'Cat'})
        const dog = screen.getByRole('option', {name: 'Dog'})
        const hamster = screen.getByRole('option', {name: 'Hamster'})
        const panda = screen.getByRole('option', {name: 'Panda'})
        const pig = screen.getByRole('option', {name: 'Pig'})
        const deer = screen.getByRole('option', {name: 'Deer'})
        const bear = screen.getByRole('option', {name: 'Bear'})
        const raccoon = screen.getByRole('option', {name: 'Raccoon'})
        expect(cat).toBeInTheDocument()
        expect(dog).toBeInTheDocument()
        expect(hamster).toBeInTheDocument()
        expect(panda).toBeInTheDocument()
        expect(pig).toBeInTheDocument()
        expect(deer).toBeInTheDocument()
        expect(bear).toBeInTheDocument()
        expect(raccoon).toBeInTheDocument()
    })
})


  