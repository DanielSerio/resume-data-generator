import Address from "./address.interface";
import Job from "./job.interface";
import Location from "./location.model";

export default class Employer extends Location {
  constructor(
    public address: Address,
    public url: string,
    public startDate: string,
    public endDate: string,
    public jobs: Job[]
  ) {
    super(address);
  }
}