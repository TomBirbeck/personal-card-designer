export type Hello = {
    name: string
}

export type CardContext = {
    layout: number,
    height: number,
    width: number,
    font: string,
    fontColor: string,
    fontSize: number,
    fontWeight: number,
    textAlign: string,
    border: boolean,
    borderStyle: string,
    borderWidth: number,
    borderRadius: number,
    borderColor: string,
    backgroundStyle: string,
    backgroundColorOne: string,
    backgroundColorTwo: string,
}

export type PreviewCardContext = {
    backgroundStyle: string,
    backgroundColorOne: string,
    backgroundColorTwo: string,
    border: boolean,
    borderStyle?: string,
    borderRadius?: number,
    borderWidth?: number,
    borderColor?: string,
    font?: string,
    fontSize?: number,
    fontColor?: string,
    fontWeight?: number,
}

export type previewCards = {
    id: string,
    backgroundStyle: string,
    backgroundColorOne: string,
    backgroundColorTwo: string,
    border: boolean,
    borderStyle?: string,
    borderRadius?: number,
    borderWidth?: number,
    borderColor?: string,
    font?: string,
    fontSize?: number,
    fontColor?: string,
    fontWeight?: number,
}

export interface CardIProps {
    name: string,
    tagline: string,
    cardRef: React.MutableRefObject<null>
}