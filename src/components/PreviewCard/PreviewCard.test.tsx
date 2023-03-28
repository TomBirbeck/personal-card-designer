import {screen, render} from '@testing-library/react'
import { stringify } from 'querystring'
import PreviewCard from '.'

test('card renders with correct settings', () => {
    const cardProps = {
        backgroundStyle: 'gradLeft',
        backgroundColorOne: '#ffffff',
        backgroundColorTwo: '#000000',
        border: true,
        borderStyle: 'solid',
        borderRadius: 0.5,
        borderWidth: 2,
        borderColor: '#000000',
        font: 'Bona Nova',
        fontSize: 16,
        fontColor: '#a52a2a',
        fontWeight: 700,
    }
    render(<PreviewCard 
        backgroundStyle={cardProps.backgroundStyle}
        backgroundColorOne={cardProps.backgroundColorOne}
        backgroundColorTwo={cardProps.backgroundColorTwo}
        border={cardProps.border}
        borderStyle={cardProps.borderStyle}
        borderWidth={cardProps.borderWidth}
        borderColor={cardProps.borderColor}
        borderRadius={cardProps.borderRadius}
        font={cardProps.font}
        fontSize={cardProps.fontSize}
        fontWeight={cardProps.fontWeight}
        fontColor={cardProps.fontColor}
        />)
        const card = screen.getByTestId('gradLeftTest')
        console.log(card.style)
        expect(card).toBeInTheDocument()
        expect(card.style.border).toBeTruthy()
        expect(card).toHaveStyle('borderRadius: 0.5rem')
        expect(card).toHaveStyle('backgroundImage: linear-gradient(to right, #ffffff, #000000)')
        expect(card).toHaveStyle('borderStyle: solid')
        expect(card).toHaveStyle('borderWidth: 2px')
        expect(card).toHaveStyle('borderColor: #000000')
})