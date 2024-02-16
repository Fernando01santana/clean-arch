import { Entity } from '../../../shared/domain/entities/entity';

export type UserProps = {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
};

export class UserEntity extends Entity<UserProps> {
  constructor(
    public readonly props: UserProps,
    id?: string,
  ) {
    super(props, id);
    this.props.createdAt = this.props.createdAt ?? new Date();
  }

  updateName(value: string): void {
    this.name = value;
  }

  updatePassword(value: string): void {
    this.password = value;
  }

  updateEmail(value: string): void {
    this.email = value;
  }

  get email(): string {
    return this.props.email;
  }

  private set email(value: string) {
    this.email = value;
  }
  private get password(): string {
    return this.props.password;
  }

  private set password(value: string) {
    this.props.password = value;
  }
  get createdAt(): Date {
    return this.props.createdAt;
  }

  get name(): string {
    return this.props.name;
  }
  private set name(value: string) {
    this.props.name = value;
  }
}
