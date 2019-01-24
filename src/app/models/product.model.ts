export class Keg{
  message: string = null;
  constructor(
    public kegName: string,
    public brand: string,
    public price: number,
    public alchoholContent: number,
    public quantity: number) {};
  }
