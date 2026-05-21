export class User {
  constructor(private readonly id: string, private readonly email: string) {}

  getId(): string {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }
}
