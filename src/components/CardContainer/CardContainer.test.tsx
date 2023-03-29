import { screen, render } from "@testing-library/react"
import CardContainer from "."

test('card renders', () => {
    render(<CardContainer/>)
    const card = screen.getByTestId('cardInContainer')
    expect(card).toBeInTheDocument()
})

describe('check for input elements', () => {
    test('name input renders', () => {
        render(<CardContainer/>)
        const name = screen.getByText("Name")
        const nameInput = screen.getByPlaceholderText("Enter Name")
        expect(name).toBeInTheDocument()
        expect(nameInput).toBeInTheDocument()
    })

    test('tagline input renders', () => {
        render(<CardContainer/>)
        const tagline = screen.getByText("Tagline")
        const taglineInput = screen.getByPlaceholderText("Enter Tagline")
        expect(tagline).toBeInTheDocument()
        expect(taglineInput).toBeInTheDocument()
    })
})

describe('buttons render', () => {
    test('save button renders', () => {
        render(<CardContainer/>)
        const save = screen.getByRole('button', {name: "Save"})
        expect(save).toBeInTheDocument()
    })

    test('download button renders', () => {
        render(<CardContainer/>)
        const download = screen.getByRole('button', {name: "Download"})
        expect(download).toBeInTheDocument()
    })
})
