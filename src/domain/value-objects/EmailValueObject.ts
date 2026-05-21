export class EmailValueObject {
  constructor(private readonly email: string) {
    if (!this.validate(email)) {
      throw new Error('Invalid email address');
    }
  }

  private validate(email: string): boolean {
    const re = /^\S+@\S+\.\S+$/;
    return re.test(email);
  }

  getEmail(): string {
    return this.email;
  }
}
