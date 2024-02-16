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
    sut['name'] = 'other name';
    expect(sut.props.name).toEqual('other name');
    expect(typeof sut.props.name).toEqual('string');
  });

  it('should update Name of user', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toEqual('string');
  });

  it('should return Email of user', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toEqual('string');
  });

  it('should return Password of user', () => {
    expect(sut.props.password).toBeDefined();
    expect(sut.props.password).toEqual(props.password);
    expect(typeof sut.props.password).toEqual('string');
  });

  it('should update Password of user', () => {
    sut['password'] = 'another password';
    expect(sut.props.password).toEqual('another password');
    expect(typeof sut.props.password).toEqual('string');
  });

  it('should return createdAt of user', () => {
    expect(sut.props.createdAt).toBeDefined();
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });
  it('should update Name of user using method update', () => {
    sut.updateName('Another name');
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual('Another name');
    expect(typeof sut.props.name).toEqual('string');
  });

  it('should update Password of user using method updatePassword', () => {
    sut.updatePassword('Another password');
    expect(sut.props.password).toBeDefined();
    expect(sut.props.password).toEqual('Another password');
    expect(typeof sut.props.password).toEqual('string');
  });
});
