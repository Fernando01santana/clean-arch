export type UserPropos = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export class UserEntity {
  constructor(public readonly propos: UserPropos) {
    this.propos.createdAt = this.propos.createdAt ?? new Date();
  }

  getEmail(): string {
    return this.propos.email;
  }

  getPassword(): string {
    return this.propos.password;
  }

  getCreatedAt(): Date {
    return this.propos.createdAt;
  }

  getName(): string {
    return this.propos.name;
  }
}
