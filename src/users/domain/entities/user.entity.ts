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
}
