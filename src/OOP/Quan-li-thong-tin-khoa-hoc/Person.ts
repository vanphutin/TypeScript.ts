export class Person {
  protected lastName: string;
  protected firstName: string;

  public constructor(lastName?: string, firstName?: string) {
    this.lastName = lastName || "";
    this.firstName = firstName || "";
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public toString(): string {
    return `Person: ${this.firstName} ${this.lastName}`;
  }
}
