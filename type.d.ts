export interface ProductProps{
    id:string;
    title: string;
    price: string;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: string;
        count: string;
    }
}

export interface StoreProducts{
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity: number;
}

export interface stateProps{
    productData: [];
    userInfo: [];
    userInfo: null | string;
    next: any;
}