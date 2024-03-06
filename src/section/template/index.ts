export type TemplateInput = {
    template_name: string
    template_type_id: number
    specification: any
}

export enum ElementType {
    Text = 1,
    Image = 2,
    Canvas = 3
}

export enum ElementFont {
    Font_Sans_8_Black = 10,
    Font_Sans_10_Black = 11,
    Font_Sans_12_Black = 12,
    Font_Sans_14_Black = 13,
    Font_Sans_16_Black = 14,
    Font_Sans_32_Black = 15,
    Font_Sans_64_Black = 16,
    Font_Sans_128_Black = 17,
    Font_Sans_8_White = 20,
    Font_Sans_16_White = 24,
    Font_Sans_32_White = 25,
    Font_Sans_64_White = 26,
    Font_Sans_128_White = 27
}

export enum ElementSource {
    Fixed = 1,
    Dynamic = 2
}