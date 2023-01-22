export class item {
    itemId:string;
    iName:string;
    iPrice:number;
    discount:number;
    rate:number;
    category:string;
    iPic:string;
    description:string;
  static item: any;

    constructor(itemId:string,iName:string,iPrice:number,discount:number,rate:number,category:string,iPic:string,description:string)
    {
        this.itemId = itemId;
        this.category = category;
        this.discount = discount;
        this.iName = iName;
        this.iPic = iPic;
        this.iPrice = iPrice;
        this.rate = rate;
        this.description = description;
    }
}