export class Customer{
  constructor(public userName: string, public products: object[]){}

  addProduct(selectedProduct){
    this.products.push(selectedProduct);
  }
}
