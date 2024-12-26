
export type RootStackParamList = {
    Products: undefined;
    Cart: { cart: Product[] };
  };
  
  export type Product = {
    id: string;
    name: string;
    price: number;
  };