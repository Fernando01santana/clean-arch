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
});
