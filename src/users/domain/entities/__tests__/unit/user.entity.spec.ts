import { faker } from '@faker-js/faker';
import { UserEntity, UserPropos } from '../../user.entity';
describe('User entities', () => {
  let props: UserPropos;
  let sut: UserEntity;

  beforeEach(() => {
    props = {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      password: faker.internet.password(),
    };

    sut = new UserEntity(props);
  });
  it('should constructor method', () => {
    expect(sut.propos.name).toEqual(props.name);
    expect(sut.propos.email).toEqual(props.email);
    expect(sut.propos.password).toEqual(props.password);
    expect(sut.propos.createdAt).toBeInstanceOf(Date);
  });

  it('should return Name of user', () => {
    expect(sut.getName()).toBeDefined();
    expect(sut.getName()).toEqual(props.name);
    expect(typeof sut.getName()).toEqual('string');
  });

  it('should return Email of user', () => {
    expect(sut.getEmail()).toBeDefined();
    expect(sut.getEmail()).toEqual(props.email);
    expect(typeof sut.getEmail()).toEqual('string');
  });

  it('should return Password of user', () => {
    expect(sut.getPassword).toBeDefined();
    expect(sut.getPassword()).toEqual(props.password);
    expect(typeof sut.getPassword()).toEqual('string');
  });

  it('should return createdAt of user', () => {
    expect(sut.getCreatedAt).toBeDefined();
    expect(sut.getCreatedAt()).toBeInstanceOf(Date);
  });
});
