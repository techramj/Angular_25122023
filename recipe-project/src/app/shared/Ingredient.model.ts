export class Ingredient{
    constructor(public name:string, public amount:number, public uom:string){
        this.name = name;
        this.amount = amount;
        this.uom = uom;
    }
}