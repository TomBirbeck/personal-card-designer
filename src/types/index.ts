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
    borderStyle?: string | undefined,
    borderRadius?: number,
    borderWidth?: number,
    borderColor?: string,
    font?: string,
    fontSize?: number,
}