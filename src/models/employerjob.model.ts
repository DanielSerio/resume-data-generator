import Job from "./job.interface";

export default class EmployerJob implements Job {
  constructor(
    public title: string,
    public description: string
  ) {}
}