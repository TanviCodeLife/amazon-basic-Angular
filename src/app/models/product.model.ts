export class Keg{
  message: string = null;
  constructor(
    public kegName: string,
    public brand: string,
    public price: number,
    public alchoholContent: number,
    public quantity: number) {};

    sellPint(saleQuantity){
      this.message = null;
      if(!((this.quantity - saleQuantity) < 0)){
        this.quantity -= saleQuantity;
      }
      else {
        console.log("out of beer");
      this.message = "Not enough left to sell that much!";
      // setTimeout(this.message = null, 5000);
      }
    }

    

    editKeg(selectedKeg, addQuantity){
      for(let keg of this.kegs){
        if(keg.kegName.includes(selectedKeg.kegName)){
          keg.quantity += addQuantity;
          console.log("Already there");
        }
}
