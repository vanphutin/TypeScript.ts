export abstract class Person {
  protected lastName: string;
  protected firstName: string;

  constructor(lastName: string, firstName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getLastName(): string {
    return this.lastName;
  }
  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  public getFirstName(): string {
    return this.firstName;
  }
  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public toString(): string {
    return `last name: ${this.lastName}, fisrt name: ${this.firstName} `;
  }
}
