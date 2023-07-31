export interface IProduct {
    _id: string;
    title: string;
    description: string;
    price: number;
    type: IType;
    imageUrl: string;
}

export type IType = 'bike'|'accesorie'|'apparel';