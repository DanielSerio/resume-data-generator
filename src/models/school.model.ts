import Address from "./address.interface";
import Location from "./location.model";

export default class School extends Location {
  constructor(
    public address: Address,
    public url: string,
    public degreeTitle: string,
    public degreeYear: number
  ) { 
    super(address);
  }
}