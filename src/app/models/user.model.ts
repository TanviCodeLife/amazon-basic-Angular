export class Customer{
  constructor(public userName: string, public userPassword: string, public products: object[]){}

  addProduct(selectedProduct, addQuantity){
    for(let product of this.products){
      if(product.productName.includes(selectedProduct.productName)){
        product.quantity += addQuantity;
        console.log("Already there");
      });
    }

    selectedProduct.quantity = quantity;
    this.products.push(selectedProduct);
    console.log(this.products)
  }
}
