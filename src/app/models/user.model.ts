export class Customer{
  constructor(public userName: string, public userPassword: string, public products: object[]){}

  addProduct(selectedProduct, addQuantity){
    for(let keg of this.kegs){
      if(keg.kegName.includes(selectedKeg.kegName)){
        keg.quantity += addQuantity;
        console.log("Already there");
      });
    }

    selectedKeg.quantity = quantity;
    this.kegs.push(selectedKeg);
    console.log(this.kegs)
  }
}
