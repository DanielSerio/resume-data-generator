import Address from "./address.interface";

export default abstract class Location {
  constructor(
    public address: Address
  ) {}
}

