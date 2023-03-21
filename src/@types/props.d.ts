export interface IProductProps{
    id: string,
    name: string,
    type: srting,
    description: string,
    price: number,
    promotionPrice: number,
    image: string
}

export interface IProduct{
    product: IProductProps
}