export class Customer{
  constructor(public userName: string, public userPassword: string, public products: object[]){}

  addProduct(selectedProduct){
    this.products.push(selectedProduct);
    console.log(this.products)
  }
}
