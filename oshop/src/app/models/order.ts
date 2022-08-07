import { ShoppingCart } from "./shopping-cart";

export class Order{
    datePlaced !: number;
    items !: any[];

    constructor(public userId : string|unknown , public shipping: any , shoppigCart : ShoppingCart){
        this.datePlaced = new Date().getTime();


        this.items = shoppigCart.items.map(i=>{
            return {
              products: {
                title : i.title,
                imageUrl : i.imageUrl,
                price : i.price
              },
              quntity: i.quantity,
              totalPrice: i.totalPrice
            }
        })
    }
}