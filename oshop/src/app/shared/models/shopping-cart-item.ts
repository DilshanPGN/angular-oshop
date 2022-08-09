import { Product } from "./product";

export class ShoppingCartItem {
    

    key!: string;
    title!: string;
    imageUrl!: string;
    price!:number;
    quantity!: number;

    constructor(init?: Partial<ShoppingCartItem>){//above param means "init can be an object that looks like ShoppingCartItem object"
        Object.assign(this , init);//copy all the propertise that we get from this object from firebase
        // into this object
        

    }
    
    get totalPrice() {
        return this.price * this.quantity;
    }
}




