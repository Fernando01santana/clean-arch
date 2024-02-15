import { UserDataBuilder } from '../../../testing/helpers/user-data-builder';
import { UserEntity, UserProps } from '../../user.entity';
describe('User entities', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});
    sut = new UserEntity(props);
  });
  it('should constructor method', () => {
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
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
