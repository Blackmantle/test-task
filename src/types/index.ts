export interface ILoginFields {
    email: string,
    password: string,
    isPasswordSaved: boolean,
}

export interface IProduct {
    productPreview: string,
    productName: string,
    productQuantity: number,
    productQuantityType: string,
    priceForOne: number,
}

export interface IResults {
    isLoading: boolean,
    data: IProduct[],
}